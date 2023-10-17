import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
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
		formValues.businessLocation === CountriesEnum.USA
			? legalStructureValidator(formValues.legalStructure)
			: undefined;

	return {
		businessIndustry,
		businessLocation,
		businessCurrency,
		legalStructure,
	};
};
