import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { PhysicalType } from "@/types/VisionForm/SpaceAndPlaceSection";
import LeaseCost from "../../fields/SpaceAndPlace/LeaseCost";
import { physicalTypeValues } from "../../values/fields/segmentedControlValues";
import { FieldsContainer } from "../styles";

export default () => {
	const physicalTypeField = useVisionFormField("physicalType");
	const physicalTypeValue = physicalTypeField.input.value;

	return (
		<FieldsContainer noMargin>
			<FormSegmentedControl
				width={spacer320}
				data={physicalTypeValues}
				input={physicalTypeField.input}
			/>
			{physicalTypeValue === PhysicalType.LEASE && (
				<>
					<LeaseCost />
				</>
			)}
			{physicalTypeValue === PhysicalType.OWN && <p>Own</p>}
		</FieldsContainer>
	);
};
