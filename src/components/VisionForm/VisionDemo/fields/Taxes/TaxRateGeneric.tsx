import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";

const TaxRateGeneric = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Field
	const fieldNameBase: keyof AllFormValuesInputModeLess = "taxRateGeneric";
	const taxRateGenericField = useVisionFormField(
		`${fieldNameBase}${inputMode}`
	);

	return (
		<FormTextFieldNumeric
			label={"Tax Rate"}
			fieldNameBase={"taxRateGeneric"}
			placeholder={"Tax rate"}
			inputMode={inputMode}
			allowNegativeValue={false}
			suffix={"%"}
			onChange={(value) => {
				// Value cannot be greater than 100
				if (value && value > 100) {
					taxRateGenericField.input.onChange(100);
				}
			}}
		/>
	);
};

export default TaxRateGeneric;
