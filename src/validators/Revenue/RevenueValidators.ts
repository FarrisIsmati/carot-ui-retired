import { fieldRequired, fieldRequiredArray } from "../commonValidators";

//
// Revenue
//

// Location link
export const locationIdsValidator = fieldRequiredArray;

// Product name
export const productNameValidator = fieldRequired;

// Revenue cost to produce
export const revenueCostToProduceValidator = fieldRequired;

// Revenue cost to produce
export const revenueRetailPriceValidator = fieldRequired;

// Revenue cost to produce
export const revenueProfitMarginValidator = fieldRequired;

// Revenue cost to produce
export const revenueProfitAmountValidator = fieldRequired;

// Customer conversion rate
export const customerConversionRateValidator = fieldRequired;
