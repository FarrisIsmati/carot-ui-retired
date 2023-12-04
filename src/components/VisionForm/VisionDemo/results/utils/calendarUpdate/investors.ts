import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { cloneDeep } from "lodash";
import { updateCalendarValuesInvestor } from "../calendarCalculate/calendarCalculate";
import { getPrevDay, getPrevMonth } from "./helpers";

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendarInvestor = ({
	calendar,
	companyValues,
	investor,
}: {
	calendar: Calendar;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];
		updateCalendarYear({ year, prevYear, companyValues, investor });
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	calendar.investors[investor.id] = cloneDeep(
		lastCalendarYear.investors[investor.id]
	);
	calendar.investors[investor.id].totalEarned = 0;
	calendar.investors[investor.id].totalPercentageInitialInvestmentRecouped = 0;
};

const updateCalendarYear = ({
	year,
	prevYear,
	companyValues,
	investor,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });
		updateCalendarMonth({ month, prevMonth, companyValues, investor });
	});

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		companyValues,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		totalRevenue: year.totalRevenue,
		totalExpenses: year.totalExpenses,
	});
};

const updateCalendarMonth = ({
	month,
	prevMonth,
	companyValues,
	investor,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });
		updateCalendarDay({ day, prevDay, companyValues, investor });
	});

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		companyValues,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		totalRevenue: month.totalRevenue,
		totalExpenses: month.totalExpenses,
	});
};

const updateCalendarDay = ({
	day,
	prevDay,
	companyValues,
	investor,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		companyValues,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		totalRevenue: day.totalRevenue,
		totalExpenses: day.totalExpenses,
	});
};
