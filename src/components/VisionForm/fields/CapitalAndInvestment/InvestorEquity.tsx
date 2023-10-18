import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";

export default () => {
	return (
		<FormTextFieldNumeric
			label={"Equity"}
			fieldName={"investorEquity"}
			placeholder={"Investor equity"}
			defaultValue="100"
			suffix="%"
			disabled
		/>
	);
};
