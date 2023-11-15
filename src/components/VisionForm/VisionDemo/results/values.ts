import {
	ResultsCompanyLifetime,
	ResultsCompanyTotal,
} from "@/types/VisionForm/results/company";

export const initTotalValues: ResultsCompanyTotal = {
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

export const initLifetimeValues: ResultsCompanyLifetime = {
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
