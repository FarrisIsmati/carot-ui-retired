import {
	ResultsCompanyItemized,
	ResultsCompanyLifetime,
	ResultsCompanyTotal,
} from "@/types/VisionForm/results/company";

/**
 * Init itemized revenue expense objects
 */
export const initItemizedObjects: ResultsCompanyItemized = {
	products: {},
	leases: {},
};

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
};
