import Dropdown from "@/components/common/Dropdown";
import { DropdownData } from "@/components/common/Dropdown/types";
import { hasVisibleErrors } from "@/utils/form";
import { useField } from "react-final-form";

export interface FormDropdownProps {
	label: string;
	placeholder: string;
	fieldName: string;
	dataset: DropdownData[];
}

export default ({
	label,
	placeholder,
	fieldName,
	dataset,
}: FormDropdownProps) => {
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
			{...field}
		/>
	);
};
