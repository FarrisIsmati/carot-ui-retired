import DatePicker, { DatePickerProps } from "@/components/common/DatePicker";
import {
	hasVisibleErrors,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import { AllFormValues } from "@/types/VisionForm";

export interface FormDatePickerProps {
	fieldName: keyof AllFormValues;
}

export default ({
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
