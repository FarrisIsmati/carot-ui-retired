import { LocationDropdownValuesEnum } from "@/components/VisionForm/VisionDemo/values/VisionFormDemoDropdownValues";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import {
	businessCurrencyValidator,
	businessIndustryValidator,
	businessLocationValidator,
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

	// Legal and Taxes section
	// Only validate if location is USA
	const legalStructure =
		formValues.businessLocation === LocationDropdownValuesEnum.USA
			? legalStructureValidator(formValues.legalStructure)
			: undefined;

	return {
		businessIndustry,
		businessLocation,
		businessCurrency,
		legalStructure,
	};
};
