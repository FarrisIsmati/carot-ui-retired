import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";
import { legendColorMap } from "@/types/Charts/Legend";
import * as d3 from "d3";

interface CreateLineProps {
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	data: CalendarResult[];
	key: keyof Omit<CalendarResult, "date">;
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
}

export const createChartLine = ({ svg, data, key, x, y }: CreateLineProps) => {
	const lineAttr = d3
		.line()
		.x((d) => x((d as unknown as CalendarResult).date))
		.y((d) => y((d as unknown as CalendarResult)[key]));

	return (
		svg
			.append("path")
			.data([[{ date: data[0].date, lifetimeRevenue: 0, lifetimeExpenses: 0 }]])
			.attr("fill", "none")
			.attr("stroke", legendColorMap[key])
			.attr("stroke-width", 0)
			// @ts-ignore (this works just fine thank you)
			.attr("d", lineAttr)
	);
};
