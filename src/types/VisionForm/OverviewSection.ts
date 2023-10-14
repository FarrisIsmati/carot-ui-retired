// Overview section

import { LocationDropdownValuesEnum } from "@/components/VisionForm/VisionDemo/values/VisionFormDemoDropdownValues";
import { CurrencyTypes } from "../currency/types";

export interface OverviewSection {
	businessName: string;
	businessCurrency: CurrencyTypes;
	businessIndustry: string;
	businessLocation: LocationDropdownValuesEnum;
	forecastingStartDate: string;
	forecastingEndDate: string;
}
