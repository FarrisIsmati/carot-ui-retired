import TextFieldNumeric from "@/components/common/TextField/TextFieldNumeric";
import { hasVisibleErrors } from "@/components/VisionForm/utils/form";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useField } from "react-final-form";

export interface FormTextFieldSelectorProps {
	label: string;
	placeholder: string;
	fieldName: string;
	prefix?: string;
	suffix?: string;
	disabled?: boolean;
	defaultValue?: string;
	size?: Sizes;
	/**
	 * Input mode whether you are entering low, average, or high estimates
	 * @default AVERAGE
	 */
	inputMode?: InputModeEnum;
}

export default ({
	label,
	placeholder,
	fieldName,
	disabled,
	defaultValue,
	prefix,
	suffix,
	size = Sizes.LARGE,
	inputMode = InputModeEnum.AVERAGE,
}: FormTextFieldSelectorProps) => {
	const field = useField(`${fieldName}.[${inputMode}]`); // Field must have NumericValue type
	const input = field.input;

	return (
		<TextFieldNumeric
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
			size={size}
			{...field}
		/>
	);
};
