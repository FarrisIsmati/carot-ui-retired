// Dimensions
export interface CalendarResult {
	date: Date;
	lifetimeRevenue: number;
	lifetimeExpenses: number;
	lifetimeProfit: number;
}

export interface Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

// Line Chart

export type LineChartKeyMapType = {
	[key in keyof Omit<CalendarResult, "date">]: string;
};
