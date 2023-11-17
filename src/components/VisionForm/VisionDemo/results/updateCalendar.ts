import {
	ResultsCalendar,
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendar = (
	calendar: ResultsCalendar,
	companyValues: ResultsCompanyValues
) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];
		const updatedYearValues = updateCalendarYear(year, prevYear, companyValues);
		// Update yearly values from previous to current year
	});
};

const getPrevMonth = ({
	year,
	prevYear,
	month,
	i,
}: {
	year: ResultsYear;
	prevYear: ResultsYear | null;
	month: ResultsMonth;
	i: number;
}) => {
	// If there is a prev year and your on first month of year
	if (!!prevYear && year.months[0].month === month.month) {
		return prevYear.months[prevYear.months.length - 1];
	}

	// If no previous month
	if (!!!prevYear && year.months[0].month === month.month) {
		return null;
	}

	// If not first month of year
	if (year.months[0].month !== month.month) {
		return year.months[i - 1];
	}

	return null;
};

const updateCalendarYear = (
	year: ResultsYear,
	prevYear: ResultsYear | null,
	companyValues: ResultsCompanyValues
) => {
	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });
		const updatedMonthValues = updateCalendarMonth(
			month,
			prevMonth,
			companyValues
		);
		// Update monthly values from previous to current month
	});
};

const updateCalendarMonth = (
	month: ResultsMonth,
	prevMonth: ResultsMonth | null,
	companyValues: ResultsCompanyValues
) => {
	month.days.forEach((day) => {
		const updatedDayValues = updateCalendarDay(day, companyValues);
		// Update daily values from previous to current day
	});
};

const updateCalendarDay = (
	day: ResultsDay,
	companyValues: ResultsCompanyValues
) => {
	console.log(companyValues);
	console.log(day.date);
	// Calculate daily values, return them
};
