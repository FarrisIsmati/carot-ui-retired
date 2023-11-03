import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../../values/fields/dropdownValues";

export default () => {
	return (
		<FormDropdown
			label="Industry"
			placeholder="Select"
			fieldName="overviewIndustry"
			dataset={industryDropdownValues}
		/>
	);
};
