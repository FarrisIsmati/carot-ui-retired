import { fieldRequired } from "../commonValidators";

//
// Overview
//

// Overview industry
export const overviewNameValidator = fieldRequired;

// Overview industry
export const overviewIndustryValidator = fieldRequired;

// Overview location
export const overviewCountryOriginValidator = fieldRequired;

// Overview currency
export const overviewCurrencyValidator = fieldRequired;

// Overview start date
export const overviewStartDateValidator = fieldRequired;

// Overview end date
export const overviewEndDateValidator = fieldRequired;

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
