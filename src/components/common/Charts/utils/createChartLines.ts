import { CalendarResult } from "@/types/Charts";
import { legendColorMap } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { Dispatch, SetStateAction } from "react";
import { ChartProps } from "../LineChart";

interface CreateLineProps {
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	data: CalendarResult[];
	key: keyof Omit<CalendarResult, "date">;
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	initialLineChartData: {};
}

// Create a blank line (for initializing chart)
export const createChartLine = ({
	svg,
	data,
	initialLineChartData,
	key,
	x,
	y,
}: CreateLineProps): d3.Selection<SVGPathElement, any[], null, undefined> => {
	const lineAttr = d3
		.line()
		.x((d) => {
			// @ts-ignore
			if (!d.date) {
				throw new Error("Line chart data must include a date field");
			}
			// @ts-ignore
			return x(d.date);
		})
		// @ts-ignore
		.y((d) => y(d[key]));

	const res: d3.Selection<SVGPathElement, any[], null, undefined> = svg
		.append("path")
		.data([[initialLineChartData]])
		.attr("fill", "none")
		.attr("stroke", legendColorMap[key])
		.attr("stroke-width", 0)
		.attr("d", lineAttr as unknown as readonly (string | number)[]);
	return res;
};

interface CreateChartLinesProps {
	data: any[];
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	initialLineChartData: {};
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}

const createChartLines = ({
	x,
	y,
	svg,
	data,
	initialLineChartData,
	setChart,
}: CreateChartLinesProps) => {
	// Create init lines (will have no data)
	const fields = Object.keys(data[0]) as Array<keyof (typeof data)[0]>;
	fields.forEach((k) => {
		const key = k as keyof CalendarResult;

		if (key === "date") {
			return;
		}

		// Create initial blank lines (so update lines has reference to lines)
		const line = createChartLine({
			initialLineChartData,
			x,
			y,
			svg,
			data,
			key,
		});

		setChart((prev) => {
			if (prev && prev.lines) {
				prev.lines[key] = line;
			}
			return prev;
		});
	});
};

export default createChartLines;
