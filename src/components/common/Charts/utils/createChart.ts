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
	data: {}[];
	xRange: [number, number];
	yRange: [number, number];
	filter: ChartFilterEnum;
	currencySymbol: string;
	initialLineChartData: {};
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}

/**
 * Create chart
 */
const createChart = ({
	width,
	height,
	ref,
	margin,
	data,
	xRange,
	yRange,
	filter,
	initialLineChartData,
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
		xRange,
		yRange,
		setChart,
	});

	// Create lines
	createChartLines({ x, y, svg, data, initialLineChartData, setChart });
};

export default createChart;
