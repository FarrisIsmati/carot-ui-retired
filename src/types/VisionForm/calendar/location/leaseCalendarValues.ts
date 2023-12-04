import { CurveDataPoint } from "../../common/growthCurve";

/**
 * Lease values we are calculating on
 */
export interface LocationLeaseCalendarValues {
	name: string;
	id: string;
	initialConstructionCost: number;
	maxOccupancy: number;
	trafficTurnoverTime: number;
	daysOpenPerWeekGeneric: number;
	hoursOpenPerDayGeneric: number;
	costPerUnit: number;
	size: number;
	leaseFootTrafficCurveDataPoints?: CurveDataPoint[];
}
