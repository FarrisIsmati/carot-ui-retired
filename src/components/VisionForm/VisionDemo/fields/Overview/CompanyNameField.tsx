import FormTextField from "@/components/form/FormTextField";

const CompanyNameField = () => {
	return (
		<FormTextField
			label={"Name"}
			fieldName={"overviewName"}
			placeholder={"Company name"}
		/>
	);
};

export default CompanyNameField;
