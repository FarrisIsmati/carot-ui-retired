import { RevenueSection } from "@/types/VisionForm/RevenueSection";
import {
	customerConversionRateValidator,
	locationIdsValidator,
	productNameValidator,
	revenueCostToProduceValidator,
	revenueProfitAmountValidator,
	revenueProfitMarginValidator,
	revenueRetailPriceValidator,
} from "./RevenueValidators";

export const revenueValidator = (formValues: RevenueSection) => {
	//
	// Revenue
	//

	// Location link
	const locationIds = locationIdsValidator(formValues.locationIds);

	// Product name
	const proudctName = productNameValidator(formValues.productName);

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

	// Customer conversion rate
	const customerConversionRateLow = customerConversionRateValidator(
		formValues.customerConversionRateLow
	);
	const customerConversionRateAverage = customerConversionRateValidator(
		formValues.customerConversionRateAverage
	);
	const customerConversionRateHigh = customerConversionRateValidator(
		formValues.customerConversionRateHigh
	);

	return {
		//
		// Revenue
		//

		// Location link
		locationIds,

		// Product name
		proudctName,

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

		// Customer conversion rate
		customerConversionRateLow,
		customerConversionRateAverage,
		customerConversionRateHigh,
	};
};
