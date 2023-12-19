import {
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";

//
// Calendar traversal helper methods
//

export const getPrevMonth = ({
	year,
	prevYear,
	month,
	i,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	month: MonthCalendar;
	i: number;
}) => {
	// If there is a prev year and your on first month of year
	if (!!prevYear && year.months[0].month === month.month) {
		return prevYear.months[prevYear.months.length - 1];
	}

	// If no previous year
	if (!!!prevYear && year.months[0].month === month.month) {
		return null;
	}

	// If not first month of year
	if (year.months[0].month !== month.month) {
		return year.months[i - 1];
	}

	return null;
};

export const getPrevDay = ({
	month,
	prevMonth,
	day,
	i,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	day: DayCalendar;
	i: number;
}) => {
	// If there is a prev month and your on first day of year
	if (!!prevMonth && month.days[0].date === day.date) {
		return prevMonth.days[prevMonth.days.length - 1];
	}

	// If no previous month
	if (!!!prevMonth && month.days[0].date === day.date) {
		return null;
	}

	// If not first day of year
	if (month.days[0].date !== day.date) {
		return month.days[i - 1];
	}

	return null;
};
