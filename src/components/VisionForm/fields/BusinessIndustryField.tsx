import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../VisionDemo/values/VisionFormDemoDropdownValues";

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
