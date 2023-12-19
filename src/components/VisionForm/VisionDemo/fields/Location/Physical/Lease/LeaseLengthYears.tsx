import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";

const LeaseLengthYears = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumericInputMode
			label={`Length years`}
			fieldNameBase={"leaseLengthYears"}
			inputMode={inputMode}
			placeholder={"Years"}
			allowNegativeValue={false}
			size={Sizes.SMALL}
			disabled
		/>
	);
};

export default LeaseLengthYears;
