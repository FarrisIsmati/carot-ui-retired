import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useHasInputModeError } from "@/validators/utils";
import { useContext } from "react";
import { useGetTextFieldDefaultValue } from "../../../utils/form";
import CapitalAndInvestorsFormContext from "../../forms/CapitalAndInvestorsForm/CapitalAndInvestorsFormContext";

export default () => {
	const fieldName = "investorStartingCash";

	// Context
	const formContext = useContext(CapitalAndInvestorsFormContext);
	const prefix = formContext?.currencySymbol;

	// Input mode
	const inputMode = InputModeEnum.Average;
	const inputModeError = useHasInputModeError(fieldName);

	return (
		<FormTextFieldNumeric
			label={"Cash"}
			fieldName={fieldName}
			placeholder={"Starting cash"}
			defaultValue={useGetTextFieldDefaultValue(`${fieldName}${inputMode}`)}
			inputMode={inputMode}
			inputModeError={inputModeError}
			allowNegativeValue={false}
			prefix={prefix}
		/>
	);
};
