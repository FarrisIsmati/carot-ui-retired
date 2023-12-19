import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";

const HoursOpenPerDayGeneric = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Field
	const fieldNameBase: keyof AllFormValuesInputModeLess =
		"hoursOpenPerDayGeneric";
	const hoursOpenPerDayField = useVisionFormField(
		`${fieldNameBase}${inputMode}`
	);

	return (
		<FormTextFieldNumeric
			label={"Hours open per day"}
			fieldNameBase={"hoursOpenPerDayGeneric"}
			inputMode={inputMode}
			placeholder={"Hours"}
			size={Sizes.SMALL}
			onChange={(value) => {
				// Value cannot be greater than 24
				if (value && value > 24) {
					hoursOpenPerDayField.input.onChange(24);
				}
			}}
			allowNegativeValue={false}
		/>
	);
};

export default HoursOpenPerDayGeneric;
