import {
	ResultsCompanyLifetime,
	ResultsCompanyTotal,
} from "@/types/VisionForm/results/company";

/**
 * Starting total and lifetime values for the calendar
 */

export const initTotalValues: ResultsCompanyTotal = {
	// Total revenue
	totalRevenue: 0,

	// Total expenses
	totalExpenses: 0,

	// Total taxes paid
	totalTaxed: 0,

	// Total profit
	totalProfit: 0,

	// Total reserves (company treasury)
	totalReserves: 0,

	// Investors
	totalInvestorsResults: [],

	// Itemized Revenue and Expenses
	totalProductsResults: [],
	totalLocationsLeaseResults: [],
	// Todo Staff revenue/expenses
};

export const initLifetimeValues: ResultsCompanyLifetime = {
	// Revenue
	lifetimeRevenue: 0,

	// Expenses
	lifetimeExpenses: 0,

	// Taxes
	lifetimeTaxed: 0,

	// Profit
	lifetimeProfit: 0,

	// Reserves
	lifetimeReserves: 0,

	// Investors
	lifetimeInvestorsResults: [],

	// Product
	lifetimeProductsResults: [],
	lifetimeLocationsLeaseResults: [],
};
