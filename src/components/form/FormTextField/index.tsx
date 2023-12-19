import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import TextField from "@/designSystem/TextField";
import { Sizes } from "@/styles/sizes";
import { AllFormValues } from "@/types/VisionForm";

export interface FormTextFieldSelectorProps {
	label: string;
	placeholder: string;
	fieldName: keyof AllFormValues;
	isNumber?: boolean;
	prefix?: string;
	suffix?: string;
	disabled?: boolean;
	size?: Sizes;
}

const FormTextField = ({
	label,
	placeholder,
	fieldName,
	disabled,
	size = Sizes.LARGE,
}: FormTextFieldSelectorProps) => {
	const field = useVisionFormField(fieldName);
	const input = field.input;

	return (
		<TextField
			id={input.name}
			name={input.name}
			label={label}
			placeholder={placeholder}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			disabled={disabled}
			size={size}
			{...field}
		/>
	);
};

export default FormTextField;
