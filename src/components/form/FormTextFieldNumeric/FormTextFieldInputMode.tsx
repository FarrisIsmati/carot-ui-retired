import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import TextFieldNumeric, {
	TextFieldNumericProps,
} from "@/designSystem/TextField/TextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { AllFormValues, AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useHasInputModeError } from "@/validators/utils";

const getFieldName = (
	fieldName: keyof AllFormValues | undefined,
	fieldNameBase: keyof AllFormValuesInputModeLess | undefined,
	inputMode: InputModeEnum | undefined
): keyof AllFormValues => {
	if (fieldNameBase && inputMode) {
		return `${fieldNameBase}${inputMode}`;
	}

	if (fieldName) {
		return fieldName;
	}

	throw new Error(
		"Need to provide either a fieldName, or a fieldNameBase and inputMode"
	);
};

export type FormTextFieldSelectorProps = TextFieldNumericProps & {
	/**
	 * Name of field
	 */
	fieldName?: keyof AllFormValues;
	/**
	 * Base name of fieldname without input mode
	 */
	fieldNameBase: keyof AllFormValuesInputModeLess;
	/**
	 * Input mode whether you are entering low, average, or high estimates
	 * @default AVERAGE
	 */
	inputMode?: InputModeEnum;
};

const FormTextFieldNumericInputMode = ({
	label,
	placeholder,
	fieldName,
	fieldNameBase,
	disabled,
	prefix,
	suffix,
	defaultValue,
	size = Sizes.LARGE,
	inputMode,
	allowNegativeValue,
	onChange,
}: FormTextFieldSelectorProps) => {
	const fieldNameFull = getFieldName(fieldName, fieldNameBase, inputMode);

	// If a field has an input mode (other than DEFAULT) then they have a low, average, and high value as well
	const field = useVisionFormField(fieldNameFull);
	const input = field.input;

	const inputModeError = useHasInputModeError(fieldNameBase);

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
			onChange={onChange}
			size={size}
			allowNegativeValue={allowNegativeValue}
			{...field}
		/>
	);
};

export default FormTextFieldNumericInputMode;
