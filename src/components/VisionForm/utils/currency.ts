import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { useVisionFormField } from "./form";

// Map country to currency type
export const countryToCurrencyTypeMap = {
	[CountriesEnum.CANADA]: CurrencyTypes.CAN,
	[CountriesEnum.GERMANY]: CurrencyTypes.EUR,
	[CountriesEnum.MEXICO]: CurrencyTypes.MEX,
	[CountriesEnum.USA]: CurrencyTypes.USD,
	[CountriesEnum.UNKNOWN]: CurrencyTypes.USD, // If unknown set to USDß
};

// Map currency type to symbol
export const currencyToSymbolMap = {
	[CurrencyTypes.CAN]: "$",
	[CurrencyTypes.MEX]: "$",
	[CurrencyTypes.USD]: "$",
	[CurrencyTypes.EUR]: "€",
};

// Get currency symbol for form
export const useCurrencySymbol = () => {
	const currencyField = useVisionFormField("overviewCurrency");
	const currencySymbol = currencyToSymbolMap[currencyField.input.value];
	return currencySymbol;
};
