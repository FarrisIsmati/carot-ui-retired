import ConstructionCost from "@/components/VisionForm/VisionDemo/fields/Location/Physical/ConstructionCost";
import DaysOpenPerWeekGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Physical/DaysOpenPerWeekGeneric";
import HoursOpenPerDayGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Physical/HoursOpenPerDayGeneric";
import LeaseCost from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseCost";
import LeaseLengthMonths from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseLengthMonths";
import LeaseLengthYears from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseLengthYears";
import LeaseSize from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseSize";
import MaxOccupancy from "@/components/VisionForm/VisionDemo/fields/Location/Physical/MaxOccupancy";
import LeaseForm from "@/components/VisionForm/VisionDemo/forms/LocationForm/PhysicalForm/LeaseForm";
import { StyledDoubleDropdownContainer } from "../../../styles";

export default () => {
	return (
		<LeaseForm>
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
		</LeaseForm>
	);
};
