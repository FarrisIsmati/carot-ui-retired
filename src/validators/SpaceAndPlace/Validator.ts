import { SpaceAndPlaceSection } from "@/types/VisionForm/SpaceAndPlaceSection";
import {
	constructionCostValidator,
	leaseCostValidator,
	leaseLengthMonthsValidator,
	leaseLengthYearsValidator,
	leaseSizeValidator,
} from "./Validators";

export default (formValues: SpaceAndPlaceSection) => {
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

	// Lease cost
	const leaseCostLow = leaseCostValidator(formValues.leaseCostLow);
	const leaseCostAverage = leaseCostValidator(formValues.leaseCostAverage);
	const leaseCostHigh = leaseCostValidator(formValues.leaseCostHigh);

	// Lease size
	const leaseSizeLow = leaseSizeValidator(formValues.leaseSizeLow);
	const leaseSizeAverage = leaseSizeValidator(formValues.leaseSizeAverage);
	const leaseSizeHigh = leaseSizeValidator(formValues.leaseSizeHigh);

	// Lease length months
	const leaseLengthMonthsLow = leaseLengthMonthsValidator(
		formValues.leaseLengthMonthsLow
	);
	const leaseLengthMonthsAverage = leaseLengthMonthsValidator(
		formValues.leaseLengthMonthsAverage
	);
	const leaseLengthMonthsHigh = leaseLengthMonthsValidator(
		formValues.leaseLengthMonthsHigh
	);

	// Lease length years
	const leaseLengthYearsLow = leaseLengthYearsValidator(
		formValues.leaseLengthYearsLow
	);
	const leaseLengthYearsAverage = leaseLengthYearsValidator(
		formValues.leaseLengthYearsAverage
	);
	const leaseLengthYearsHigh = leaseLengthYearsValidator(
		formValues.leaseLengthYearsHigh
	);

	return {
		// Construction cost
		constructionCostLow,
		constructionCostAverage,
		constructionCostHigh,
		// Lease cost
		leaseCostLow,
		leaseCostAverage,
		leaseCostHigh,
		// Lease size
		leaseSizeLow,
		leaseSizeAverage,
		leaseSizeHigh,
		// Lease length months
		leaseLengthMonthsLow,
		leaseLengthMonthsAverage,
		leaseLengthMonthsHigh,
		// Lease length years
		leaseLengthYearsLow,
		leaseLengthYearsAverage,
		leaseLengthYearsHigh,
	};
};
