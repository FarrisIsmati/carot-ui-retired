import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";

const MaxOccupancy = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumericInputMode
			label={`Max occupancy`}
			fieldNameBase={"maxOccupancy"}
			inputMode={inputMode}
			placeholder={"Occupancy"}
			allowNegativeValue={false}
		/>
	);
};

export default MaxOccupancy;
