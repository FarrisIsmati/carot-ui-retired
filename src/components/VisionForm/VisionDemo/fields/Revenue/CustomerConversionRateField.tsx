import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";

const CustomerConversionRateField = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Field name
	const fieldNameBase = "customerConversionRate";

	// CustomerConversionRate input
	const CustomerConversionRateField = useVisionFormField(
		`${fieldNameBase}${inputMode}`
	);

	return (
		<FormTextFieldNumericInputMode
			label={`Customer conversion rate`}
			fieldNameBase={fieldNameBase}
			inputMode={inputMode}
			placeholder={"Percent of customers buying"}
			suffix={"%"}
			allowNegativeValue={false}
			onChange={(value) => {
				if (value && value > 100) {
					CustomerConversionRateField.input.onChange(100);
				}
			}}
		/>
	);
};

export default CustomerConversionRateField;
