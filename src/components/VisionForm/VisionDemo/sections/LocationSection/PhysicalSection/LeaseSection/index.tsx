import ConstructionCost from "@/components/VisionForm/VisionDemo/fields/Location/Physical/ConstructionCost";
import DaysOpenPerWeekGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Physical/DaysOpenPerWeekGeneric";
import FootTrafficCurve from "@/components/VisionForm/VisionDemo/fields/Location/Physical/FootTrafficCurve";
import FootTrafficTurnoverTime from "@/components/VisionForm/VisionDemo/fields/Location/Physical/FootTrafficTurnoverTime";
import HoursOpenPerDayGeneric from "@/components/VisionForm/VisionDemo/fields/Location/Physical/HoursOpenPerDayGeneric";
import LeaseCost from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseCost";
import LeaseLengthMonths from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseLengthMonths";
import LeaseLengthYears from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseLengthYears";
import LeaseSize from "@/components/VisionForm/VisionDemo/fields/Location/Physical/Lease/LeaseSize";
import LocationName from "@/components/VisionForm/VisionDemo/fields/Location/Physical/LocationName";
import MaxOccupancy from "@/components/VisionForm/VisionDemo/fields/Location/Physical/MaxOccupancy";
import LocationFormContext from "@/components/VisionForm/VisionDemo/forms/LocationForm/LocationFormContext";
import { datesDifference } from "@/components/VisionForm/utils/dates";
import { useVisionFormField } from "@/components/VisionForm/utils/form";
import { useContext, useMemo } from "react";
import {
	FieldsContainer,
	StyledDoubleDropdownContainer,
} from "../../../styles";
import GrowthCurveGraph from "../../GrowthCurveGraph";

const LeaseSection = () => {
	// Context
	const formContext = useContext(LocationFormContext);

	// Lease location fields
	const trafficCurveField = useVisionFormField("trafficCurve");

	// Traffic curve length in days
	const trafficCurveLength = useMemo(
		() => datesDifference(formContext!.startDate, formContext!.endDate, "days"),
		// eslint-disable-next-line react-hooks/exhaustive-deps
		[formContext!.startDate, formContext!.endDate]
	);

	return (
		<FieldsContainer noMargin>
			<LocationName />
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
			<GrowthCurveGraph
				curveType={trafficCurveField.input.value}
				length={trafficCurveLength}
			/>
			<FootTrafficCurve />
			<FootTrafficTurnoverTime />
		</FieldsContainer>
	);
};

export default LeaseSection;
