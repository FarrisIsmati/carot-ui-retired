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
import {
	initLifetimeValues,
	initTotalValues,
} from "../../../../types/VisionForm/results/values";
import {
	calculateResultsDaysLength,
	calculateResultsMonthsLength,
	calculateResultsYearsLength,
	getCurrentYear,
	getMonthFromIndex,
} from "../../utils/dates";

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
	if (moment(endDate).isBefore(startDate)) {
		throw new Error("Cannot have an end date starting before your start date");
	}
	const resultsCalendar: ResultsCalendar = {
		years: generateInitResultsYears(startDate, endDate),
		...initLifetimeValues,
	};
	return resultsCalendar;
};
