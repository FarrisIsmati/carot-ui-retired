import FormDropdown from "@/components/form/FormDropdown";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { useFormState } from "react-final-form";
import {
	LocationDropdownValuesEnum,
	legalStructureDropdownValues,
} from "../VisionDemo/values/VisionFormDemoDropdownValues";

export default () => {
	const formState = useFormState<VisionFormValues>();
	const formValues = formState.values;

	// No ability to choose company structure if not USA
	if (formValues.businessLocation !== LocationDropdownValuesEnum.USA) {
		return null;
	}

	return (
		<FormDropdown
			label="STRUCTURE"
			placeholder="Select"
			fieldName="legalStructure"
			dataset={legalStructureDropdownValues}
		/>
	);
};
