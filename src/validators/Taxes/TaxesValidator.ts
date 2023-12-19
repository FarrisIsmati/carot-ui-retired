import { TaxesSection } from "@/types/VisionForm/taxesSection";
import { taxRateGenericValidator } from "./TaxesValidators";

const TaxesValidator = (formValues: TaxesSection) => {
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

export default TaxesValidator;
