import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumeric
			label={`Max occupancy`}
			fieldNameBase={"maxOccupancy"}
			inputMode={inputMode}
			placeholder={"Occupancy"}
			allowNegativeValue={false}
		/>
	);
};
