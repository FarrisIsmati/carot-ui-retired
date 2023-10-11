import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../values/visionFormDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="INDUSTRY"
			placeholder="Select"
			fieldName="businessIndustry"
			dataset={industryDropdownValues}
		/>
	);
};
