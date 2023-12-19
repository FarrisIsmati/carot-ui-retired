import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import { round } from "lodash";
import numeral from "numeral";
import { Dispatch, SetStateAction } from "react";
import { ChartProps } from "../LineChart";
import { generateNumberByDigits } from "./helpers";

/**
 * Set the x axis and y axis extent
 * @param param0
 */
export const updateDomainScale = ({
	x,
	y,
	xRange,
	yRange,
}: {
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	xRange: [number, number];
	yRange: [number, number];
}) => {
	// Set the scale of the x and y axis (RANGE OF DATA)
	x.domain(xRange);
	y.domain(yRange);
};

/**
 * Sets the appropiate D3 time scale
 * @param filter
 * @returns
 */
export const getTicks = (filter: ChartFilterEnum) => {
	if (filter === ChartFilterEnum.Month) {
		return d3.timeMonth.every(2);
	}
	if (filter === ChartFilterEnum.Year) {
		return d3.timeYear.every(1);
	}
	return d3.timeMonth.every(2);
};

/**
 * Sets the appropiate D3 time scale
 * @param filter
 * @returns
 */
export const getTickFormat = (filter: ChartFilterEnum) => {
	if (filter === ChartFilterEnum.Month) {
		return d3.timeFormat("%b %Y");
	}
	if (filter === ChartFilterEnum.Year) {
		return d3.timeFormat("%Y");
	}
	return d3.timeFormat("%b %Y");
};

export const X_AXIS_ID = "X_AXIS_ID";

/**
 * Set X Axis
 * @param param0
 */
export const createXAxis = ({
	x,
	svg,
	height,
	filter,
	setChart,
}: {
	x: d3.ScaleTime<number, number, never>;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	height: number;
	filter: ChartFilterEnum;
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}) => {
	const xAxis = d3
		.axisBottom(x)
		.tickSize(4)
		.tickPadding(6)
		.ticks(getTicks(filter))
		//@ts-ignore
		.tickFormat(getTickFormat(filter));
	setChart((prev) => ({ ...(prev as ChartProps), xAxis }));

	// After clearing or already empty add X axis
	svg
		.append("g")
		.attr("id", X_AXIS_ID)
		.attr("transform", `translate(0, ${height})`)
		// @ts-ignore
		.call(xAxis)
		.call((g) =>
			g.selectAll("path").attr("stroke", colorBaseMap[ColorBaseCore.NEUTRAL_8])
		)
		.call((g) =>
			g.selectAll("line").attr("stroke", colorBaseMap[ColorBaseCore.NEUTRAL_8])
		);
};

/**
 * Generates tick values based on tick count (omits the first value);
 * @param tickCount
 * @returns
 */
export const generateYaxisTickValues = ({
	tickCount,
	yRange,
}: {
	tickCount: number;
	yRange: [number, number];
}) => {
	const max = yRange[0] < 0 ? yRange[1] + -1 * yRange[0] : yRange[1];

	const arr = [];

	// This gets a better rounded number to display e.g. (1,450,000 vs 1,453,238)
	const getTickValue = (num: number) => {
		// Take number, get its digits, get 1XXX (digits)
		const digits = (Math.log(num) * Math.LOG10E + 1) | 0;

		// Generate number
		const digitsNum = generateNumberByDigits(digits);

		// Divide the number by the digit number
		const multiplier = round(num / digitsNum, 1);

		// Multiply floor result with the 1XXX (digits)
		const res = multiplier * digitsNum;

		return res;
	};

	for (let i = 1; i <= tickCount + 1; i++) {
		const num = (max / tickCount) * i + yRange[0];

		// Add 0 to tick if showing negative numbers
		if (num !== 0 && i - 2 >= 0 && arr[i - 2] < 0 && num > 0) {
			arr.push(0);
		}

		arr.push(getTickValue(num));
	}

	return arr;
};
export const Y_AXIS_ID = "Y_AXIS_ID";

/**
 * Set Y Axis
 * @param param0
 */
export const createYAxis = ({
	y,
	data,
	yRange,
	svg,
	height,
	currencySymbol,
	setChart,
}: {
	y: any;
	data: any[];
	yRange: [number, number];
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	height: number;
	currencySymbol: string;
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}) => {
	const yTickValues = generateYaxisTickValues({
		tickCount: 5,
		yRange,
	});

	const yAxis = d3
		.axisLeft(y)
		.tickSize(0)
		.tickPadding(4)
		.tickValues(yTickValues)
		.tickFormat((d) => `${currencySymbol}${numeral(d).format("0,0")}`);
	setChart((prev) => ({ ...(prev as ChartProps), yAxis }));

	svg
		.append("g")
		.attr("id", Y_AXIS_ID)
		.call(yAxis)
		.call((g) => g.select(".domain").remove())
		.call((g) =>
			g
				.selectAll("text")
				.attr("dy", "16px")
				.attr("dx", "6px")
				.attr("text-anchor", "start")
		);

	return { yTickValues };
};

/**
 * Set the guiding lines of the grid (designed to be inline with y axis)
 */
export const createGridLines = ({
	y,
	yTickValues,
	svg,
	width,
}: {
	y: any;
	yTickValues: number[];
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	width: number;
}) => {
	const gridClass = "gridLine";

	//
	// Add grid lines
	//
	const gridLines = svg
		.selectAll("yGrid")
		.data([0, ...yTickValues])
		.join("line")
		.attr("class", gridClass)
		.attr("x1", 0)
		.attr("x2", width)
		.attr("y1", (d) => y(d))
		.attr("y2", (d) => y(d))
		.attr("stroke", colorBaseMap[ColorBaseCore.NEUTRAL_8])
		.attr("stroke-width", 1);
};

export const updateTickFont = (
	svg: d3.Selection<SVGGElement, unknown, null, undefined>
) => {
	// Set tick font
	svg
		.selectAll(".tick text")
		.attr("fill", colorBaseMap[ColorBaseCore.NEUTRAL_3])
		.style("font-family", "Poppins")
		.style("font-style", "normal")
		.style("font-weight", "500")
		.style("font-size", "9px");
};

/**
 * Set axis for chart
 */
const createChartAxis = ({
	x,
	y,
	data,
	xRange,
	yRange,
	svg,
	height,
	width,
	currencySymbol,
	filter,
	setChart,
}: {
	data: any[];
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	xRange: [number, number];
	yRange: [number, number];
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	height: number;
	width: number;
	currencySymbol: string;
	filter: ChartFilterEnum;
	setChart: Dispatch<SetStateAction<ChartProps | undefined>>;
}) => {
	// Update the scale of the x and y axis (RANGE OF DATA)
	updateDomainScale({ x, y, xRange, yRange });

	// Create X axis (Filter time scale)
	createXAxis({ x, svg, height, filter, setChart });
	// Cretae Y axis
	const { yTickValues } = createYAxis({
		y,
		svg,
		currencySymbol,
		data,
		yRange,
		height,
		setChart,
	});

	// Update font
	updateTickFont(svg);

	// Create grid lines
	createGridLines({ y, yTickValues, svg, width });
};

export default createChartAxis;
