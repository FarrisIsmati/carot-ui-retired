import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";

import {} from "../calendarCalculate/company";
import { updateCalendarValuesTaxes } from "../calendarCalculate/taxes";
import { getPrevDay, getPrevMonth } from "./helpers";

interface TotalYear {
	profit: number;
}

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendarTaxes = ({
	calendar,
	companyValues,
}: {
	calendar: Calendar;
	companyValues: CompanyCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		// Captures the total values for the current year (so we know profits for the given year tax purposes)
		const totalYear = {
			profit: 0,
		};

		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];

		updateCalendarYear({ year, prevYear, companyValues, totalYear });
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	//
	// Company
	//
	// Taxes
	calendar.lifetimeTaxed = lastCalendarYear.lifetimeTaxed;
	// Reserves
	calendar.lifetimeReserves = lastCalendarYear.lifetimeReserves;
};

const updateCalendarYear = ({
	year,
	prevYear,
	companyValues,
	totalYear,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
	totalYear: TotalYear;
}) => {
	let totalRevenue = 0;
	let totalExpenses = 0;

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		updateCalendarMonth({ month, prevMonth, companyValues, totalYear });
		// Calculate yearly total revenue
		totalRevenue += month.totalRevenue;
		totalExpenses += month.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesTaxes({
		companyValues,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		totalYearProfit: totalYear.profit,
	});
};

const updateCalendarMonth = ({
	month,
	prevMonth,
	companyValues,
	totalYear,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
	totalYear: TotalYear;
}) => {
	let totalRevenue = 0;
	let totalExpenses = 0;

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		updateCalendarDay({ day, prevDay, companyValues, totalYear });

		// Calculate monthly total revenue
		totalRevenue += day.totalRevenue;
		totalExpenses += day.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesTaxes({
		companyValues,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		totalYearProfit: totalYear.profit,
	});
};

const updateCalendarDay = ({
	day,
	prevDay,
	companyValues,
	totalYear,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	totalYear: TotalYear;
}) => {
	//
	// Revenue, expense, profit, etc.
	//
	// Revenue
	const totalRevenue = day.totalRevenue;
	// Expenses
	const totalExpenses = day.totalExpenses;
	// Yearly profit
	totalYear.profit = totalYear.profit + totalRevenue - totalExpenses;
	// Update calendar values
	updateCalendarValuesTaxes({
		companyValues,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		totalYearProfit: totalYear.profit,
	});
};
