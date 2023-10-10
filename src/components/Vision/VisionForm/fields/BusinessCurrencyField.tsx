import { SampleDropdownDataset1 } from "@/components/common/Dropdown/index.stories";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";

export default () => {
	return (
		<FormDropdown
			label="CURRENCY"
			placeholder="Select"
			fieldName="businessCurrency"
			dataset={SampleDropdownDataset1}
			dropdownSize={Sizes.SMALL}
		/>
	);
};
