import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";

// Dimensions

export interface Margin {
	top: number;
	right: number;
	bottom: number;
	left: number;
}

// Line Chart

export type LineChartKeyMapType = {
	[key in keyof Omit<CalendarResult, "date">]: string;
};
