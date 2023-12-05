import { CalendarType, DayCalendar } from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { LocationLeaseCalendar } from "@/types/VisionForm/calendar/location/leaseCalendar";
import { round } from "lodash";
import moment from "moment";
import { updateExpense, updateProfit, updateReserves } from "./company";

/**
 * Updates investor object with new company reserves inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateLeasePaid = (
	obj: LocationLeaseCalendar,
	prevObj: LocationLeaseCalendar | null,
	cost: number
) => {
	obj.totalLeasePaid = cost;
	obj.lifetimeLeasePaid = prevObj
		? round(prevObj.lifetimeLeasePaid + obj.totalLeasePaid, 2)
		: obj.totalLeasePaid;
};

export interface UpdateCalendarValuesLeaseProps {
	date?: string;
	companyValues: CompanyCalendarValues;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	lease: LocationLeaseCalendar;
	prevLease: LocationLeaseCalendar | null;
	leaseCost: number;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, lease for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesLease = ({
	companyValues,
	unitOfTime,
	prevUnitOfTime,
	lease,
	prevLease,
	leaseCost,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesLeaseProps) => {
	//
	// Initial Values
	// For anything that needs to be run once do it in this if block (here it's only initial construction cost)
	// If date is first date
	if (
		(unitOfTime as DayCalendar).date &&
		moment((unitOfTime as DayCalendar).date).isSame(companyValues.startDate)
	) {
		totalExpenses = totalExpenses + lease.initialConstructionCost;
	}

	//
	// Lease
	//
	// Total amount of lease paid
	updateLeasePaid(lease, prevLease, leaseCost);
	// Add product
	unitOfTime.leases[lease.id] = lease;

	//
	// Company
	//
	const companyProfit = totalRevenue - totalExpenses;
	const companyReserves = companyProfit;
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, companyProfit);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves);
};
