import moment from "moment";

/**
 * Get length between two dates
 */
export const datesDifference = (
	startDate: string | undefined,
	endDate: string | undefined,
	unitOfTime: moment.unitOfTime.Diff | undefined
) => {
	if (!startDate || !endDate) {
		return 0;
	}

	return moment(endDate).diff(startDate, unitOfTime);
};

/**
 * Calculate number of days within the same month
 * @param curDate
 * @param endDate
 * @returns
 */
export const calculateResultsDaysLength = (
	curDate: string,
	endDate: string
) => {
	// If end month and year is same as cur date, use end date instead of end of month
	const isCurMonthAndYearSameAsEndMonthAndYear =
		moment(curDate).isSame(endDate, "year") &&
		moment(curDate).isSame(endDate, "month");

	if (isCurMonthAndYearSameAsEndMonthAndYear) {
		return moment(endDate).date() - moment(curDate).date() + 1;
	}

	return moment(curDate).daysInMonth() - moment(curDate).date() + 1;
};

/**
 * Calculate number of months within same year
 * @param curDate
 * @param endDate
 * @returns
 */
export const calculateResultsMonthsLength = (
	curDate: string,
	endDate: string
) => {
	// If cur year is same as end year, use end date
	const isCurYearSameAsEndYear = moment(curDate).isSame(endDate, "year");

	if (isCurYearSameAsEndYear) {
		return moment(endDate).month() - moment(curDate).month() + 1;
	}

	// If cur year is not same as end year, use end of year
	return moment(curDate).endOf("year").month() - moment(curDate).month() + 1;
};

/**
 * Calculate number of years between two dates
 * @param startDate
 * @param endDate
 * @returns
 */
export const calculateResultsYearsLength = (
	startDate: string,
	endDate: string
) => {
	return moment(endDate).year() - moment(startDate).year() + 1;
};

/**
 * Get a month from index 0-11
 * @param i
 * @returns
 */
export const getMonthFromIndex = (i: number) => {
	return moment().month(i).format("MMMM");
};

/**
 * Get year from date, or increment year
 * @param curDate
 * @param i
 * @returns
 */
export const getCurrentYear = (curDate: string, i?: number) => {
	const year = moment(curDate).year();
	return i ? year + i : year;
};
