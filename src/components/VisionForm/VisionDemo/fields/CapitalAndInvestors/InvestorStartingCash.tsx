import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import CapitalAndInvestorsFormContext from "../../forms/CapitalAndInvestorsForm/CapitalAndInvestorsFormContext";

export default () => {
	// Context
	const formContext = useContext(CapitalAndInvestorsFormContext);
	const prefix = formContext?.currencySymbol;

	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumeric
			label={"Cash"}
			fieldNameBase={"investorStartingCash"}
			placeholder={"Starting cash"}
			defaultValue={0}
			inputMode={inputMode}
			allowNegativeValue={false}
			prefix={prefix}
		/>
	);
};
