export interface RevenueSection {
	// Cost to produce a product
	revenueCostToProduceLow: number;
	revenueCostToProduceAverage: number;
	revenueCostToProduceHigh: number;
	// Cost customer will spend minus taxes
	revenueRetailPriceLow: number;
	revenueRetailPriceAverage: number;
	revenueRetailPriceHigh: number;
	// % margin your product will have in profits
	revenueProfitMarginLow: number;
	revenueProfitMarginAverage: number;
	revenueProfitMarginHigh: number;
	// Currency amount your prouct will have in profits
	revenueProfitAmountLow: number;
	revenueProfitAmountAverage: number;
	revenueProfitAmountHigh: number;
}
