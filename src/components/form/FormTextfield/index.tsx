import TextField from "@/components/common/TextField";
import { hasVisibleErrors } from "@/utils/form";
import { useField } from "react-final-form";

export interface FormTextfieldSelectorProps {
	label: string;
	placeholder: string;
	fieldName: string;
	prefix?: string;
	suffix?: string;
	disabled?: boolean;
	defaultValue?: string;
}

export default ({
	label,
	placeholder,
	fieldName,
	disabled,
	defaultValue,
	prefix,
	suffix,
}: FormTextfieldSelectorProps) => {
	const field = useField(fieldName);
	const input = field.input;

	return (
		<TextField
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			defaultValue={defaultValue}
			prefix={prefix}
			suffix={suffix}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			disabled={disabled}
			{...field}
		/>
	);
};
