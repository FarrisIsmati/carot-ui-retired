import {
	PhysicalLeaseLocationSection,
	PhysicalLocationSection,
} from "@/types/VisionForm/LocationSection";
import { leaseLocationValidator } from "./Lease/LeaseLocationValidator";
import { constructionCostValidator } from "./PhysicalLocationValidators";

export const physicalLocationValidator = (
	formValues: PhysicalLocationSection
) => {
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

	return {
		// Construction cost
		constructionCostLow,
		constructionCostAverage,
		constructionCostHigh,
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
