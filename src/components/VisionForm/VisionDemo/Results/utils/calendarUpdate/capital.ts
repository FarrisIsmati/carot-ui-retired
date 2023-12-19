import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import moment from "moment";
import { updateCalendarValuesCapital } from "../calendarCalculate/capital";
import { getPrevDay, getPrevMonth } from "./helpers";

//
// Functions to loop through entire calendar
//

// Despite only being used to update starting capital we loop through entire calendar
// This is for when additional capital is unlocked at certain dates
export const updateCalendarCapital = ({
	calendar,
	companyValues,
	investor,
}: {
	calendar: Calendar;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];
		updateCalendarYear({ year, prevYear, companyValues, investor });
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	// Reserves
	calendar.lifetimeReserves = lastCalendarYear.lifetimeReserves;
	// Invested
	calendar.lifetimeInvested = lastCalendarYear.lifetimeInvested;
};

const updateCalendarYear = ({
	year,
	prevYear,
	companyValues,
	investor,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	let totalInvested = 0;

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });
		const { monthTotalInvested } = updateCalendarMonth({
			month,
			prevMonth,
			companyValues,
			investor,
		});

		// Update total reserves
		totalInvested += monthTotalInvested;
	});

	// Update calendar values
	updateCalendarValuesCapital({
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		totalInvested,
	});

	return {
		monthTotalInvested: totalInvested,
	};
};

const updateCalendarMonth = ({
	month,
	prevMonth,
	companyValues,
	investor,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	let totalInvested = 0;

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });
		const { dayTotalInvested } = updateCalendarDay({
			day,
			prevDay,
			companyValues,
			investor,
		});

		// Update total reserves
		totalInvested += dayTotalInvested;
	});

	// Update calendar values
	updateCalendarValuesCapital({
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		totalInvested,
	});

	return {
		monthTotalInvested: totalInvested,
	};
};

const updateCalendarDay = ({
	day,
	prevDay,
	companyValues,
	investor,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	let totalInvested = 0;
	// Only for first day
	if (
		(day as DayCalendar).date &&
		moment(day.date).isSame(companyValues.startDate)
	) {
		totalInvested = investor.initialInvestment; // NOTE THIS IS NOT TAXED IF IT'S EQUITY FINANCING
	}

	// Update calendar values
	updateCalendarValuesCapital({
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		totalInvested,
	});

	return {
		dayTotalInvested: totalInvested,
	};
};
