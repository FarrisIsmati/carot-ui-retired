import { LocationLeaseCalendar } from "@/types/VisionForm/calendar/location/leaseCalendar";
import { round } from "lodash";

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
