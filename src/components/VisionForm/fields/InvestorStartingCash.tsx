import FormTextfieldCurrency from "@/components/form/FormTextfieldCurrency";

export default () => {
	return (
		<FormTextfieldCurrency
			label={"Cash"}
			fieldName={"investorStartingCash"}
			placeholder={"Starting cash"}
			defaultValue="0"
			prefix="$"
		/>
	);
};
