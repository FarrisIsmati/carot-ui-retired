import { LocationDropdownValuesEnum } from "@/components/VisionForm/values/visionFormDropdownValues";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import {
	businessCurrencyValidator,
	businessIndustryValidator,
	businessLocationValidator,
	legalStructureValidator,
} from "./VisionFormValidators";

export default (formValues: VisionFormValues) => {
	const businessIndustry = businessIndustryValidator(
		formValues.businessIndustry
	);
	const businessLocation = businessLocationValidator(
		formValues.businessLocation
	);
	const businessCurrency = businessCurrencyValidator(
		formValues.businessCurrency
	);

	// Only validate if location is USA
	const legalStructure =
		formValues.businessLocation === LocationDropdownValuesEnum.USA
			? legalStructureValidator(formValues.legalStructure)
			: undefined;

	const errors = [
		businessIndustry,
		businessLocation,
		businessCurrency,
		legalStructure,
	];

	return {
		businessIndustry,
		businessLocation,
		businessCurrency,
		legalStructure,
	};
};
