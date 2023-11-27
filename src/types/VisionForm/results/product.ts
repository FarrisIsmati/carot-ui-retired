/**
 * Product results for calendar
 */
export interface ProductResults
	extends ProductResultsTotal,
		ProductResultsLifetime {
	id: string;
	name: string;
	locationIds: Set<string>;
	retailPrice: number;
	customerConversionRate: number;
}

interface ProductResultsTotal {
	// Expenses
	totalExpenses: number;

	// Revenue
	totalRevenue: number;

	// Profit
	totalProfit: number;

	// Taxes
	totalTaxed: number;
}

interface ProductResultsLifetime {
	// Expenses
	lifetimeExpenses: number;

	// Revenue
	lifetimeRevenue: number;

	// Profit
	lifetimeProfit: number;

	// Taxes
	lifetimeTaxed: number;
}

/**
 * Product values we are calculating on
 */
export interface ProductValues {
	productName: string;
	productId: string;
	locationId: Set<string>;
	customerConversionRate: number;
	costToProduce: number;
	retailPrice: number;
}
