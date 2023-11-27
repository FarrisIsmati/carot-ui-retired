import { LocationLeaseResults, LocationLeaseValues } from "./location";
import { ProductResults, ProductValues } from "./product";

export interface ResultsCompany
	extends ResultsCompanyTotal,
		ResultsCompanyLifetime,
		ResultsCompanyItemized {}

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
}

export interface ResultsCompanyItemized {
	// Itemized Revenue and Expenses
	products: { [key: string]: ProductResults };
	leases: { [key: string]: LocationLeaseResults };
}

// All values that need to be passed into the calendar results function
export interface ResultsCompanyValues
	extends ProductValues,
		LocationLeaseValues {
	fixedCompanyValues: FixedCompanyValues;
}

// Values getCompanyValues will return
export interface FixedCompanyValues {
	startDate: string;
	endDate: string;
	taxRate: number;
}
