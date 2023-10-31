import {
	PhysicalFinanceType,
	PhysicalUseType,
	SpaceAndPlaceSection,
} from "@/types/VisionForm/SpaceAndPlaceSection";

export const SpaceAndPlaceFormInitialValues: SpaceAndPlaceSection = {
	//
	// General
	//

	physicalFinanceType: PhysicalFinanceType.LEASE,
	physicalUseType: PhysicalUseType.RETAIL,

	//
	// Physical
	//

	// Hours open per day
	hoursOpenPerDayGenericLow: 8,
	hoursOpenPerDayGenericAverage: 8,
	hoursOpenPerDayGenericHigh: 8,

	// Days open per week
	daysOpenPerWeekGenericLow: 5,
	daysOpenPerWeekGenericAverage: 5,
	daysOpenPerWeekGenericHigh: 5,

	// Construction cost
	constructionCostLow: 0,
	constructionCostAverage: 0,
	constructionCostHigh: 0,

	//
	// Lease
	//

	// Maximum occupancy
	maxOccupancyLow: 0,
	maxOccupancyAverage: 0,
	maxOccupancyHigh: 0,

	// Lease length months
	leaseLengthMonthsLow: 0,
	leaseLengthMonthsAverage: 0,
	leaseLengthMonthsHigh: 0,

	// Lease length years
	leaseLengthYearsLow: 2,
	leaseLengthYearsAverage: 2,
	leaseLengthYearsHigh: 2,

	// Lease size
	leaseSizeLow: 0,
	leaseSizeAverage: 0,
	leaseSizeHigh: 0,

	// Lease cost
	leaseCostLow: 0,
	leaseCostAverage: 0,
	leaseCostHigh: 0,
};
