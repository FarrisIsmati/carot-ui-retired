import FormTextfield from "@/components/form/FormTextfield";

export default () => {
	// Lock to number only
	return (
		<FormTextfield
			label={"Cash"}
			fieldName={"investorStartingCash"}
			placeholder={"Starting cash"}
			defaultValue="0"
			prefix="$"
		/>
	);
};
