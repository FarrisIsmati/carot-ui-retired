import { DropdownData } from "@/components/common/Dropdown/types";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { FieldMetaState, useField, useFormState } from "react-final-form";

export const hasVisibleErrors = <T>(meta?: FieldMetaState<T>) => {
	return !!meta?.touched && Boolean(meta?.error);
};

export const useGetDropdownDefaultValue = (
	dropdownValues: DropdownData<any>[],
	fieldName: keyof VisionFormValues
) => {
	const formState = useFormState<VisionFormValues>();
	const formValues = formState.values;
	return dropdownValues.find((value) => value.value === formValues[fieldName]);
};

export const currencyToSymbolMap = {
	[CurrencyTypes.CAN]: "$",
	[CurrencyTypes.MEX]: "$",
	[CurrencyTypes.USD]: "$",
};

export const useCurrencySymbol = () => {
	const currencyField = useField("businessCurrency");
	const currencySymbol =
		currencyToSymbolMap[currencyField.input.value as CurrencyTypes];

	return currencySymbol;
};
