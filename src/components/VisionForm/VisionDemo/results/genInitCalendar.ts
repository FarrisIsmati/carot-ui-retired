//
// Calculate length of days/months/years
//

import {
	ResultsCalendar,
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import moment from "moment";
import { initLifetimeValues, initTotalValues } from "./values";

// Days calc
const calculateResultsDaysLength = (curDate: string, endDate: string) => {
	// If end month and year is same as cur date, use end date instead of end of month
	const isCurMonthAndYearSameAsEndMonthAndYear =
		moment(curDate).isSame(endDate, "year") &&
		moment(curDate).isSame(endDate, "month");

	if (isCurMonthAndYearSameAsEndMonthAndYear) {
		return Math.round(moment(endDate).diff(moment(curDate), "days", true)) + 1; // Note: array ends 1 day early (at end) need to add extra day
	}

	return Math.round(
		moment(curDate).endOf("month").diff(moment(curDate), "days", true)
	);
};

// Months calc
const calculateResultsMonthsLength = (curDate: string, endDate: string) => {
	// If cur year is same as end year, use end date instead of end of year
	const isCurYearSameAsEndYear = moment(curDate).isSame(endDate, "year");

	if (isCurYearSameAsEndYear) {
		return Math.round(moment(endDate).diff(moment(curDate), "months", true));
	}

	return Math.round(
		moment(curDate).endOf("year").diff(moment(curDate), "months", true)
	);
};

// Years calc
const calculateResultsYearsLength = (startDate: string, endDate: string) => {
	return Math.round(moment(endDate).diff(moment(startDate), "years", true)) + 1;
};

//
// Get Year/Month value
//

// Get month from index 0-11
const getMonthFromIndex = (i: number) => {
	return moment().month(i).format("MMMM");
};

// Get current year given date string
const getCurrentYear = (curDate: string, i?: number) => {
	const year = moment(curDate).year();
	return i ? year + i : year;
};

//
// Generate results (years, months, days)
//

// Create init months results
const generateInitResultsDays = (curDate: string, endDate: string) => {
	const length = calculateResultsDaysLength(curDate, endDate);
	const days = new Array(length).fill({});
	return days.map((_, i) => {
		const resultsDay: ResultsDay = {
			date: moment(curDate).add(i, "days").format("MM/DD/YYYY"),
			isOpen: false, // default to closed

			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsDay;
	});
};

// Create init months results
const generateInitResultsMonths = (curDate: string, endDate: string) => {
	const length = calculateResultsMonthsLength(curDate, endDate);
	const months = new Array(length).fill({});

	// Incase starting month is not january need to offset month index by starting month index
	const startingMonthIndex = moment(curDate).month();

	return months.map((_, i) => {
		// First value needs to be itself, otherwise all other months need to start at first day of month before incrementing month by index
		const startingDate =
			i === 0
				? curDate
				: moment(curDate).startOf("month").add(i, "month").format("MM/DD/YYYY");
		const resultsMonth: ResultsMonth = {
			days: generateInitResultsDays(startingDate, endDate),
			month: getMonthFromIndex(i + startingMonthIndex),

			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsMonth;
	});
};

// Create inital years results
const generateInitResultsYears = (startDate: string, endDate: string) => {
	const length = calculateResultsYearsLength(startDate, endDate);
	const years = new Array(length).fill({});
	return years.map((_, i) => {
		const resultsYear: ResultsYear = {
			months:
				i === 0
					? generateInitResultsMonths(startDate, endDate)
					: generateInitResultsMonths(
							moment()
								.year(getCurrentYear(startDate, i))
								.startOf("year")
								.toString(),
							endDate
					  ),
			year: getCurrentYear(startDate, i),

			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsYear;
	});
};

// Create inital calendar results
export const generateInitResultsCalendar = (
	startDate: string,
	endDate: string
) => {
	const resultsCalendar: ResultsCalendar = {
		years: generateInitResultsYears(startDate, endDate),
		...initLifetimeValues,
	};

	return resultsCalendar;
};
