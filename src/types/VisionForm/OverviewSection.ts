// Overview section

import { CountriesEnum } from "./common/countries";
import { CurrencyTypes } from "./common/currency";

export interface OverviewSection {
	overviewName: string;
	overviewCurrency: CurrencyTypes;
	overviewIndustry: string;
	overviewCountryOrigin: CountriesEnum;
	overviewForecastingStartDate: string;
	overviewForecastingEndDate: string;
}
