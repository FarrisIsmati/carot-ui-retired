import { DropdownData } from "@/components/common/Dropdown/types";
import { CapitalAndInvestorsFormValues } from "@/types/VisionForm/CapitalAndInvestorsForm";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { FieldMetaState, useField } from "react-final-form";

export const hasVisibleErrors = <T>(meta?: FieldMetaState<T>) => {
	return !!meta?.touched && Boolean(meta?.error);
};

// Gets the index of a dropdown from the dropdown values
export const getDropdownIndex = (
	dropdownValues: DropdownData<any>[],
	targetId: string | undefined
) => {
	return dropdownValues.findIndex((value) => value.id === targetId);
};

// Gets the value of a dropdown from the dropdown values
export const getDropdownValue = (
	dropdownValues: DropdownData<any>[],
	targetValue: string | undefined
) => {
	return dropdownValues.find((value) => value.value === targetValue);
};

export const useGetDropdownDefaultValue = (
	dropdownValues: DropdownData<any>[],
	fieldName: keyof VisionFormValues
) => {
	const field = useField(fieldName);
	return getDropdownValue(dropdownValues, field.input.value);
};

export const useGetTextFieldDefaultValue = (
	fieldName: keyof VisionFormValues | keyof CapitalAndInvestorsFormValues
) => {
	const field = useField(fieldName);
	const fieldValue = field.input.value;
	return fieldValue;
};
