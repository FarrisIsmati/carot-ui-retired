/**
 * Product results for calendar
 */
export interface ProductResults
	extends ProductResultsTotal,
		ProductResultsLifetime {
	name: string;
	locationId: string;
	retailPrice: number;
	totalCustomerConversionRate: number;
}

interface ProductResultsTotal {
	// Expenses
	totalExpenses: number;

	// Revenue
	totalRevenue: number;

	// Profit
	totalProfit: number;
}

interface ProductResultsLifetime {
	// Expenses
	lifetimeExpenses: number;

	// Revenue
	lifetimeRevenue: number;

	// Profit
	lifetimeProfit: number;
}

/**
 * Product values we are calculating on
 */
export interface ProductValues {
	name: string;
	locationId: string;
	customerConversionRate: number;
	costToProduce: number;
	retailPrice: number;
}
