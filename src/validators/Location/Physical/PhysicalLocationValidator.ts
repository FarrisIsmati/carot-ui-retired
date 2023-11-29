import {
	PhysicalLeaseLocationSection,
	PhysicalLocationSection,
} from "@/types/VisionForm/locationSection";
import { leaseLocationValidator } from "./Lease/LeaseLocationValidator";
import {
	constructionCostValidator,
	locationNameValidator,
	maxOccupancyValidator,
	trafficCurveValidator,
	trafficTurnoverTimeValidator,
} from "./PhysicalLocationValidators";

export const physicalLocationValidator = (
	formValues: PhysicalLocationSection
) => {
	// Name
	const locationName = locationNameValidator(formValues.locationName);

	// Construction cost
	const constructionCostLow = constructionCostValidator(
		formValues.constructionCostLow
	);
	const constructionCostAverage = constructionCostValidator(
		formValues.constructionCostAverage
	);
	const constructionCostHigh = constructionCostValidator(
		formValues.constructionCostHigh
	);

	// Maximum occupancy
	const maxOccupancyLow = maxOccupancyValidator(formValues.maxOccupancyLow);
	const maxOccupancyAverage = maxOccupancyValidator(
		formValues.maxOccupancyAverage
	);
	const maxOccupancyHigh = maxOccupancyValidator(formValues.maxOccupancyHigh);

	// Hours open per day generic
	const hoursOpenPerDayGenericLow = maxOccupancyValidator(
		formValues.hoursOpenPerDayGenericLow
	);
	const hoursOpenPerDayGenericAverage = maxOccupancyValidator(
		formValues.hoursOpenPerDayGenericAverage
	);
	const hoursOpenPerDayGenericHigh = maxOccupancyValidator(
		formValues.hoursOpenPerDayGenericHigh
	);

	// Days open per week generic
	const daysOpenPerWeekGenericLow = maxOccupancyValidator(
		formValues.daysOpenPerWeekGenericLow
	);
	const daysOpenPerWeekGenericAverage = maxOccupancyValidator(
		formValues.daysOpenPerWeekGenericAverage
	);
	const daysOpenPerWeekGenericHigh = maxOccupancyValidator(
		formValues.daysOpenPerWeekGenericHigh
	);

	// Traffic curve
	const trafficCurve = trafficCurveValidator(formValues.trafficCurve);

	// Traffic turnover time
	const trafficTurnoverTimeLow = trafficTurnoverTimeValidator(
		formValues.trafficTurnoverTimeLow
	);
	const trafficTurnoverTimeAverage = trafficTurnoverTimeValidator(
		formValues.trafficTurnoverTimeAverage
	);
	const trafficTurnoverTimeHigh = trafficTurnoverTimeValidator(
		formValues.trafficTurnoverTimeHigh
	);

	return {
		// Name
		locationName,

		// Construction cost
		constructionCostLow,
		constructionCostAverage,
		constructionCostHigh,

		// Maximum Occupancy
		maxOccupancyLow,
		maxOccupancyAverage,
		maxOccupancyHigh,

		// Hours open per day
		hoursOpenPerDayGenericLow,
		hoursOpenPerDayGenericAverage,
		hoursOpenPerDayGenericHigh,

		// Days open per week generic
		daysOpenPerWeekGenericLow,
		daysOpenPerWeekGenericAverage,
		daysOpenPerWeekGenericHigh,

		// Traffic curve
		trafficCurve,

		// Traffic turnover time
		trafficTurnoverTimeLow,
		trafficTurnoverTimeAverage,
		trafficTurnoverTimeHigh,
	};
};

export const physicalLeaseLocationValidator = (
	formValues: PhysicalLeaseLocationSection
) => {
	const physical = physicalLocationValidator(formValues);
	const lease = leaseLocationValidator(formValues);

	return {
		...physical,
		...lease,
	};
};
