import {
	CompanyCalendarItemized,
	CompanyCalendarLifetime,
	CompanyCalendarTotal,
} from "@/types/VisionForm/calendar/company/companyCalendar";

/**
 * Init itemized revenue expense objects
 */
export const initItemizedObjects: CompanyCalendarItemized = {
	products: {},
	leases: {},
};

/**
 * Starting total and lifetime values for the calendar
 */

export const initTotalValues: CompanyCalendarTotal = {
	// Total revenue
	totalRevenue: 0,

	// Total expenses
	totalExpenses: 0,

	// Total taxes paid
	totalTaxes: 0,

	// Total profit
	totalProfit: 0,

	// Total reserves (company treasury)
	totalReserves: 0,

	// Total Invested
	totalInvested: 0,
};

export const initLifetimeValues: CompanyCalendarLifetime = {
	// Revenue
	lifetimeRevenue: 0,

	// Expenses
	lifetimeExpenses: 0,

	// Taxes
	lifetimeTaxes: 0,

	// Profit
	lifetimeProfit: 0,

	// Reserves
	lifetimeReserves: 0,

	// Invested
	lifetimeInvested: 0,
};
