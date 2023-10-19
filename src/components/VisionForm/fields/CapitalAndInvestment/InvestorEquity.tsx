import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useGetTextFieldDefaultValue } from "../../utils/form";

export default () => {
	return (
		<FormTextFieldNumeric
			label={"Equity"}
			fieldName={"investorEquityPercentage"}
			placeholder={"Investor equity"}
			inputMode={InputModeEnum.DEFAULT}
			defaultValue={useGetTextFieldDefaultValue("investorEquityPercentage")}
			suffix="%"
			disabled
		/>
	);
};
