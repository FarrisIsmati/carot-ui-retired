export enum LocationType {
	MOBILE = "MOBILE",
	ONLINE = "ONLINE",
	RETAIL = "RETAIL",
}

export interface SpaceAndPlaceSection extends Lease {}

export interface SpaceAndPlaceInputModeLess {
	leaseSize: any;
	leaseCost: any;
	leaseLengthMonths: any;
	leaseLengthYears: any;
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
