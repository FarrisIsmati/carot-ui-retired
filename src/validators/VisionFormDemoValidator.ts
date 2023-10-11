import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import {
	businessCurrencyValidator,
	businessIndustryValidator,
	businessLocationValidator,
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

	const errors = [businessIndustry, businessLocation, businessCurrency];

	return { businessIndustry, businessLocation, businessCurrency };
};
