import { CurveDataPoint } from "../../common/growthCurve";

/**
 * Lease values we are calculating on
 */
export interface LocationLeaseCalendarValues {
	maxOccupancy: number;
	trafficTurnoverTime: number;
	daysOpenPerWeekGeneric: number;
	hoursOpenPerDayGeneric: number;
	periodCost: number;
	leaseFootTrafficCurveDataPoints?: CurveDataPoint[];
}
