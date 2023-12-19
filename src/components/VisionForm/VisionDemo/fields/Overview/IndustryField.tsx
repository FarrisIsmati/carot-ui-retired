import FormDropdown from "@/components/form/FormDropdown";
import { industryDropdownValues } from "../../values/fields/dropdownValues";

const IndustryField = () => {
	return (
		<FormDropdown
			label="Industry"
			placeholder="Select"
			fieldName="overviewIndustry"
			dataset={industryDropdownValues}
		/>
	);
};

export default IndustryField;
