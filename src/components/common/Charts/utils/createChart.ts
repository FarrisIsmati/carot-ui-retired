import { CalendarResult } from "@/components/VisionForm/VisionDemo/results/utils/calendarResults";
import { Margin } from "@/types/Charts";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import { Dispatch, RefObject, SetStateAction } from "react";
import { ChartProps } from "../LineChart";
import createChartAxis from "../utils/createChartAxis";
import createChartLines from "./createChartLines";

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
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
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
	setChart({ x, xAxis: null, y, yAxis: null, svg, lines: {} });

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
		setChart,
	});

	// Create lines
	createChartLines({ x, y, svg, data, setChart });
};
