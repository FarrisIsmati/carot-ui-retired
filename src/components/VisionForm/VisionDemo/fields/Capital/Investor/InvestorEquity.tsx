import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";

const InvestorEquity = () => {
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

export default InvestorEquity;
