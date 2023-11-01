import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumeric
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
