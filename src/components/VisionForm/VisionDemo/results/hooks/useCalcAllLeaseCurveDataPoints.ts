import { datesDifference } from "@/components/VisionForm/utils/dates";
import { createGrowthCurve } from "@/components/VisionForm/utils/growthCurve";
import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { CurveDataPointMap } from "@/types/VisionForm/calendar/curve";
import { useMemo } from "react";
import { useSelector } from "react-redux";

/**
 * Get all they curve types for leases, memoize entire function
 * Note this only handles traffic curves, if adding more curves need to modify function
 * @returns CurveDataPointMap
 */
const useCalcAllLeaseCurveDataPoints = (): CurveDataPointMap => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);

	return useMemo(() => {
		const lengthDays =
			datesDifference(
				visionFormDemoState.overviewStartDate,
				visionFormDemoState.overviewEndDate,
				"days"
			) + 1;

		// Mapper holding curve types and their respective data points
		const curveTypeDataPointMap: CurveDataPointMap = {};

		// Mapper holding the final set of data (leases and their data points)
		const leasesIdDataPointsMap: CurveDataPointMap = {};

		// Generate all possible growth curve data points
		visionFormDemoState?.leases.forEach((lease) => {
			const trafficCurveType = lease.trafficCurve;

			// If curve type doesn't have data points generated generate them
			if (!curveTypeDataPointMap[trafficCurveType]) {
				curveTypeDataPointMap[trafficCurveType] = createGrowthCurve(
					trafficCurveType,
					lengthDays
				);
			}

			// Associate data points with leases
			leasesIdDataPointsMap[lease.id] = curveTypeDataPointMap[trafficCurveType];
		});

		return leasesIdDataPointsMap;
	}, [
		visionFormDemoState.overviewStartDate,
		visionFormDemoState.overviewEndDate,
		visionFormDemoState?.leases,
		// FIXME/TODO - when ability to create custom curves is added, make sure it's a top level form state
		// Then if length changes we can recompute this function
	]);
};

export default useCalcAllLeaseCurveDataPoints;
