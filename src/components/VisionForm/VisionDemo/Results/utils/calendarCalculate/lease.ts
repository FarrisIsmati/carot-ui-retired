import { CalendarType } from "@/types/VisionForm/calendar";
import { LocationLeaseCalendar } from "@/types/VisionForm/calendar/location/leaseCalendar";
import { round } from "lodash";
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
	obj.totalLeasePaid = round(obj.totalLeasePaid + cost, 2);
	obj.lifetimeLeasePaid = round(
		prevObj
			? prevObj.lifetimeLeasePaid + obj.totalLeasePaid
			: obj.totalLeasePaid,
		2
	);
};

export interface UpdateCalendarValuesLeaseProps {
	date?: string;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	lease: LocationLeaseCalendar;
	prevLease: LocationLeaseCalendar | null;
	leaseCost: number;
	totalExpenses: number;
	totalProfit: number;
	totalReserves: number;
}

/**
 * Update revenue, expenses, lease for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesLease = ({
	unitOfTime,
	prevUnitOfTime,
	lease,
	prevLease,
	leaseCost,
	totalExpenses,
	totalProfit,
	totalReserves,
}: UpdateCalendarValuesLeaseProps) => {
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
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, totalProfit);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, totalReserves);
};
