//
// Generates the final array that the data visualizers will use to display data
//

import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";

export const genCalendarResults = (calendar: Calendar) => {
	const results: DayCalendar[] = [];
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
		date: day.date,
		lifetimeRevenue: day.lifetimeRevenue,
		lifetimeExpenses: day.lifetimeExpenses,
	});
};
