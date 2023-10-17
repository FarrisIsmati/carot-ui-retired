import FormDropdown from "@/components/form/FormDropdown";
import { useGetDropdownDefaultValue } from "@/utils/form";
import { legalStructureDropdownValues } from "../../VisionDemo/values/VisionFormDemoDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="STRUCTURE"
			placeholder="Select"
			fieldName="legalStructure"
			dataset={legalStructureDropdownValues}
			defaultValue={useGetDropdownDefaultValue(
				legalStructureDropdownValues,
				"legalStructure"
			)}
		/>
	);
};
