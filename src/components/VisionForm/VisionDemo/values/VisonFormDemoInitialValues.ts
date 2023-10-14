import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CurrencyTypes } from "@/types/currency/types";
import { LocationDropdownValuesEnum } from "./VisionFormDemoDropdownValues";

export const visionFormDemoInitialValues: VisionFormValues = {
	businessName: "",
	businessCurrency: CurrencyTypes.USD,
	businessIndustry: "",
	businessLocation: LocationDropdownValuesEnum.UNKNOWN,
	forecastingStartDate: "",
	forecastingEndDate: "",
	legalStructure: "",
};
