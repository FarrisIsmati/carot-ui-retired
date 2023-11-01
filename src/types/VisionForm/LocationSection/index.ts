import { LeaseSection } from "./LeaseSection";

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

//
// Physical
//

export interface PhysicalLeaseLocationSection
	extends PhysicalLocationSection,
		LeaseSection {}

export interface PhysicalLocationSection {
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
}

export interface PhysicalLocationSectionInputModeLess {
	constructionCost: any;
	maxOccupancy: any;
	hoursOpenPerDayGeneric: any;
	daysOpenPerWeekGeneric: any;
}

//
// Digital
//

// Todo...
