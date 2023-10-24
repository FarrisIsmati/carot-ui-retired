import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import {
	legalStructureValidator,
	overviewCountryOriginValidator,
	overviewCurrencyValidator,
	overviewIndustryValidator,
	revenueCostToProduceValidator,
	revenueProfitAmountValidator,
	revenueProfitMarginValidator,
	revenueRetailPriceValidator,
} from "./Validators";

export default (formValues: VisionFormValues) => {
	//
	// Overview
	//

	const overviewIndustry = overviewIndustryValidator(
		formValues.overviewIndustry ?? ""
	);
	const overviewCountryOrigin = overviewCountryOriginValidator(
		formValues.overviewCountryOrigin ?? ""
	);
	const overviewCurrency = overviewCurrencyValidator(
		formValues.overviewCurrency ?? ""
	);

	//
	// Revenue
	//

	// Cost to produce
	const revenueCostToProduceLow = revenueCostToProduceValidator(
		formValues.revenueCostToProduceLow
	);
	const revenueCostToProduceAverage = revenueCostToProduceValidator(
		formValues.revenueCostToProduceAverage
	);
	const revenueCostToProduceHigh = revenueCostToProduceValidator(
		formValues.revenueCostToProduceHigh
	);

	// Retail price
	const revenueRetailPriceLow = revenueRetailPriceValidator(
		formValues.revenueRetailPriceLow
	);
	const revenueRetailPriceAverage = revenueRetailPriceValidator(
		formValues.revenueRetailPriceAverage
	);
	const revenueRetailPriceHigh = revenueRetailPriceValidator(
		formValues.revenueRetailPriceHigh
	);

	// Profit Margin
	const revenueProfitMarginLow = revenueProfitMarginValidator(
		formValues.revenueProfitMarginLow
	);
	const revenueProfitMarginAverage = revenueProfitMarginValidator(
		formValues.revenueProfitMarginAverage
	);
	const revenueProfitMarginHigh = revenueProfitMarginValidator(
		formValues.revenueProfitMarginHigh
	);

	// Profit amount
	const revenueProfitAmountLow = revenueProfitAmountValidator(
		formValues.revenueProfitAmountAverage
	);
	const revenueProfitAmountAverage = revenueProfitAmountValidator(
		formValues.revenueProfitAmountAverage
	);
	const revenueProfitAmountHigh = revenueProfitAmountValidator(
		formValues.revenueProfitAmountHigh
	);

	//
	// Legal and Taxes section
	//

	// Only validate if location is USA
	const legalStructure =
		formValues.overviewCountryOrigin === CountriesEnum.USA
			? legalStructureValidator(formValues.legalStructure ?? "")
			: undefined;

	return {
		//
		// Overview
		//
		overviewIndustry,
		overviewCountryOrigin,
		overviewCurrency,

		//
		// Revenue
		//

		// Cost to produce
		revenueCostToProduceLow,
		revenueCostToProduceAverage,
		revenueCostToProduceHigh,

		// Retail price
		revenueRetailPriceLow,
		revenueRetailPriceAverage,
		revenueRetailPriceHigh,

		// Profit margin
		revenueProfitMarginLow,
		revenueProfitMarginAverage,
		revenueProfitMarginHigh,

		// Profit amount
		revenueProfitAmountLow,
		revenueProfitAmountAverage,
		revenueProfitAmountHigh,

		//
		// Legal
		//
		legalStructure,
	};
};
