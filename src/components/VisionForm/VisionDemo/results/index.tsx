import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import moment from "moment";
import { useSelector } from "react-redux";

// Two separate arrays (one for company, one for investors)

export interface ResultsInvestor {
	name: string;
}

export interface ResultsInvestorsLifetime {
	lifetimeEarnedLow: number;
	lifetimeEarnedAverage: number;
	lifetimeEarnedHigh: number;
}

export interface ResultsCompanyTotal {
	// Total revenue
	totalRevenueLow: number;
	totalRevenueAverage: number;
	totalRevenueHigh: number;

	// Total expenses
	totalExpensesLow: number;
	totalExpensesAverage: number;
	totalExpensesHigh: number;

	// Total taxes paid
	totalTaxedLow: number;
	totalTaxedAverage: number;
	totalTaxedHigh: number;

	// Total profit
	totalProfitLow: number;
	totalProfitAverage: number;
	totalProfitHigh: number;

	// Total reserves (company treasury)
	totalReservesLow: number;
	totalReservesAverage: number;
	totalReservesHigh: number;
}

export interface ResultsCompanyLifetime {
	// Life time revenue
	lifetimeRevenueLow: number;
	lifetimeRevenueAverage: number;
	lifetimeRevenueHigh: number;

	// Life time expenses
	lifetimeExpensesLow: number;
	lifetimeExpensesAverage: number;
	lifetimeExpensesHigh: number;

	// Life time taxes paid
	lifetimeTaxedLow: number;
	lifetimeTaxedAverage: number;
	lifetimeTaxedHigh: number;

	// Life time profit
	lifetimeProfitLow: number;
	lifetimeProfitAverage: number;
	lifetimeProfitHigh: number;

	// Life time reserves (company treasury)
	lifetimeReservesLow: number;
	lifetimeReservesAverage: number;
	lifetimeReservesHigh: number;
}

export interface ResultsDay
	extends ResultsCompanyLifetime,
		ResultsCompanyTotal {
	date: string;
}

export interface ResultsMonth
	extends ResultsCompanyLifetime,
		ResultsCompanyTotal {
	days: [];
	month: string;
}

export interface ResultsYear
	extends ResultsCompanyLifetime,
		ResultsCompanyTotal {
	months: ResultsMonth[];
	year: number;
}

export interface ResultsCalendar extends ResultsCompanyLifetime {
	years: ResultsYear[];
}

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;
	const totalDays = moment(endDate).diff(moment(startDate), "days");

	return <p>Le results</p>;
};
