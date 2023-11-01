import { DropdownData } from "@/components/common/Dropdown/types";
import { AllFormValues, AllFormValuesNoArrays } from "@/types/VisionForm";
import { FieldMetaState, useField } from "react-final-form";

// Get form field
export const useVisionFormField = <K extends keyof AllFormValues>(
	fieldKey: K
) => useField<AllFormValues[typeof fieldKey]>(fieldKey);

// Input meta has visible errors
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
	targetValue: string | number | undefined
) => {
	return dropdownValues.find((value) => value.value === targetValue);
};

// Get default value for dropdown
export const useGetDropdownDefaultValue = (
	dropdownValues: DropdownData<any>[],
	fieldName: keyof AllFormValuesNoArrays
) => {
	const field = useVisionFormField(fieldName);
	return getDropdownValue(dropdownValues, field.input.value);
};

// Get default value for text field
export const useGetTextFieldDefaultValue = (fieldName: keyof AllFormValues) => {
	const field = useVisionFormField(fieldName);
	const fieldValue = field.input.value;
	return fieldValue;
};
