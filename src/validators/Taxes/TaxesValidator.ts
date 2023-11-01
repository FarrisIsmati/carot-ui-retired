import { TaxesSection } from "@/types/VisionForm/TaxesSection";
import { taxRateGenericValidator } from "./TaxesValidators";

export default (formValues: TaxesSection) => {
	// Starting cash
	const taxRateGenericLow = taxRateGenericValidator(
		formValues.taxRateGenericLow
	);
	const taxRateGenericAverage = taxRateGenericValidator(
		formValues.taxRateGenericAverage
	);
	const taxRateGenericHigh = taxRateGenericValidator(
		formValues.taxRateGenericHigh
	);

	return {
		// Tax rate generic
		taxRateGenericLow,
		taxRateGenericAverage,
		taxRateGenericHigh,
	};
};
