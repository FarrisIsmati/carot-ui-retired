// Overview section

import { LocationDropdownValuesEnum } from "@/components/Vision/VisionForm/values/visionFormDropdownValues";
import { CurrencyTypes } from "../currency/types";

export interface OverviewSection {
	businessName: string;
	businessCurrency: CurrencyTypes;
	businessIndustry: string;
	businessLocation: LocationDropdownValuesEnum;
	forecastingStartDate: string;
	forecastingEndDate: string;
}
