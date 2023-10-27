import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { PhysicalType } from "@/types/VisionForm/SpaceAndPlaceSection";
import LeaseCost from "../../fields/SpaceAndPlace/LeaseCost";
import LeaseLengthMonths from "../../fields/SpaceAndPlace/LeaseLengthMonths";
import LeaseLengthYears from "../../fields/SpaceAndPlace/LeaseLengthYears";
import LeaseSize from "../../fields/SpaceAndPlace/LeaseSize";
import { physicalTypeValues } from "../../values/fields/segmentedControlValues";
import { FieldsContainer, StyledDoubleDropdownContainer } from "../styles";

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
					<StyledDoubleDropdownContainer>
						<LeaseLengthYears />
						<LeaseLengthMonths />
					</StyledDoubleDropdownContainer>
					<LeaseCost />
					<LeaseSize />
				</>
			)}
			{physicalTypeValue === PhysicalType.OWN && <p>Own</p>}
		</FieldsContainer>
	);
};
