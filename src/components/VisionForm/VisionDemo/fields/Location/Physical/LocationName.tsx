import FormTextField from "@/components/form/FormTextField";

const LocationName = () => {
	return (
		<FormTextField
			label={"Name"}
			fieldName={"locationName"}
			placeholder={"Location name"}
		/>
	);
};

export default LocationName;
