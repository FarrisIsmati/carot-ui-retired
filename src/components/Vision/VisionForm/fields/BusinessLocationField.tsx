import { SampleDropdownDataset1 } from "@/components/common/Dropdown/index.stories";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";

export default () => {
	return (
		<FormDropdown
			label="LOCATION"
			placeholder="Select"
			fieldName="businessLocation"
			dataset={SampleDropdownDataset1}
			dropdownSize={Sizes.SMALL}
		/>
	);
};
