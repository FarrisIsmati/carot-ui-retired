// Overview section

import { CountriesEnum } from "./common/countries";
import { CurrencyTypes } from "./common/currency";

export interface OverviewSection {
	businessName: string;
	businessCurrency: CurrencyTypes;
	businessIndustry: string;
	businessLocation: CountriesEnum;
	forecastingStartDate: string;
	forecastingEndDate: string;
}
