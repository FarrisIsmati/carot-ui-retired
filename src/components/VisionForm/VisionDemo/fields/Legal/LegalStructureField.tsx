import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { legalStructureDropdownValues } from "../../values/fields/dropdownValues";

const LegalStructureField = () => {
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

export default LegalStructureField;
