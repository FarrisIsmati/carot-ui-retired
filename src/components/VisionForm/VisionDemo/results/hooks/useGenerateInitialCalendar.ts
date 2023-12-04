import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { Calendar } from "@/types/VisionForm/calendar";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { generateInitCalendar } from "../utils/calendarInitialize";

/**
 * A memoized verion of generateInitCalendar
 * Values already passed in
 */
export default (): Calendar => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;

	// Generate init calendar
	return useMemo(
		() => generateInitCalendar(startDate, endDate),
		[startDate, endDate]
	);
};
