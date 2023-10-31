import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { physicalFinanceTypeValues } from "../../values/fields/segmentedControlValues";

export default () => {
	const physicalFinanceTypeField = useVisionFormField("physicalFinanceType");

	return (
		<FormSegmentedControl
			width={spacer320}
			data={physicalFinanceTypeValues}
			input={physicalFinanceTypeField.input}
		/>
	);
};
