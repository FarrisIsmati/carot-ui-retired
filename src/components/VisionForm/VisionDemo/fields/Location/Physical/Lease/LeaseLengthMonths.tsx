import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Field
	const fieldNameBase: keyof AllFormValuesInputModeLess = "leaseLengthMonths";
	const leaseLengthField = useVisionFormField(`${fieldNameBase}${inputMode}`);

	return (
		<FormTextFieldNumeric
			label={`Length months`}
			fieldNameBase={"leaseLengthMonths"}
			inputMode={inputMode}
			placeholder={"Months"}
			allowNegativeValue={false}
			size={Sizes.SMALL}
			onChange={(value) => {
				// Value cannot be greater than 11
				if (value && value > 11) {
					leaseLengthField.input.onChange(11);
				}
			}}
			disabled
		/>
	);
};
