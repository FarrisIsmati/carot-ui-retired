import { VisionFormValues } from "@/types/VisionForm";
import { RevenueSection } from "@/types/VisionForm/revenueSection";
import {
	customerConversionRateValidator,
	locationIdsValidator,
	productNameValidator,
	revenueCostToProduceValidator,
	revenueProfitAmountValidator,
	revenueProfitMarginValidator,
	revenueRetailPriceValidator,
} from "./RevenueValidators";

export interface RevenueValidatorProps {
	visionFormValues: VisionFormValues;
	revenueFormValues: RevenueSection;
}

export const revenueValidator = ({
	visionFormValues,
	revenueFormValues,
}: RevenueValidatorProps) => {
	//
	// Revenue
	//

	const locations = [...visionFormValues.leases]; // Todo add more locations when added (own/online/etc)

	// Location link
	const locationIds = locationIdsValidator(
		revenueFormValues.locationIds,
		locations
	);

	// Product name
	const productName = productNameValidator(revenueFormValues.productName);

	// Cost to produce
	const revenueCostToProduceLow = revenueCostToProduceValidator(
		revenueFormValues.revenueCostToProduceLow
	);
	const revenueCostToProduceAverage = revenueCostToProduceValidator(
		revenueFormValues.revenueCostToProduceAverage
	);
	const revenueCostToProduceHigh = revenueCostToProduceValidator(
		revenueFormValues.revenueCostToProduceHigh
	);

	// Physical price
	const revenueRetailPriceLow = revenueRetailPriceValidator(
		revenueFormValues.revenueRetailPriceLow
	);
	const revenueRetailPriceAverage = revenueRetailPriceValidator(
		revenueFormValues.revenueRetailPriceAverage
	);
	const revenueRetailPriceHigh = revenueRetailPriceValidator(
		revenueFormValues.revenueRetailPriceHigh
	);

	// Profit Margin
	const revenueProfitMarginLow = revenueProfitMarginValidator(
		revenueFormValues.revenueProfitMarginLow
	);
	const revenueProfitMarginAverage = revenueProfitMarginValidator(
		revenueFormValues.revenueProfitMarginAverage
	);
	const revenueProfitMarginHigh = revenueProfitMarginValidator(
		revenueFormValues.revenueProfitMarginHigh
	);

	// Profit amount
	const revenueProfitAmountLow = revenueProfitAmountValidator(
		revenueFormValues.revenueProfitAmountAverage
	);
	const revenueProfitAmountAverage = revenueProfitAmountValidator(
		revenueFormValues.revenueProfitAmountAverage
	);
	const revenueProfitAmountHigh = revenueProfitAmountValidator(
		revenueFormValues.revenueProfitAmountHigh
	);

	// Customer conversion rate
	const customerConversionRateLow = customerConversionRateValidator(
		revenueFormValues.customerConversionRateLow
	);
	const customerConversionRateAverage = customerConversionRateValidator(
		revenueFormValues.customerConversionRateAverage
	);
	const customerConversionRateHigh = customerConversionRateValidator(
		revenueFormValues.customerConversionRateHigh
	);

	return {
		//
		// Revenue
		//

		// Location link
		locationIds,

		// Product name
		productName,

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
