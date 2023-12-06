/**
 * Product results for calendar
 */
export interface ProductCalendar
	extends ProductCalendarTotal,
		ProductCalendarLifetime {
	id: string;
	name: string;
	locationIds: Set<string>;
	retailPrice: number;
	customerConversionRate: number;
}

interface ProductCalendarTotal {
	// Expenses
	totalExpenses: number;

	// Revenue
	totalRevenue: number;

	// Profit
	totalProfit: number;

	// Taxes
	totalTaxes: number;
}

interface ProductCalendarLifetime {
	// Expenses
	lifetimeExpenses: number;

	// Revenue
	lifetimeRevenue: number;

	// Profit
	lifetimeProfit: number;

	// Taxes
	lifetimeTaxes: number;
}
