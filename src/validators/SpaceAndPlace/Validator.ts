import { SpaceAndPlaceSection } from "@/types/VisionForm/SpaceAndPlaceSection";
import {
	leaseCostValidator,
	leaseLengthMonthsValidator,
	leaseLengthYearsValidator,
} from "./Validators";

export default (formValues: SpaceAndPlaceSection) => {
	// Lease cost
	const leaseCostLow = leaseCostValidator(formValues.leaseCostLow);
	const leaseCostAverage = leaseCostValidator(formValues.leaseCostAverage);
	const leaseCostHigh = leaseCostValidator(formValues.leaseCostHigh);

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
		// Lease cost
		leaseCostLow,
		leaseCostAverage,
		leaseCostHigh,
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
