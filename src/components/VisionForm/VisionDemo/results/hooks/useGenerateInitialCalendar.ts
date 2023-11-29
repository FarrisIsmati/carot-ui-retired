import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { generateInitCalendar } from "../utils/calendarInitialize";

/**
 * A memoized verion of generateInitCalendar
 * Values already passed in
 */
export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;

	// Generate init calendar
	return useMemo(
		() => generateInitCalendar(startDate, endDate),
		[startDate, endDate]
	);
};
