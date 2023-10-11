import FormDropdown from "@/components/form/FormDropdown";
import { capitalTypeDropdownValues } from "../values/visionFormDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="CAPITAL SOURCE"
			placeholder="Select"
			fieldName="capitalType"
			dataset={capitalTypeDropdownValues}
		/>
	);
};
