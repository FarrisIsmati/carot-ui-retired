import { datesDifference } from "@/components/VisionForm/utils/dates";
import { createGrowthCurve } from "@/components/VisionForm/utils/growthCurve";
import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const useGetAllCurveDataPoints = () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);

	// Get days between start date and end date
	const lengthDays = datesDifference(
		visionFormDemoState.overviewStartDate,
		visionFormDemoState.overviewEndDate,
		"days"
	);

	const trafficCurveType = visionFormDemoState?.leases[0]?.trafficCurve;

	// Get lease foot traffic curve data
	const leaseFootTrafficCurveDataPoints = useMemo(
		() => createGrowthCurve(trafficCurveType, lengthDays),
		[trafficCurveType, lengthDays]
	);

	return { leaseFootTrafficCurveDataPoints };
};
