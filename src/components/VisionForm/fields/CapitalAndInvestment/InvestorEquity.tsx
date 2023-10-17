import FormTextfieldCurrency from "@/components/form/FormTextfieldCurrency";

export default () => {
	return (
		<FormTextfieldCurrency
			label={"Equity"}
			fieldName={"investorEquity"}
			placeholder={"Investor equity"}
			defaultValue="100"
			suffix="%"
			disabled
		/>
	);
};
