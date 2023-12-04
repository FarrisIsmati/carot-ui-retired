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
import { updateCalendarValuesLease } from "../calendarCalculate/calendarCalculate";
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
	// Taxes
	calendar.lifetimeTaxed = lastCalendarYear.lifetimeTaxed;
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
	let totalRevenue = 0;
	let totalExpenses = 0;

	//
	// Get Lease
	//
	const lease = genInitLeaseCalendar(leaseValues);
	const prevLease = prevYear && prevYear.leases[leaseValues.id];

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		updateCalendarMonth({ month, prevMonth, companyValues, leaseValues });

		// Calculate yearly total lease costs
		leaseCost += month.leases[leaseValues.id].periodCost;

		// Update monthly company values
		totalRevenue += month.totalRevenue;
		totalExpenses += month.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesLease({
		companyValues,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		lease,
		prevLease,
		leaseCost,
		totalRevenue,
		totalExpenses,
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
	let totalRevenue = 0;
	let totalExpenses = 0;

	const lease = genInitLeaseCalendar(leaseValues);
	const prevLease = prevMonth && prevMonth.leases[leaseValues.id];

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		updateCalendarDay({
			day,
			prevDay,
			companyValues,
			leaseValues,
		});

		// Calculate monthly total revenue
		leaseCost += day.leases[leaseValues.id].totalLeasePaid;

		// Update monthly company values
		totalRevenue += day.totalRevenue;
		totalExpenses += day.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesLease({
		companyValues,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		lease,
		prevLease,
		leaseCost,
		totalRevenue,
		totalExpenses,
	});
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
	//
	// Get Product
	//
	const lease = genInitLeaseCalendar(leaseValues);
	const prevLease = prevDay && prevDay.leases[leaseValues.id];
	const leaseCost = round(lease.periodCost / moment(day.date).daysInMonth(), 2); // Estimating a daily cost will cost the monthly divided by days in month

	// Update calendar values
	updateCalendarValuesLease({
		companyValues,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		lease,
		prevLease,
		leaseCost,
		totalRevenue: day.totalRevenue,
		totalExpenses: day.totalExpenses + leaseCost,
	});
};
