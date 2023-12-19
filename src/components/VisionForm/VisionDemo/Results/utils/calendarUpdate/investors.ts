import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { cloneDeep, round } from "lodash";
import { updateCalendarValuesInvestor } from "../calendarCalculate/investor";
import { genInitInvestorCalendar } from "../calendarInitialize";
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
	// Clear out values (only want to update lifetime not total)
	calendar.investors[investor.id].totalEarned = 0;
	calendar.investors[investor.id].totalPercentageInitialInvestmentRecouped = 0;
};

const updateCalendarYear = ({
	year,
	prevYear,
	companyValues,
	investor: i,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	let earned = 0;
	let percentageInvestmentRecouped = 0;

	//
	// Get Investor
	//
	if (!(i.id in year.investors)) {
		year.investors[i.id] = genInitInvestorCalendar(i);
	}
	const investor = year.investors[i.id];
	const prevInvestor = prevYear?.investors[i.id] ?? null;

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });
		const { monthEarned, monthPercentageInvestmentRecouped } =
			updateCalendarMonth({ month, prevMonth, companyValues, investor });

		earned += monthEarned;
		percentageInvestmentRecouped += monthPercentageInvestmentRecouped;
	});

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		prevInvestor,
		earned,
		percentageInvestmentRecouped,
	});
};

const updateCalendarMonth = ({
	month,
	prevMonth,
	companyValues,
	investor: i,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	let earned = 0;
	let percentageInvestmentRecouped = 0;

	//
	// Get Investor
	//
	if (!(i.id in month.investors)) {
		month.investors[i.id] = genInitInvestorCalendar(i);
	}
	const investor = month.investors[i.id];
	const prevInvestor = prevMonth?.investors[i.id] ?? null;

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });
		const { dayEarned, dayPercentageInvestmentRecouped } = updateCalendarDay({
			day,
			prevDay,
			companyValues,
			investor,
		});

		// Investor
		earned += dayEarned;
		percentageInvestmentRecouped += dayPercentageInvestmentRecouped;
	});

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		prevInvestor,
		earned,
		percentageInvestmentRecouped,
	});

	return {
		monthEarned: earned,
		monthPercentageInvestmentRecouped: percentageInvestmentRecouped,
	};
};

const updateCalendarDay = ({
	companyValues,
	day,
	prevDay,
	investor: i,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
}) => {
	//
	// Get Investor
	//
	if (!(i.id in day.investors)) {
		day.investors[i.id] = genInitInvestorCalendar(i);
	}
	const investor = day.investors[i.id];
	const prevInvestor = prevDay?.investors[i.id] ?? null;

	// Equity in company
	const equity = round(100 / i.equity, 2);
	// Daily amount earned
	const earned = getInvestorDailyEarned({
		day,
		companyValues,
		equity,
		prevDay,
		investor,
	});
	// Investmetn recouped
	const percentageInvestmentRecouped = round(
		100 * (earned / investor.initialInvestment),
		4
	);

	// Update calendar values
	updateCalendarValuesInvestor({
		investor,
		prevInvestor,
		earned,
		percentageInvestmentRecouped,
	});

	return {
		dayEarned: earned,
		dayPercentageInvestmentRecouped: percentageInvestmentRecouped,
	};
};

//
// Helper func
//
// Get investors cash flow and when it was cashed
// Right now only starting day since investors cannot set when they want their cash to start
const getInvestorDailyEarned = ({
	day,
	prevDay,
	companyValues,
	investor,
	equity,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	investor: InvestorCalendarValues;
	equity: number;
}) => {
	// Starting date
	if (day.date === companyValues.startDate) {
		return round((day.totalReserves - investor.initialInvestment) * equity, 2);
	}

	if (prevDay) {
		return round((day.lifetimeReserves - prevDay.lifetimeReserves) * equity, 2);
	}

	return 0;
};
