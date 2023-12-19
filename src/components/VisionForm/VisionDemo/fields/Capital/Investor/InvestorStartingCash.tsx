import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import CapitalFormContext from "../../../forms/CapitalForm/CapitalFormContext";

const InvestorStartingCash = () => {
	// Context
	const formContext = useContext(CapitalFormContext);
	const prefix = formContext?.currencySymbol;

	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumericInputMode
			label={"Cash"}
			fieldNameBase={"investorStartingCash"}
			placeholder={"Starting cash"}
			inputMode={inputMode}
			allowNegativeValue={false}
			prefix={prefix}
		/>
	);
};

export default InvestorStartingCash;
