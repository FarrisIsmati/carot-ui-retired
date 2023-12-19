import { CalendarResult } from "@/types/Charts";
import moment from "moment";

// Default
export const defaultVisionDemoLineChartData: CalendarResult[] = [
	{
		date: new Date(),
		lifetimeRevenue: 100000,
		lifetimeProfit: 0,
		lifetimeExpenses: 0,
	},
	{
		date: moment().add(2, "years").toDate(),
		lifetimeRevenue: 0,
		lifetimeProfit: 0,
		lifetimeExpenses: 0,
	},
];
