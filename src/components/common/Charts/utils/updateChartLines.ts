import { CalendarResult } from "@/types/Charts";
import { legendColorMap } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { ChartProps } from "../LineChart";

interface UpdateChartLineProps {
	data: any[];
	chart: ChartProps;
}

const updateChartLines = ({ data, chart }: UpdateChartLineProps) => {
	const { x, y, lines } = chart;
	// Update line
	const existingLinesKey = Object.keys(lines);

	// Are there any existing lines
	if (existingLinesKey.length > 0) {
		existingLinesKey.forEach((k) => {
			const lineAttr = d3
				.line()
				// @ts-ignore
				.x((d) => x(d.date))
				// @ts-ignore

				.y((d) => y(d[k]));

			lines[k]
				.data([data])
				.transition()
				.duration(1000)
				.attr("fill", "none")
				// TODO: Consider generics here?
				.attr("stroke", legendColorMap[k as keyof Omit<CalendarResult, "date">])
				.attr("stroke-width", 1)
				// @ts-ignore
				.attr("d", lineAttr);
		});
	}
};

export default updateChartLines;
