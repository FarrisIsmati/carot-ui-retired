import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { useGetDropdownDefaultValue } from "@/utils/form";
import { locationDropdownValues } from "../../VisionDemo/values/VisionFormDemoDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="LOCATION"
			placeholder="Select"
			fieldName="businessLocation"
			dataset={locationDropdownValues}
			dropdownSize={Sizes.SMALL}
			defaultValue={useGetDropdownDefaultValue(
				locationDropdownValues,
				"businessLocation"
			)}
		/>
	);
};
