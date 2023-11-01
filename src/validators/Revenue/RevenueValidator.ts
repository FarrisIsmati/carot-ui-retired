import { RevenueSection } from "@/types/VisionForm/RevenueSection";
import {
	revenueCostToProduceValidator,
	revenueProfitAmountValidator,
	revenueProfitMarginValidator,
	revenueRetailPriceValidator,
} from "./RevenueValidators";

export const revenueValidator = (formValues: RevenueSection) => {
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

	return {
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
	};
};
