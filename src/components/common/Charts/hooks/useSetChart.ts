import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";
import { Margin } from "@/types/Charts";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import createChartAxis from "../utils/createChartAxis";
import { createChartLine } from "../utils/createChartLine";

interface useSetChartProps {
	ref: RefObject<SVGElement>;
	width: number;
	height: number;
	margin: Margin;
	data: CalendarResult[];
	xField: string;
	yField: string;
	filter: ChartFilterEnum;
	currencySymbol: string;
	setChart: Dispatch<
		SetStateAction<{
			x: d3.ScaleTime<number, number, never>;
			y: d3.ScaleLinear<number, number, never>;
			svg: d3.Selection<SVGGElement, unknown, null, undefined>;
			lines: {
				[key: string]: d3.Selection<SVGPathElement, never, null, undefined>;
			};
		} | null>
	>;
}

/**
 * Create chart
 */
export default ({
	width,
	height,
	ref,
	margin,
	data,
	xField,
	yField,
	filter,
	currencySymbol,
	setChart,
}: useSetChartProps) => {
	useEffect(() => {
		// Set initial SVG, append it to ref
		const svg = d3
			.select(ref.current)
			.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
			.append("g")
			.attr("transform", `translate(${margin.left},${margin.top})`);

		// Create chart axis
		const x = d3.scaleTime().range([0, width]);
		const y = d3.scaleLinear().range([height, 0]);

		// Set X & Y time scale and SVG
		setChart({ x, y, svg, lines: {} });

		// Create axis
		createChartAxis({
			currencySymbol,
			filter,
			height,
			width,
			data,
			svg,
			x,
			y,
			xField,
			yField,
		});

		// Create init lines (will have no data)
		const fields = Object.keys(data[0]) as Array<keyof (typeof data)[0]>;

		fields.forEach((key) => {
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

			// TODO: START HERE HIDE THIS LITNER ERROR
			// THEN MOVE TO CREATE CHART AXIS FUNC AND CLEAN IT UP
			// THEN CREATE UPDATE CHART AXIS FUNC
			setChart((prev) => {
				if (prev && prev.lines) {
					prev.lines[key] = line;
				}
				return prev;
			});
		});
	}, []);
};
