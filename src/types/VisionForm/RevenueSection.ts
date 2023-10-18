import { NumericValue } from "./common/values";

export interface RevenueSection {
	revenueCostToProduce: NumericValue; // Cost to produce a product
	revenueProductPrice: NumericValue; // Cost customer will spend minus taxes
	revenueProfitMargin: NumericValue; // % margin your product will have in profits
	revenueProfitAmount: NumericValue; // Currency amount your prouct will have in profits
}
