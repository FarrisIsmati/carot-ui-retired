import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Field name
	const fieldNameBase = "customerConversionRate";

	// CustomerConversionRate input
	const CustomerConversionRateField = useVisionFormField(
		`${fieldNameBase}${inputMode}`
	);

	return (
		<FormTextFieldNumeric
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
