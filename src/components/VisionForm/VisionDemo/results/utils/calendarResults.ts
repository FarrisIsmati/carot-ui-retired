//
// Generates the final array that the data visualizers will use to display data
//

export interface CalendarResult {
	date: Date;
	lifetimeRevenue: number;
	lifetimeExpenses: number;
}

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

const updateCalendarYear = (year: YearCalendar, results: any[]) => {
	year.months.forEach((month) => {
		updateCalendarMonth(month, results);
	});
};

const updateCalendarMonth = (month: MonthCalendar, results: any[]) => {
	month.days.forEach((day) => {
		updateCalendarDay(day, results);
	});
};

const updateCalendarDay = (day: DayCalendar, results: any[]) => {
	results.push({
		date: new Date(day.date),
		lifetimeRevenue: day.lifetimeRevenue,
		lifetimeExpenses: day.lifetimeExpenses,
	});
};
