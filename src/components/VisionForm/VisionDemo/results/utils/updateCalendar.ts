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
	});

	// Add yearly total revenue
	calendar.lifetimeRevenue =
		calendar.years[calendar.years.length - 1].lifetimeRevenue;
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

	// If no previous year
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
	let totalRevenue = 0;

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		updateCalendarMonth(month, prevMonth, companyValues);

		// Calculate annual total revenue
		totalRevenue += month.totalRevenue;
	});

	// Add yearly total revenue
	year.totalRevenue = totalRevenue;
	year.lifetimeRevenue = prevYear
		? prevYear.lifetimeRevenue + year.totalRevenue
		: year.totalRevenue;
};

const getPrevDay = ({
	month,
	prevMonth,
	day,
	i,
}: {
	month: ResultsMonth;
	prevMonth: ResultsMonth | null;
	day: ResultsDay;
	i: number;
}) => {
	// If there is a prev month and your on first day of year
	if (!!prevMonth && month.days[0].date === day.date) {
		return prevMonth.days[prevMonth.days.length - 1];
	}

	// If no previous month
	if (!!!prevMonth && month.days[0].date === day.date) {
		return null;
	}

	// If not first day of year
	if (month.days[0].date !== day.date) {
		return month.days[i - 1];
	}

	return null;
};

const updateCalendarMonth = (
	month: ResultsMonth,
	prevMonth: ResultsMonth | null,
	companyValues: ResultsCompanyValues
) => {
	let totalRevenue = 0;

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		updateCalendarDay(day, prevDay, companyValues);

		// Calculate monthly total revenue
		totalRevenue += day.totalRevenue;
	});

	// Add monthly total revenue
	month.totalRevenue = totalRevenue;
	month.lifetimeRevenue = prevMonth
		? prevMonth.lifetimeRevenue + month.totalRevenue
		: month.totalRevenue;
};

const updateCalendarDay = (
	day: ResultsDay,
	prevDay: ResultsDay | null,
	companyValues: ResultsCompanyValues
) => {
	//
	// Physical Calculation
	//

	//
	// If this is a product add product info
	//

	//
	// Calculate # of visitors
	//

	// Hours open per day (only calculating generic not by actual hour)
	const hoursOpen = companyValues.hoursOpenPerDayGeneric;
	// How long on average a patron will spend within the physical store
	const footTrafficTurnoverTime = companyValues.trafficTurnoverTime; // in minutes
	// Maximum amount of people than can be in the store at any given time
	const maxOccupancy = companyValues.maxOccupancy;
	// Average amount of people in the store at any given time (multiply potential max by the curve)
	const averageOccupancy = maxOccupancy * 1; // change to companyValues.curve
	// Number of customers that enter the store per hour
	const visitorsPerHour =
		Math.round(60 / footTrafficTurnoverTime) * averageOccupancy;
	// Number of customers per day
	const visitorsPerDay = hoursOpen * visitorsPerHour;

	//
	// Calculate revenue
	//

	// Daily revenue earned
	const dailyRevenue =
		visitorsPerDay *
		(companyValues.customerConversionRate / 100) *
		companyValues.retailPrice;
	day.totalRevenue = dailyRevenue;
	day.lifetimeRevenue = prevDay
		? prevDay.lifetimeRevenue + day.totalRevenue
		: day.totalRevenue;
};
