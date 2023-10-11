import FormDropdown from "@/components/form/FormDropdown";
import { useFormState } from "react-final-form";
import { DraftVisionFormValues } from "..";
import {
	LocationDropdownValuesEnum,
	legalStructureDropdownValues,
} from "../values/visionFormDropdownValues";

export default () => {
	const formState = useFormState<DraftVisionFormValues>();
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
