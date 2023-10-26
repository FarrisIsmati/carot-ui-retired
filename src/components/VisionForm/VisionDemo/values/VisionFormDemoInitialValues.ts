import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { LegalStructureDropdownValuesEnum } from "./dropdownValues";

export const visionFormDemoInitialValues: VisionFormValues = {
	//
	// Overview Section
	//
	overviewName: "",
	overviewCurrency: CurrencyTypes.USD, // Need to set based on location
	overviewIndustry: "",
	overviewCountryOrigin: CountriesEnum.USA, // Need to ask for users location/ or default to unknown
	overviewForecastingStartDate: "",
	overviewForecastingEndDate: "",

	//
	// Revenue Section
	//

	// Retail price
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

	// Legal Section
	legalStructure: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,
};
