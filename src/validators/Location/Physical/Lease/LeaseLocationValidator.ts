import { LeaseSection } from "@/types/VisionForm/locationSection/LeaseSection";
import {
	leaseCostValidator,
	leaseLengthMonthsValidator,
	leaseLengthYearsValidator,
	leaseSizeValidator,
} from "./LeaseLocationValidators";

export const leaseLocationValidator = (formValues: LeaseSection) => {
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
