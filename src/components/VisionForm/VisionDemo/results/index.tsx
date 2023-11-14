import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import {
	ResultsCalendar,
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import {
	ResultsCompanyLifetime,
	ResultsCompanyTotal,
} from "@/types/VisionForm/results/company";
import moment from "moment";
import { useSelector } from "react-redux";

const initTotalValues: ResultsCompanyTotal = {
	// Total revenue
	totalRevenueLow: 0,
	totalRevenueAverage: 0,
	totalRevenueHigh: 0,

	// Total expenses
	totalExpensesLow: 0,
	totalExpensesAverage: 0,
	totalExpensesHigh: 0,

	// Total taxes paid
	totalTaxedLow: 0,
	totalTaxedAverage: 0,
	totalTaxedHigh: 0,

	// Total profit
	totalProfitLow: 0,
	totalProfitAverage: 0,
	totalProfitHigh: 0,

	// Total reserves (company treasury)
	totalReservesLow: 0,
	totalReservesAverage: 0,
	totalReservesHigh: 0,

	// Investors
	totalInvestorsResults: [],

	// Itemized Revenue and Expenses
	totalProductsResults: [],
	totalLocationsLeaseResults: [],
	// Todo Staff revenue/expenses
};

const initLifetimeValues: ResultsCompanyLifetime = {
	// Revenue
	lifetimeRevenueLow: 0,
	lifetimeRevenueAverage: 0,
	lifetimeRevenueHigh: 0,

	// Expenses
	lifetimeExpensesLow: 0,
	lifetimeExpensesAverage: 0,
	lifetimeExpensesHigh: 0,

	// Taxes
	lifetimeTaxedLow: 0,
	lifetimeTaxedAverage: 0,
	lifetimeTaxedHigh: 0,

	// Profit
	lifetimeProfitLow: 0,
	lifetimeProfitAverage: 0,
	lifetimeProfitHigh: 0,

	// Reserves
	lifetimeReservesLow: 0,
	lifetimeReservesAverage: 0,
	lifetimeReservesHigh: 0,

	// Investors
	lifetimeInvestorsResults: [],

	// Product
	lifetimeProductsResults: [],
	lifetimeLocationsLeaseResults: [],
};

//
// Calculate length of days/months/years
//

// Days calc
const calculateResultsDaysLength = (curDate: string) => {
	return Math.ceil(
		moment(curDate).endOf("month").diff(moment(curDate), "days", true)
	);
};

// Months calc
const calculateResultsMonthsLength = (curDate: string) => {
	return Math.ceil(
		moment(curDate).endOf("year").diff(moment(curDate), "months", true)
	);
};

// Years calc
const calculateResultsYearsLength = (startDate: string, endDate: string) => {
	return Math.ceil(moment(endDate).diff(moment(startDate), "years", true));
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
// Generate results
//

// Create init months results
const generateInitResultsDays = (startDate: string) => {
	const length = calculateResultsDaysLength(startDate);
	const days = new Array(length).fill({});
	return days.map((_, i) => {
		const resultsDay: ResultsDay = {
			date: moment(startDate).add(i, "days").format("MM/DD/YYYY"),
			isOpen: false, // default to closed

			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsDay;
	});
};

// Create init months results
const generateInitResultsMonths = (startDate: string) => {
	const length = calculateResultsMonthsLength(startDate);
	const months = new Array(length).fill({});

	// Incase starting month is not january need to offset month index by starting month index
	const startingMonthIndex = moment(startDate).month();

	// Is start date first day of month
	const isStartDateFirstDayOfMonth = moment(startDate).isSame(
		moment(startDate).startOf("month")
	);

	return months.map((_, i) => {
		// First value needs to be itself, otherwise all other months need to start at first day of month before incrementing month by index
		const startingDate =
			i === 0
				? startDate
				: moment(startDate)
						.startOf("month")
						.add(i, "month")
						.format("MM/DD/YYYY");
		const resultsMonth: ResultsMonth = {
			days: generateInitResultsDays(startingDate),
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
					? generateInitResultsMonths(startDate)
					: generateInitResultsMonths(
							moment()
								.year(getCurrentYear(startDate, i))
								.startOf("year")
								.toString()
					  ),
			year: getCurrentYear(startDate, i),

			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsYear;
	});
};

// Create inital calendar results
const generateInitResultsCalendar = (startDate: string, endDate: string) => {
	const resultsCalendar: ResultsCalendar = {
		years: generateInitResultsYears(startDate, endDate),

		...initLifetimeValues,
	};

	return resultsCalendar;
};

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;
	const calendar = generateInitResultsCalendar(startDate, endDate);
	console.log(calendar);
	return <p>Le results</p>;
};
