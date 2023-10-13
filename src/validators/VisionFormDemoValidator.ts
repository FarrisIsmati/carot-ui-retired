import { LocationDropdownValuesEnum } from "@/components/VisionForm/values/visionFormDropdownValues";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import {
	businessCurrencyValidator,
	businessIndustryValidator,
	businessLocationValidator,
	investorNameValidator,
	legalStructureValidator,
} from "./VisionFormValidators";

export default (formValues: VisionFormValues) => {
	// Overview section
	// Business
	const businessIndustry = businessIndustryValidator(
		formValues.businessIndustry
	);
	const businessLocation = businessLocationValidator(
		formValues.businessLocation
	);
	const businessCurrency = businessCurrencyValidator(
		formValues.businessCurrency
	);

	// Capital and Investors section
	// Investor
	const investorName = investorNameValidator(formValues.investorName);

	// Legal and Taxes section
	// Only validate if location is USA
	const legalStructure =
		formValues.businessLocation === LocationDropdownValuesEnum.USA
			? legalStructureValidator(formValues.legalStructure)
			: undefined;

	const errors = [
		businessIndustry,
		businessLocation,
		businessCurrency,
		investorName,
		legalStructure,
	];

	return {
		businessIndustry,
		businessLocation,
		businessCurrency,
		investorName,
		legalStructure,
	};
};
