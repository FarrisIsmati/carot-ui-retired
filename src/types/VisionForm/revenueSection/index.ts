export interface RevenueSection {
	id: string;

	// Location id (ties the product to a location)
	locationIds: Set<string>;

	// Product name
	productName: string;

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

	// Customer conversion rate
	customerConversionRateLow: number;
	customerConversionRateAverage: number;
	customerConversionRateHigh: number;
}

export interface RevenueSectionInputModeLess {
	revenueCostToProduce: any;
	revenueRetailPrice: any;
	revenueProfitMargin: any;
	revenueProfitAmount: any;
	customerConversionRate: any;
}
