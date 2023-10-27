import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../../values/fields/dropdownValues";

export default () => {
	return (
		<FormDropdown
			label="INDUSTRY"
			placeholder="Select"
			fieldName="overviewIndustry"
			dataset={industryDropdownValues}
		/>
	);
};
