import { RevenueSection } from "@/types/VisionForm/RevenueSection";

export const revenueFormInitialValues: Omit<RevenueSection, "id"> = {
	//
	// Revenue Section
	//

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
};
