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
	/**
	 * Default value, overrides input field default value
	 */
	defaultValue?: number;
	size?: Sizes;
	/**
	 * Input mode whether you are entering low, average, or high estimates
	 * @default AVERAGE
	 */
	inputMode?: InputModeEnum;
	/**
	 * If there's an error on the low/average/high values need to display error
	 */
	inputModeError?: string;
}

export default ({
	label,
	placeholder,
	fieldName,
	disabled,
	defaultValue = 0,
	prefix,
	suffix,
	size = Sizes.LARGE,
	inputMode = InputModeEnum.Default,
	inputModeError,
}: FormTextFieldSelectorProps) => {
	// If a field has an input mode (other than DEFAULT) then they have a low, average, and high value as well
	const field = useField(
		inputMode === InputModeEnum.Default ? fieldName : `${fieldName}${inputMode}`
	);
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
			error={hasVisibleErrors(field.meta) || !!inputModeError}
			errorText={
				(hasVisibleErrors(field.meta) && field.meta.error) || inputModeError
			}
			disabled={disabled}
			size={size}
			{...field}
		/>
	);
};
