import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import numeral from "numeral";
import { ChartProps } from "../LineChart";
import {
	X_AXIS_ID,
	Y_AXIS_ID,
	generateYaxisTickValues,
	getTickFormat,
	getTicks,
	updateDomainScale,
	updateTickFont,
} from "./createChartAxis";

/**
 * Set the guiding lines of the grid (designed to be inline with y axis)
 */
export const updateGridLines = ({
	y,
	yTickValues,
	width,
}: {
	y: any;
	yTickValues: number[];
	width: number;
}) => {
	const gridClass = "gridLine";
	const gridLines = d3.selectAll(`.${gridClass}`).data([0, ...yTickValues]);

	gridLines
		.transition()
		.attr("x1", 0)
		.attr("x2", width)
		.attr("y1", (d) => y(d))
		.attr("y2", (d) => y(d));
};

/**
 * Set X Axis
 * @param param0
 */
const updateChartXAxis = ({
	xAxis,
	filter,
	svg,
}: {
	xAxis:
		| d3.Axis<Date | d3.NumberValue> &
				((domainValue: Date | d3.NumberValue, index: number) => string);
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	filter: ChartFilterEnum;
}) => {
	xAxis
		.ticks(getTicks(filter))
		//@ts-ignore
		.tickFormat(getTickFormat(filter));
	svg
		.select(`#${X_AXIS_ID}`)
		.transition()
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
 * Set Y Axis
 * @param param0
 */
const updateChartYAxis = ({
	currencySymbol,
	yAxis,
	svg,
	data,
	yRange,
}: {
	currencySymbol: string;
	yAxis: d3.Axis<d3.AxisDomain>;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	data: any[];
	yRange: [number, number];
}) => {
	// Create grid lines
	const yTickValues = generateYaxisTickValues({
		tickCount: 5,
		yRange,
	});

	yAxis
		.tickValues(yTickValues)
		.tickFormat((d) => `${currencySymbol}${numeral(d).format("0,0")}`);
	svg
		.select(`#${Y_AXIS_ID}`)
		.transition()
		// @ts-ignore
		.call(yAxis)
		.call((g) =>
			g
				.selectAll("text")
				.attr("dy", "16px")
				.attr("dx", "6px")
				.attr("text-anchor", "start")
		)
		.call((g) => g.selectAll("path").attr("stroke", "rgba(0,0,0,0")) // Remove pops so hide with color first
		.call((g) => g.select(".domain").remove());

	return { yTickValues };
};

/**
 * Update axis for chart
 */
const updateChartAxis = ({
	currencySymbol,
	data,
	chart,
	filter,
	xRange,
	yRange,
	width,
}: {
	currencySymbol: string;
	data: any[];
	chart: ChartProps;
	filter: ChartFilterEnum;
	xRange: [number, number];
	yRange: [number, number];
	width: number;
}) => {
	const { x, xAxis, y, yAxis, svg } = chart;

	// Update axis (x & y axis plus formatting)
	updateDomainScale({ x, y, xRange, yRange });

	if (xAxis) {
		// Update X axis (Filter time scale)
		updateChartXAxis({ filter, xAxis, svg });
	} else {
		throw new Error("xAxis doesn't exist");
	}

	if (yAxis) {
		// Update Y axis
		const { yTickValues } = updateChartYAxis({
			currencySymbol,
			yAxis,
			svg,
			data,
			yRange,
		});

		// Create grid lines
		updateGridLines({ y, yTickValues, width });

		// Update font
		updateTickFont(svg);
	} else {
		throw new Error("yAxis doesn't exist");
	}
};

export default updateChartAxis;
