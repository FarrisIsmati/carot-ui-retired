import {
	PhysicalType,
	SpaceAndPlaceSection,
} from "@/types/VisionForm/SpaceAndPlaceSection";

export const SpaceAndPlaceFormInitialValues: SpaceAndPlaceSection = {
	physicalType: PhysicalType.LEASE,

	// Lease length months
	leaseLengthMonthsLow: 0,
	leaseLengthMonthsAverage: 0,
	leaseLengthMonthsHigh: 0,

	// Lease length years
	leaseLengthYearsLow: 1,
	leaseLengthYearsAverage: 1,
	leaseLengthYearsHigh: 1,

	// Lease size
	leaseSizeLow: 0,
	leaseSizeAverage: 0,
	leaseSizeHigh: 0,

	// Lease cost
	leaseCostLow: 0,
	leaseCostAverage: 0,
	leaseCostHigh: 0,
};
