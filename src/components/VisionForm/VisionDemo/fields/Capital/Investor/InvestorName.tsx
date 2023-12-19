import FormTextField from "@/components/form/FormTextField";

const InvestorName = () => {
	return (
		<FormTextField
			label={"Name"}
			fieldName={"investorName"}
			placeholder={"Investor name"}
		/>
	);
};

export default InvestorName;
