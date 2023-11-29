import { LocationLeaseCalendar } from "./locationCalendar";
import { ProductCalendar } from "./productCalendar";

//
// Formatted calendar interface for all company values
//
export interface CompanyCalendar
	extends CompanyCalendarTotal,
		CompanyCalendarLifetime,
		CompanyCalendarItemized {}

// Current results for the given time interval
export interface CompanyCalendarTotal {
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
export interface CompanyCalendarLifetime {
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

export interface CompanyCalendarItemized {
	// Itemized Revenue and Expenses
	products: { [key: string]: ProductCalendar };
	leases: { [key: string]: LocationLeaseCalendar };
}
