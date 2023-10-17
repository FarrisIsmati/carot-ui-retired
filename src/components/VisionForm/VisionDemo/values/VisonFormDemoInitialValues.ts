import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import {
	LegalStructureDropdownValuesEnum,
	LocationDropdownValuesEnum,
} from "./VisionFormDemoDropdownValues";

export const visionFormDemoInitialValues: VisionFormValues = {
	businessName: "",
	businessCurrency: CurrencyTypes.USD, // Need to set based on location
	businessIndustry: "",
	businessLocation: LocationDropdownValuesEnum.USA, // Need to ask for users location/ or default to unknown
	forecastingStartDate: "",
	forecastingEndDate: "",
	legalStructure: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,
};
