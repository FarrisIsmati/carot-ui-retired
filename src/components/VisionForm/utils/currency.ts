import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { useVisionFormField } from "./form";

// Map country to currency type
export const countryToCurrencyTypeMap = {
	[CountriesEnum.CANADA]: CurrencyTypes.CAN,
	[CountriesEnum.GERMANY]: CurrencyTypes.EUR,
	[CountriesEnum.MEXICO]: CurrencyTypes.MEX,
	[CountriesEnum.USA]: CurrencyTypes.USD,
	[CountriesEnum.China]: CurrencyTypes.CNY,
	[CountriesEnum.Japan]: CurrencyTypes.YEN,
	[CountriesEnum.Korea]: CurrencyTypes.WON,
	[CountriesEnum.Iran]: CurrencyTypes.IRR,
	[CountriesEnum.UNKNOWN]: CurrencyTypes.USD, // If unknown set to USD
};

// Map currency type to symbol
export const currencyToSymbolMap = {
	[CurrencyTypes.CAN]: "$",
	[CurrencyTypes.MEX]: "$",
	[CurrencyTypes.USD]: "$",
	[CurrencyTypes.EUR]: "€",
	[CurrencyTypes.CNY]: "¥",
	[CurrencyTypes.YEN]: "¥",
	[CurrencyTypes.WON]: "₩",
	[CurrencyTypes.IRR]: "﷼",
};

// Get currency symbol for form
export const useCurrencySymbol = () => {
	const currencyField = useVisionFormField("overviewCurrency");
	const currencySymbol = currencyToSymbolMap[currencyField.input.value];
	return currencySymbol;
};
