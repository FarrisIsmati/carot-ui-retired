import { useVisionFormField } from "@/components/VisionForm/utils/form";
import { PhysicalFinanceType } from "@/types/VisionForm/SpaceAndPlaceSection";
import ConstructionCost from "../../fields/SpaceAndPlace/ConstructionCost";
import DaysOpenPerWeekGeneric from "../../fields/SpaceAndPlace/DaysOpenPerWeekGeneric";
import HoursOpenPerDayGeneric from "../../fields/SpaceAndPlace/HoursOpenPerDayGeneric";
import LeaseCost from "../../fields/SpaceAndPlace/LeaseCost";
import LeaseLengthMonths from "../../fields/SpaceAndPlace/LeaseLengthMonths";
import LeaseLengthYears from "../../fields/SpaceAndPlace/LeaseLengthYears";
import LeaseSize from "../../fields/SpaceAndPlace/LeaseSize";
import MaxOccupancy from "../../fields/SpaceAndPlace/MaxOccupancy";
import PhysicalFinanceTypeControl from "../../fields/SpaceAndPlace/PhysicalFinanceTypeControl";
import PhysicalUseTypeControl from "../../fields/SpaceAndPlace/PhysicalUseTypeControl";
import { FieldsContainer, StyledDoubleDropdownContainer } from "../styles";

export default () => {
	const physicalFinanceTypeField = useVisionFormField("physicalFinanceType");
	const physicalFinanceTypeValue = physicalFinanceTypeField.input.value;

	return (
		<FieldsContainer noMargin>
			<PhysicalFinanceTypeControl />
			<PhysicalUseTypeControl />
			{physicalFinanceTypeValue === PhysicalFinanceType.LEASE && (
				<>
					<StyledDoubleDropdownContainer>
						<LeaseLengthYears />
						<LeaseLengthMonths />
					</StyledDoubleDropdownContainer>
					<LeaseCost />
					<LeaseSize />
					<ConstructionCost />
					<MaxOccupancy />
					<StyledDoubleDropdownContainer>
						<HoursOpenPerDayGeneric />
						<DaysOpenPerWeekGeneric />
					</StyledDoubleDropdownContainer>
				</>
			)}
			{physicalFinanceTypeValue === PhysicalFinanceType.OWN && <p>Own</p>}
		</FieldsContainer>
	);
};
