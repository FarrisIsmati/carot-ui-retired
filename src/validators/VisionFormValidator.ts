import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import {
	businessCurrencyValidator,
	businessIndustryValidator,
	businessLocationValidator,
	legalStructureValidator,
	revenueCostToProduceValidator,
	revenueProfitAmountValidator,
	revenueProfitMarginValidator,
	revenueRetailPriceValidator,
} from "./VisionFormValidators";

export default (formValues: VisionFormValues) => {
	//
	// Overview section
	// Business
	//
	const businessIndustry = businessIndustryValidator(
		formValues.businessIndustry ?? ""
	);
	const businessLocation = businessLocationValidator(
		formValues.businessLocation ?? ""
	);
	const businessCurrency = businessCurrencyValidator(
		formValues.businessCurrency ?? ""
	);

	//
	// Revenue
	//
	const revenueCostToProduceLow = revenueCostToProduceValidator(
		formValues.revenueCostToProduceLow
	);
	const revenueCostToProduceAverage = revenueCostToProduceValidator(
		formValues.revenueCostToProduceAverage
	);
	const revenueCostToProduceHigh = revenueCostToProduceValidator(
		formValues.revenueCostToProduceHigh
	);

	const revenueRetailPriceAverage = revenueRetailPriceValidator(
		formValues.revenueRetailPriceAverage
	);
	const revenueProfitMarginAverage = revenueProfitMarginValidator(
		formValues.revenueProfitMarginAverage
	);
	const revenueProfitAmountAverage = revenueProfitAmountValidator(
		formValues.revenueProfitAmountAverage
	);

	// Legal and Taxes section
	// Only validate if location is USA
	const legalStructure =
		formValues.businessLocation === CountriesEnum.USA
			? legalStructureValidator(formValues.legalStructure ?? "")
			: undefined;

	return {
		// Business
		businessIndustry,
		businessLocation,
		businessCurrency,
		// Revenue
		revenueCostToProduceLow,
		revenueCostToProduceAverage,
		revenueCostToProduceHigh,

		revenueRetailPriceAverage,
		revenueProfitMarginAverage,
		revenueProfitAmountAverage,
		// Legal
		legalStructure,
	};
};
