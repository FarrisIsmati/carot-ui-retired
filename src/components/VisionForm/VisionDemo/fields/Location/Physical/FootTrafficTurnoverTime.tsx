import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumeric
			label={`Foot traffic turnover time (m)`}
			fieldNameBase={"trafficTurnoverTime"}
			inputMode={inputMode}
			placeholder={"Length in minutes"}
			allowNegativeValue={false}
		/>
	);
};
