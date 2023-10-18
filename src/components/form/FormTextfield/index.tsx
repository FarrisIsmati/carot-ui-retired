import TextField from "@/components/common/TextField";
import { hasVisibleErrors } from "@/components/VisionForm/utils/form";
import { Sizes } from "@/styles/sizes";
import { useField } from "react-final-form";

export interface FormTextFieldSelectorProps {
	label: string;
	placeholder: string;
	fieldName: string;
	isNumber?: boolean;
	prefix?: string;
	suffix?: string;
	disabled?: boolean;
	defaultValue?: string;
	size?: Sizes;
}

export default ({
	label,
	placeholder,
	fieldName,
	disabled,
	defaultValue,
	size = Sizes.LARGE,
}: FormTextFieldSelectorProps) => {
	const field = useField(fieldName);
	const input = field.input;

	return (
		<TextField
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			defaultValue={defaultValue}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			disabled={disabled}
			size={size}
			{...field}
		/>
	);
};
