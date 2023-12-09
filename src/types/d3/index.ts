import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";

export interface Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

export type LineChartKeyMapType = {
	[key in keyof Omit<CalendarResult, "date">]: string;
};
