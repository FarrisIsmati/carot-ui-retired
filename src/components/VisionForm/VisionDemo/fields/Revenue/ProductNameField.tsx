import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormTextField from "@/components/form/FormTextField";

export default () => {
	const test = useVisionFormField("productName");

	return (
		<FormTextField
			label={"Name"}
			fieldName={"productName"}
			placeholder={"Product name"}
		/>
	);
};
