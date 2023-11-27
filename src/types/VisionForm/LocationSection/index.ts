import { LeaseSection, LeaseSectionInputModeLess } from "./LeaseSection";

export enum LocationType {
	MOBILE = "MOBILE",
	ONLINE = "ONLINE",
	PHYSICAL = "PHYSICAL",
}

export enum PhysicalFinanceType {
	LEASE = "LEASE",
	OWN = "OWN",
}

export enum PhysicalUseType {
	RETAIL = "RETAIL",
	OFFICE = "RETAIL",
}

export enum CurveType {
	NONE = "NONE",
	LINEAR = "LINEAR",
	BASIC = "BASIC",
	RAPID = "RAPID",
	STEADY = "STEADY",
	CONSISTENT = "CONSISTENT",
}

//
// Physical
//

export interface PhysicalLeaseLocationSection
	extends PhysicalLocationSection,
		LeaseSection {
	id: string;
}

export interface PhysicalLeaseLocationSectionInputModeLess
	extends PhysicalLocationSectionInputModeLess,
		LeaseSectionInputModeLess {}

export interface PhysicalLocationSection {
	// Name
	locationName: string;

	// Construction costs (Lease/mobile/own)
	constructionCostLow: number;
	constructionCostAverage: number;
	constructionCostHigh: number;

	// Max occupancy (Lease/mobile/own)
	maxOccupancyLow: number;
	maxOccupancyAverage: number;
	maxOccupancyHigh: number;

	// Hours open per day (Generic hours open field)
	hoursOpenPerDayGenericLow: number;
	hoursOpenPerDayGenericAverage: number;
	hoursOpenPerDayGenericHigh: number;

	// Days open per week (Generic days per week field)
	daysOpenPerWeekGenericLow: number;
	daysOpenPerWeekGenericAverage: number;
	daysOpenPerWeekGenericHigh: number;

	// Traffic curve
	trafficCurve: CurveType; // Todo updating the range of values will be a seperate field

	// Traffic turnover time
	trafficTurnoverTimeLow: number;
	trafficTurnoverTimeAverage: number;
	trafficTurnoverTimeHigh: number;
}

export interface PhysicalLocationSectionInputModeLess {
	constructionCost: any;
	maxOccupancy: any;
	hoursOpenPerDayGeneric: any;
	daysOpenPerWeekGeneric: any;
	trafficTurnoverTime: any;
}

//
// Digital
//

// Todo...
