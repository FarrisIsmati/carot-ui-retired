import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
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
