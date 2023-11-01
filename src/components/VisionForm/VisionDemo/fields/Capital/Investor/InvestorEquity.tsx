import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";

export default () => {
	return (
		<FormTextFieldNumeric
			label={"Equity"}
			fieldName={"investorEquityPercentage"}
			placeholder={"Investor equity"}
			suffix="%"
			disabled
		/>
	);
};
