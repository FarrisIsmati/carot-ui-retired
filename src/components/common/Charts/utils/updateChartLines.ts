import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";
import { legendColorMap } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { ChartProps } from "../LineChart";

interface UpdateChartLineProps {
	data: any[];
	chart: ChartProps;
}

export default ({ data, chart }: UpdateChartLineProps) => {
	const { x, y, lines } = chart;
	// Update line
	const existingLinesKey = Object.keys(lines);

	// Are there any existing lines
	if (existingLinesKey.length > 0) {
		existingLinesKey.forEach((k) => {
			const key = k as keyof Omit<CalendarResult, "date">;

			const lineAttr = d3
				.line()
				// @ts-ignore
				.x((d) => x(d.date))
				// @ts-ignore

				.y((d) => y(d[key]));

			lines[key]
				.data([data])
				.transition()
				.duration(1000)
				.attr("fill", "none")
				.attr(
					"stroke",
					legendColorMap[key as keyof Omit<CalendarResult, "date">]
				)
				.attr("stroke-width", 1)
				// @ts-ignore
				.attr("d", lineAttr);
		});
	}
};
