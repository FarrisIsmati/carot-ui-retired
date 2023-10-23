import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import CapitalAndInvestorsFormContext from "../../VisionDemo/forms/CapitalAndInvestorsFormContext";
import { useGetTextFieldDefaultValue } from "../../utils/form";

export default () => {
	const formContext = useContext(CapitalAndInvestorsFormContext);
	const prefix = formContext?.currencySymbol;
	const inputMode = InputModeEnum.Average;
	return (
		<FormTextFieldNumeric
			label={"Cash"}
			fieldName={"investorStartingCash"}
			placeholder={"Starting cash"}
			defaultValue={useGetTextFieldDefaultValue(
				`investorStartingCash${inputMode}`
			)}
			inputMode={inputMode}
			allowNegativeValue={false}
			prefix={prefix}
		/>
	);
};
