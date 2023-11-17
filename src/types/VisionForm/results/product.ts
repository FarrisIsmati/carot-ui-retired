// Product
export interface ProductResults {
	name: string;
	locationId: string;

	// Cost to produce
	costToProduceLow: number;
	costToProduceAverage: number;
	costToProduceHigh: number;

	// Retail Price
	retailPriceLow: number;
	retailPriceAverage: number;
	retailPriceHigh: number;
}

/**
 * Only the returned values we are getting from product form
 */
export interface ProductValues {
	costToProduce: number;
	retailPrice: number;
}
