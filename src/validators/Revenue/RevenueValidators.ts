import { PhysicalLeaseLocationSection } from "@/types/VisionForm/LocationSection";
import {
	combineValidators,
	fieldRequired,
	fieldRequiredArray,
} from "../commonValidators";

//
// Revenue
//

// Location link
const requiresBusinessLocationAddedValidator = (
	locations: PhysicalLeaseLocationSection[]
) => {
	if (!locations.length) {
		return "This field requires you add a business location first";
	}
};
export const locationIdsValidator = (
	locationIds: string[],
	locations: PhysicalLeaseLocationSection[] // Todo add more locations when added (own/online/etc)
) =>
	combineValidators([
		requiresBusinessLocationAddedValidator(locations),
		fieldRequiredArray(locationIds),
	]);

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
