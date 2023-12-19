import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import Dropdown from "@/designSystem/Dropdown";
import { DropdownData } from "@/designSystem/Dropdown/types";
import { Sizes } from "@/styles/sizes";
import { AllFormValues } from "@/types/VisionForm";

export interface FormDropdownSelectorProps {
	label: string;
	placeholder: string;
	fieldName: keyof AllFormValues;
	dataset: DropdownData<any>[];
	dropdownSize?: Sizes;
	defaultValue?: DropdownData<any>;
	/**
	 * Action to perform on change
	 */
	onChange?: (selectedItemDataset: DropdownData<any>) => void;
}

const FormDropdown = ({
	label,
	placeholder,
	fieldName,
	dataset,
	onChange,
	dropdownSize = Sizes.LARGE,
	defaultValue,
}: FormDropdownSelectorProps) => {
	const field = useVisionFormField(fieldName);
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
			onChange={onChange}
			{...field}
		/>
	);
};

export default FormDropdown;
