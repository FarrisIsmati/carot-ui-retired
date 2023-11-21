import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { generateInitResultsCalendar } from "../utils/genInitCalendar";

/**
 * A memoized verion of generateInitResultsCalendar
 * Values already passed in
 */
export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;

	// Generate init calendar
	return useMemo(
		() => generateInitResultsCalendar(startDate, endDate),
		[startDate, endDate]
	);
};
