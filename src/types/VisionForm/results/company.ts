import { InvestorResults } from "./investor";
import { LocationLeaseResults, LocationLeaseValues } from "./location";
import { ProductResults, ProductValues } from "./product";

// Current results for the given time interval
export interface ResultsCompanyTotal {
	// Total revenue
	totalRevenue: number;

	// Total expenses
	totalExpenses: number;

	// Total taxes paid
	totalTaxed: number;

	// Total profit
	totalProfit: number;

	// Total reserves (company treasury)
	totalReserves: number;

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
	lifetimeRevenue: number;

	// Life time expenses
	lifetimeExpenses: number;

	// Life time taxes paid
	lifetimeTaxed: number;

	// Life time profit
	lifetimeProfit: number;

	// Life time reserves (company treasury)
	lifetimeReserves: number;

	// Investors
	lifetimeInvestorsResults: InvestorResults[];

	// Itemized Revenue and Expenses
	lifetimeProductsResults: ProductResults[];
	lifetimeLocationsLeaseResults: LocationLeaseResults[];
	// Todo Staff revenue/expenses
}

// All values that need to be passed into the calendar results function
export interface ResultsCompanyValues
	extends ProductValues,
		LocationLeaseValues {}
