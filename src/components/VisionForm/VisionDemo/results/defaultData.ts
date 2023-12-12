import moment from "moment";
import { CalendarResult } from "./utils/calendarResults";

// Default
export const defaultVisionDemoLineChartData: CalendarResult[] = [
	{ date: new Date(), lifetimeRevenue: 100000, lifetimeExpenses: 0 },
	{
		date: moment().add(2, "years").toDate(),
		lifetimeRevenue: 1000,
		lifetimeExpenses: 0,
	},
];
