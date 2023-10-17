import { hasVisibleErrors } from "@/components/VisionForm/utils/form";
import Dropdown from "@/components/common/Dropdown";
import { DropdownData } from "@/components/common/Dropdown/types";
import { Sizes } from "@/styles/sizes";
import { useField } from "react-final-form";

export interface FormDropdownSelectorProps {
	label: string;
	placeholder: string;
	fieldName: string;
	dataset: DropdownData<any>[];
	dropdownSize?: Sizes;
	defaultValue?: DropdownData<any>;
}

export default ({
	label,
	placeholder,
	fieldName,
	dataset,
	dropdownSize = Sizes.LARGE,
	defaultValue,
}: FormDropdownSelectorProps) => {
	const field = useField(fieldName);
	const input = field.input;

	return (
		<Dropdown
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			dataset={dataset}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			dropdownSize={dropdownSize}
			defaultValue={defaultValue}
			{...field}
		/>
	);
};
