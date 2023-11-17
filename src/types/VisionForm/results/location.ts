import { CurveType } from "../LocationSection";

// Product
interface LocationResults {
	name: string;
}

interface LocationPhysicalResults {
	// Initial Construction cost (one time expense)
	initialConstructionCostLow: number;
	initialConstructionCostAverage: number;
	initialConstructionCostHigh: number;
}

export interface LocationLeaseResults
	extends LocationResults,
		LocationPhysicalResults {
	// Lease cost per payment of period (week, month, annual)
	periodCostLow: number;
	periodCostAverage: number;
	periodCostHigh: number;
}

/**
 * Only the returned values we are getting from lease form
 */
export interface LocationLeaseValues {
	trafficCurve: CurveType;
	maxOccupancy: number;
	trafficTurnoverTime: number;
	daysOpenPerWeekGeneric: number;
	hoursOpenPerDayGeneric: number;
}
