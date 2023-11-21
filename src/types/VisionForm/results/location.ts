import { CurveType } from "../LocationSection";
import { CurveDataPoint } from "../common/growthCurve";

// Location values for calendar
interface LocationResults {
	name: string;
}

interface LocationPhysicalResults {
	// Initial Construction cost (one time expense)
	initialConstructionCost: number;
}

export interface LocationLeaseResults
	extends LocationResults,
		LocationPhysicalResults,
		LocationLeaseResultsLifetime,
		LocationLeaseResultsTotal {
	// Total cost of lease when fully paid out
	leaseCost: number;

	// Lease cost per payment of period (week, month, annual)
	periodCost: number;
}

interface LocationLeaseResultsTotal {
	// Lease paid
	totalLeasePaid: number;
}

interface LocationLeaseResultsLifetime {
	// Lease paid
	lifetimeLeasePaid: number;
}

/**
 * Lease values we are calculating on
 */
export interface LocationLeaseValues {
	trafficCurve: CurveType;
	maxOccupancy: number;
	trafficTurnoverTime: number;
	daysOpenPerWeekGeneric: number;
	hoursOpenPerDayGeneric: number;
	periodCost: number;
	leaseFootTrafficCurveDataPoints?: CurveDataPoint[];
}
