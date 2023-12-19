//
// Generates the final array that the data visualizers will use to display data
//

import { CalendarResult } from "@/types/Charts";
import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";

export const genCalendarResults = (calendar: Calendar): CalendarResult[] => {
	const results: CalendarResult[] = [];
	calendar.years.forEach((year) => {
		updateCalendarYear(year, results);
	});
	return results;
};

const updateCalendarYear = (year: YearCalendar, results: CalendarResult[]) => {
	year.months.forEach((month) => {
		updateCalendarMonth(month, results);
	});
};

const updateCalendarMonth = (
	month: MonthCalendar,
	results: CalendarResult[]
) => {
	month.days.forEach((day) => {
		updateCalendarDay(day, results);
	});
};

const updateCalendarDay = (day: DayCalendar, results: CalendarResult[]) => {
	results.push({
		date: new Date(day.date),
		lifetimeRevenue: day.lifetimeRevenue,
		lifetimeProfit: day.lifetimeProfit,
		lifetimeExpenses: day.lifetimeExpenses,
	});
};
