import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import taxesValidator from "../Taxes/TaxesValidator";
import {
	overviewCountryOriginValidator,
	overviewCurrencyValidator,
	overviewEndDateValidator,
	overviewIndustryValidator,
	overviewNameValidator,
	overviewStartDateValidator,
	revenueCostToProduceValidator,
	revenueProfitAmountValidator,
	revenueProfitMarginValidator,
	revenueRetailPriceValidator,
} from "./Validators";

export default (formValues: VisionFormValues) => {
	//
	// Overview
	//

	const overviewName = overviewNameValidator(formValues.overviewName);
	const overviewIndustry = overviewIndustryValidator(
		formValues.overviewIndustry
	);
	const overviewCountryOrigin = overviewCountryOriginValidator(
		formValues.overviewCountryOrigin
	);
	const overviewCurrency = overviewCurrencyValidator(
		formValues.overviewCurrency
	);
	const overviewStartDate = overviewStartDateValidator(
		formValues.overviewStartDate
	);
	const overviewEndDate = overviewEndDateValidator(formValues.overviewEndDate);

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

	// Physical price
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
	// Taxes section
	//
	const taxes = taxesValidator(formValues);

	return {
		//
		// Overview
		//
		overviewName,
		overviewIndustry,
		overviewCountryOrigin,
		overviewCurrency,
		overviewStartDate,
		overviewEndDate,

		//
		// Revenue
		//

		// Cost to produce
		revenueCostToProduceLow,
		revenueCostToProduceAverage,
		revenueCostToProduceHigh,

		// Physical price
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

		// Taxes section
		...taxes,
	};
};
