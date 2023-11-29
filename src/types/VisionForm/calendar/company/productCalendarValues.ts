/**
 * Product values we are calculating on
 */
export interface ProductValues {
	productName: string;
	productId: string;
	locationId: Set<string>;
	customerConversionRate: number;
	costToProduce: number;
	retailPrice: number;
}
