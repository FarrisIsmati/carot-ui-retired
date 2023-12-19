import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";

import {} from "../calendarCalculate/company";
import { calculateTaxes } from "../calendarCalculate/helpers";
import { updateCalendarValuesTaxes } from "../calendarCalculate/taxes";
import { getPrevDay, getPrevMonth } from "./helpers";

interface TotalYear {
	profit: number;
	taxes: number;
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
			taxes: 0,
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
	calendar.lifetimeTaxes = lastCalendarYear.lifetimeTaxes;
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
	let totalTaxes = 0;
	let totalReserves = 0;

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		const { monthTotalTaxes, monthTotalReserves } = updateCalendarMonth({
			month,
			prevMonth,
			companyValues,
			totalYear,
		});
		// Calculate yearly total revenue
		totalTaxes += monthTotalTaxes;
		totalReserves += monthTotalReserves;
	});

	// Update calendar values
	updateCalendarValuesTaxes({
		companyValues,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		totalTaxes,
		totalReserves,
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
	let totalTaxes = 0;
	let totalReserves = 0;

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		const { dayTotalTaxes, dayTotalReserves } = updateCalendarDay({
			day,
			prevDay,
			companyValues,
			totalYear,
		});

		// Calculate monthly total revenue
		totalTaxes += dayTotalTaxes;
		totalReserves += dayTotalReserves;
	});

	// Update calendar values
	updateCalendarValuesTaxes({
		companyValues,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		totalTaxes,
		totalReserves,
	});

	return {
		monthTotalTaxes: totalTaxes,
		monthTotalReserves: totalReserves,
	};
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
	// Company
	//
	// Profit
	const totalProfit = day.totalRevenue - day.totalExpenses;
	// Yearly profit (What profit we have so far for the year)
	totalYear.profit += totalProfit;
	// Taxes
	const totalTaxes = calculateTaxes({
		totalYearProfit: totalYear.profit,
		prevTotalYearProfit: totalYear.profit - totalProfit,
		totalYearTaxes: totalYear.taxes,
		profit: totalProfit,
		taxRate: companyValues.taxRate,
	});
	// What we've paid so far for taxes
	totalYear.taxes += totalTaxes;
	// Reserves
	const totalReserves = -1 * totalTaxes; // Taxes bring down total reserves
	// Update calendar values
	updateCalendarValuesTaxes({
		companyValues,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		totalTaxes,
		totalReserves,
	});

	return {
		dayTotalTaxes: totalTaxes,
		dayTotalReserves: totalReserves,
	};
};
