import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { locationDropdownValues } from "../values/visionFormDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="LOCATION"
			placeholder="Select"
			fieldName="businessLocation"
			dataset={locationDropdownValues}
			dropdownSize={Sizes.SMALL}
			defaultValue={locationDropdownValues[0]}
		/>
	);
};
