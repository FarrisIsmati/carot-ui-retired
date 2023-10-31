import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { physicalUseTypeValues } from "../../values/fields/segmentedControlValues";

export default () => {
	const physicalUseTypeField = useVisionFormField("physicalUseType");

	return (
		<FormSegmentedControl
			width={spacer320}
			data={physicalUseTypeValues}
			input={physicalUseTypeField.input}
		/>
	);
};
