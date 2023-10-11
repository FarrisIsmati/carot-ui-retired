import { SampleDropdownDataset1 } from "@/components/common/Dropdown/index.stories";
import FormDropdown from "@/components/form/FormDropdown";

export default () => {
	return (
		<FormDropdown
			label="INDUSTRY"
			placeholder="Select"
			fieldName="businessIndustry"
			dataset={SampleDropdownDataset1}
		/>
	);
};
