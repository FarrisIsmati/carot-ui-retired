import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import DropdownSelect, {
	DropdownSelectProps,
} from "@/designSystem/Dropdown/DropdownSelect";
import { AllFormValues } from "@/types/VisionForm";

export interface FormDropdownSelectProps extends DropdownSelectProps {
	/**
	 * Fieldname of dropdown selector
	 */
	fieldName: keyof AllFormValues;
}

const FormDropdownSelect = ({
	fieldName,
	placeholder,
	dataset,
	dropdownSize,
	...props
}: FormDropdownSelectProps) => {
	const field = useVisionFormField(fieldName);
	const input = field.input;

	return (
		<DropdownSelect
			id={input.name}
			name={input.name}
			placeholder={placeholder}
			dataset={dataset}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			dropdownSize={dropdownSize}
			{...props}
			{...field}
		/>
	);
};

export default FormDropdownSelect;
