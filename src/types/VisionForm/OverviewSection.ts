// Overview section

import { CurrencyTypes } from "../currency/types";

export interface OverviewSection {
	businessName: string;
	businessCurrency: CurrencyTypes;
	businessIndustry: string;
	businessLocation: string;
	forecastingStartDate: string;
	forecastingEndDate: string;
}
