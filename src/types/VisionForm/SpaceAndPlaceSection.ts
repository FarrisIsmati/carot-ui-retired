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

export interface SpaceAndPlaceSection extends Lease, PhysicalSpace {
	physicalFinanceType: PhysicalFinanceType;
	physicalUseType: PhysicalUseType;
}

export interface SpaceAndPlaceInputModeLess {
	leaseSize: any;
	leaseCost: any;
	leaseLengthMonths: any;
	leaseLengthYears: any;
	constructionCost: any;
	maxOccupancy: any;
}

export interface PhysicalSpace {
	// Construction costs (Lease/mobile/own)
	constructionCostLow: number;
	constructionCostAverage: number;
	constructionCostHigh: number;

	// Max occupancy (Lease/mobile/own)
	maxOccupancyLow: number;
	maxOccupancyAverage: number;
	maxOccupancyHigh: number;
}

export interface Lease {
	// Lease length months
	leaseLengthMonthsLow: number;
	leaseLengthMonthsAverage: number;
	leaseLengthMonthsHigh: number;

	// Lease length years
	leaseLengthYearsLow: number;
	leaseLengthYearsAverage: number;
	leaseLengthYearsHigh: number;

	// Lease size
	leaseSizeLow: number;
	leaseSizeAverage: number;
	leaseSizeHigh: number;

	// Lease cost
	leaseCostLow: number;
	leaseCostAverage: number;
	leaseCostHigh: number;
}
