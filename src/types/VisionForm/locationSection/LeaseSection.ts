export interface LeaseSection {
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

export interface LeaseSectionInputModeLess {
	leaseSize: any;
	leaseCost: any;
	leaseLengthMonths: any;
	leaseLengthYears: any;
}
