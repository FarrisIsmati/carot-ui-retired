import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { useField } from "react-final-form";

// Map country to currency type
export const countryToCurrency = {};

// Map currency type to symbol
export const currencyToSymbolMap = {
	[CurrencyTypes.CAN]: "$",
	[CurrencyTypes.MEX]: "$",
	[CurrencyTypes.USD]: "$",
	[CurrencyTypes.EUR]: "€",
};

// Get currency symbol for form
export const useCurrencySymbol = () => {
	const currencyField = useField("businessCurrency");
	const currencySymbol =
		currencyToSymbolMap[currencyField.input.value as CurrencyTypes];

	return currencySymbol;
};
