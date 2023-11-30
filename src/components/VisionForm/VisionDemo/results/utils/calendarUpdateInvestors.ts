import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValuesCore } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { cloneDeep } from "lodash";
import { updateCalendarValuesInvestor } from "./calendarCalculate";
import { getPrevDay, getPrevMonth } from "./calendarUpdateHelpers";

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendarInvestor = ({
	calendar,
	companyValuesCore,
	investor,
}: {
	calendar: Calendar;
	companyValuesCore: CompanyCalendarValuesCore;
	investor: InvestorCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];
		updateCalendarYear({ year, prevYear, companyValuesCore, investor });
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
	companyValuesCore,
	investor,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValuesCore: CompanyCalendarValuesCore;
	investor: InvestorCalendarValues;
}) => {
	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });
		updateCalendarMonth({ month, prevMonth, companyValuesCore, investor });
	});

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		companyValuesCore,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		totalRevenue: year.totalRevenue,
		totalExpenses: year.totalExpenses,
	});
};

const updateCalendarMonth = ({
	month,
	prevMonth,
	companyValuesCore,
	investor,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValuesCore: CompanyCalendarValuesCore;
	investor: InvestorCalendarValues;
}) => {
	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });
		updateCalendarDay({ day, prevDay, companyValuesCore, investor });
	});

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		companyValuesCore,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		totalRevenue: month.totalRevenue,
		totalExpenses: month.totalExpenses,
	});
};

const updateCalendarDay = ({
	day,
	prevDay,
	companyValuesCore,
	investor,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValuesCore: CompanyCalendarValuesCore;
	investor: InvestorCalendarValues;
}) => {
	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		companyValuesCore,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		totalRevenue: day.totalRevenue,
		totalExpenses: day.totalExpenses,
	});
};
