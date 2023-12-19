import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";

import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import { round } from "lodash";
import moment from "moment";
import { updateCalendarValuesLease } from "../calendarCalculate/lease";
import { genInitLeaseCalendar } from "../calendarInitialize";
import { getPrevDay, getPrevMonth } from "./helpers";

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendarLease = ({
	calendar,
	companyValues,
	leaseValues,
}: {
	calendar: Calendar;
	companyValues: CompanyCalendarValues;
	leaseValues: LocationLeaseCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];

		updateCalendarYear({ year, prevYear, leaseValues, companyValues });
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	//
	// Get lease
	//
	const lease = genInitLeaseCalendar(leaseValues);

	//
	// Lease
	//
	const lastLease = lastCalendarYear.leases[lease.id];

	// lease paid
	lease.lifetimeLeasePaid = lastLease.lifetimeLeasePaid;
	calendar.leases[lease.id] = lease;

	//
	// Company
	//
	// Expenses
	calendar.lifetimeExpenses = lastCalendarYear.lifetimeExpenses;
	// Profit
	calendar.lifetimeProfit = lastCalendarYear.lifetimeProfit;
	// Reserves
	calendar.lifetimeReserves = lastCalendarYear.lifetimeReserves;
};

const updateCalendarYear = ({
	year,
	prevYear,
	companyValues,
	leaseValues,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
	leaseValues: LocationLeaseCalendarValues;
}) => {
	let leaseCost = 0;
	let totalExpenses = 0;
	let totalProfit = 0;
	let totalReserves = 0;

	//
	// Get Lease
	//
	const lease = genInitLeaseCalendar(leaseValues);
	const prevLease = prevYear && prevYear.leases[leaseValues.id];

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		const {
			monthLeaseCost,
			monthTotalExpenses,
			monthTotalProfit,
			monthTotalReserves,
		} = updateCalendarMonth({ month, prevMonth, companyValues, leaseValues });

		// Calculate yearly total lease costs
		leaseCost += monthLeaseCost;

		// Update monthly company values
		totalExpenses += monthTotalExpenses;
		totalProfit += monthTotalProfit;
		totalReserves += monthTotalReserves;
	});

	// Update calendar values
	updateCalendarValuesLease({
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		lease,
		prevLease,
		leaseCost,
		totalExpenses,
		totalProfit,
		totalReserves,
	});
};

/**
 * Only assume our period for leases is monthly, not handling daily values (not letting users set period rn)
 * @param param0
 */
const updateCalendarMonth = ({
	month,
	prevMonth,
	companyValues,
	leaseValues,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
	leaseValues: LocationLeaseCalendarValues;
}) => {
	let leaseCost = 0;
	let totalExpenses = 0;
	let totalProfit = 0;
	let totalReserves = 0;

	const lease = genInitLeaseCalendar(leaseValues);
	const prevLease = prevMonth && prevMonth.leases[leaseValues.id];

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		const { dayLeastCost, dayTotalExpenses, dayTotalProfit, dayTotalReserves } =
			updateCalendarDay({
				day,
				prevDay,
				companyValues,
				leaseValues,
			});

		// Calculate monthly total revenue
		leaseCost += dayLeastCost;

		// Update monthly company values
		totalExpenses += dayTotalExpenses;
		totalProfit += dayTotalProfit;
		totalReserves += dayTotalReserves;
	});

	// Update calendar values
	updateCalendarValuesLease({
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		lease,
		prevLease,
		leaseCost,
		totalExpenses,
		totalProfit,
		totalReserves,
	});

	return {
		monthLeaseCost: leaseCost,
		monthTotalExpenses: totalExpenses,
		monthTotalProfit: totalProfit,
		monthTotalReserves: totalReserves,
	};
};

const updateCalendarDay = ({
	day,
	prevDay,
	companyValues,
	leaseValues,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	leaseValues: LocationLeaseCalendarValues;
}) => {
	let totalExpenses = 0;
	//
	// Add initial construction costs to first day
	//
	if (day.date && moment(day.date).isSame(companyValues.startDate)) {
		totalExpenses += leaseValues.initialConstructionCost;
	}

	//
	// Lease
	//
	const lease = genInitLeaseCalendar(leaseValues);
	const prevLease = prevDay && prevDay.leases[leaseValues.id];
	const leaseCost = round(lease.periodCost / moment(day.date).daysInMonth(), 2); // Estimating a daily cost will cost the monthly divided by days in month
	totalExpenses += leaseCost;

	//
	// Company
	//
	const totalProfit = -1 * totalExpenses; // profit is equal to only expenses incurred here, no revenue to offset it
	const totalReserves = totalProfit;

	// Update calendar values
	updateCalendarValuesLease({
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		lease,
		prevLease,
		leaseCost,
		totalExpenses,
		totalProfit,
		totalReserves,
	});

	return {
		dayLeastCost: leaseCost,
		dayTotalExpenses: totalExpenses,
		dayTotalProfit: totalProfit,
		dayTotalReserves: totalReserves,
	};
};
