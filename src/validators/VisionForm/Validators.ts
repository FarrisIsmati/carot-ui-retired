import { fieldRequired } from "../commonValidators";

//
// Business
//

// Business industry
export const overviewIndustryValidator = fieldRequired;

// Business location
export const overviewCountryOriginValidator = fieldRequired;

// Business currency
export const overviewCurrencyValidator = fieldRequired;

// Business currency
export const legalStructureValidator = fieldRequired;

//
// Revenue
//

// Revenue cost to produce
export const revenueCostToProduceValidator = fieldRequired;

// Revenue cost to produce
export const revenueRetailPriceValidator = fieldRequired;

// Revenue cost to produce
export const revenueProfitMarginValidator = fieldRequired;

// Revenue cost to produce
export const revenueProfitAmountValidator = fieldRequired;
