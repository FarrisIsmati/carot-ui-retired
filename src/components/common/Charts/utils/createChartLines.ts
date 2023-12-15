import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";
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
}

// Create a blank line (for initializing chart)
export const createChartLine = ({
	svg,
	data,
	key,
	x,
	y,
}: CreateLineProps): d3.Selection<
	SVGPathElement,
	CalendarResult[],
	null,
	undefined
> => {
	const initialLineChartData = {
		date: data[0].date,
		lifetimeRevenue: 0,
		lifetimeExpenses: 0,
	};

	const lineAttr = d3
		.line()
		.x((d) => x((d as unknown as CalendarResult).date))
		.y((d) => y((d as unknown as CalendarResult)[key]));

	const res: d3.Selection<SVGPathElement, CalendarResult[], null, undefined> =
		svg
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
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}

export default ({ x, y, svg, data, setChart }: CreateChartLinesProps) => {
	// Create init lines (will have no data)
	const fields = Object.keys(data[0]) as Array<keyof (typeof data)[0]>;
	fields.forEach((k) => {
		const key = k as keyof CalendarResult;

		if (key === "date") {
			return;
		}

		// Create initial blank lines (so update lines has reference to lines)
		const line = createChartLine({
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
