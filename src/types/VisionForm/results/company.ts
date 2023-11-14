import { InvestorResults } from "./investor";
import { LocationLeaseResults } from "./location";
import { ProductResults } from "./product";

// Current results for the given time interval
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

	// Investors
	totalInvestorsResults: InvestorResults[];

	// Itemized Revenue and Expenses
	totalProductsResults: ProductResults[];
	totalLocationsLeaseResults: LocationLeaseResults[];
	// Todo Staff revenue/expenses
}

// Current lifetime results at the given time interval
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

	// Investors
	lifetimeInvestorsResults: InvestorResults[];

	// Itemized Revenue and Expenses
	lifetimeProductsResults: ProductResults[];
	lifetimeLocationsLeaseResults: LocationLeaseResults[];
	// Todo Staff revenue/expenses
}
