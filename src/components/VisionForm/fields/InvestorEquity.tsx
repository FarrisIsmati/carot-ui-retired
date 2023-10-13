import FormTextfield from "@/components/form/FormTextfield";

export default () => {
	return (
		<FormTextfield
			label={"Equity"}
			fieldName={"investorEquity"}
			placeholder={"Investor equity"}
			defaultValue="100"
			suffix="%"
			disabled
		/>
	);
};
