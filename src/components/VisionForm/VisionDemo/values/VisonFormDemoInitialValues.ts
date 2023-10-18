import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { LegalStructureDropdownValuesEnum } from "./VisionFormDemoDropdownValues";

export const visionFormDemoInitialValues: VisionFormValues = {
	// Overview Section
	businessName: "",
	businessCurrency: CurrencyTypes.USD, // Need to set based on location
	businessIndustry: "",
	businessLocation: CountriesEnum.USA, // Need to ask for users location/ or default to unknown
	forecastingStartDate: "",
	forecastingEndDate: "",
	// Revenue Section
	revenueProductPrice: {
		[InputModeEnum.LOW]: 0,
		[InputModeEnum.AVERAGE]: 0,
		[InputModeEnum.HIGH]: 0,
	},
	revenueCostToProduce: {
		[InputModeEnum.LOW]: 0,
		[InputModeEnum.AVERAGE]: 0,
		[InputModeEnum.HIGH]: 0,
	},
	revenueProfitAmount: {
		[InputModeEnum.LOW]: 0,
		[InputModeEnum.AVERAGE]: 0,
		[InputModeEnum.HIGH]: 0,
	},
	revenueProfitMargin: {
		[InputModeEnum.LOW]: 0,
		[InputModeEnum.AVERAGE]: 0,
		[InputModeEnum.HIGH]: 0,
	},
	// Legal Section
	legalStructure: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,
};
