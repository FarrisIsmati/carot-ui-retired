import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { useGetTextFieldDefaultValue } from "../../../utils/form";

export default () => {
	return (
		<FormTextFieldNumeric
			label={"Equity"}
			fieldName={"investorEquityPercentage"}
			placeholder={"Investor equity"}
			defaultValue={
				useGetTextFieldDefaultValue("investorEquityPercentage") as number
			}
			suffix="%"
			disabled
		/>
	);
};
