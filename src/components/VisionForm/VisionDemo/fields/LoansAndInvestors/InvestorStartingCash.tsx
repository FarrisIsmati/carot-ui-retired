import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import LoansAndInvestorsFormContext from "../../forms/LoansAndInvestorsForm/LoansAndInvestorsFormContext";

export default () => {
	// Context
	const formContext = useContext(LoansAndInvestorsFormContext);
	const prefix = formContext?.currencySymbol;

	// Input mode
	const inputMode = InputModeEnum.Average;

	return (
		<FormTextFieldNumeric
			label={"Cash"}
			fieldNameBase={"investorStartingCash"}
			placeholder={"Starting cash"}
			inputMode={inputMode}
			allowNegativeValue={false}
			prefix={prefix}
		/>
	);
};
