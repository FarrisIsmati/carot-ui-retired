import { RevenueSection } from "@/types/VisionForm/revenueSection";

export const revenueFormInitialValues: Omit<RevenueSection, "id"> = {
	//
	// Revenue Section
	//

	// Location link
	locationIds: new Set<string>(),

	// Product name
	productName: "",

	// Physical price
	revenueRetailPriceLow: 0,
	revenueRetailPriceAverage: 0,
	revenueRetailPriceHigh: 0,

	// Cost to produce
	revenueCostToProduceLow: 0,
	revenueCostToProduceAverage: 0,
	revenueCostToProduceHigh: 0,

	// Profit amount
	revenueProfitAmountLow: 0,
	revenueProfitAmountAverage: 0,
	revenueProfitAmountHigh: 0,

	// Profit margin
	revenueProfitMarginLow: 0,
	revenueProfitMarginAverage: 0,
	revenueProfitMarginHigh: 0,

	// Customer conversion rate
	customerConversionRateLow: 100,
	customerConversionRateAverage: 100,
	customerConversionRateHigh: 100,
};
