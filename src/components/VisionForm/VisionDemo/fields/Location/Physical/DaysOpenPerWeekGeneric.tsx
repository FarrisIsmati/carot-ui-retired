import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Field
	const fieldNameBase: keyof AllFormValuesInputModeLess =
		"daysOpenPerWeekGeneric";
	const daysOpenPerWeekField = useVisionFormField(
		`${fieldNameBase}${inputMode}`
	);

	return (
		<FormTextFieldNumeric
			label={"Days open per week"}
			fieldNameBase={"daysOpenPerWeekGeneric"}
			inputMode={inputMode}
			placeholder={"Days"}
			size={Sizes.SMALL}
			onChange={(value) => {
				// Value cannot be greater than 7
				if (value && value > 7) {
					daysOpenPerWeekField.input.onChange(7);
				}
			}}
			allowNegativeValue={false}
		/>
	);
};
