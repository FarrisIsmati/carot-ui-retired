import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { useContext } from "react";
import CapitalAndInvestorsFormContext from "../../VisionDemo/context";

export default () => {
	const formContext = useContext(CapitalAndInvestorsFormContext);
	const prefix = formContext?.currencySymbol;

	return (
		<FormTextFieldNumeric
			label={"Cash"}
			fieldName={"investorStartingCash"}
			placeholder={"Starting cash"}
			defaultValue="0"
			prefix={prefix}
		/>
	);
};
