import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import DatePicker, { DatePickerProps } from "@/designSystem/DatePicker";
import { AllFormValues } from "@/types/VisionForm";

export interface FormDatePickerProps {
	fieldName: keyof AllFormValues;
}

const FormDatePicker = ({
	fieldName,
	...props
}: FormDatePickerProps & DatePickerProps) => {
	const field = useVisionFormField(fieldName);
	const input = field.input;

	return (
		<DatePicker
			id={input.name}
			name={input.name}
			label={props.label}
			error={hasVisibleErrors(field.meta)}
			errorText={hasVisibleErrors(field.meta) && field.meta.error}
			{...props}
			{...field}
		/>
	);
};

export default FormDatePicker;
