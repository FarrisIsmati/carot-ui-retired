import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { ChartTimeframeEnum } from "@/types/Charts/ChartTimeFrame";
import * as d3 from "d3";
import { round } from "lodash";
import numeral from "numeral";
import { generateNumberByDigits } from "./helpers";

/**
 * Set the x axis and y axis extent
 * @param param0
 */
const setDomainScale = ({
	data,
	x,
	y,
	xRangeField,
	yRangeField,
}: {
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	xRangeField: string;
	yRangeField: string;
	data: any[];
}) => {
	// @ts-ignore
	x.domain(d3.extent(data, (d) => d[xRangeField]));
	// @ts-ignore
	y.domain([0, d3.max(data, (d) => d[yRangeField])]);
};

/**
 * Sets the appropiate D3 time scale
 * @param chartTimeframe
 * @returns
 */
const getTicks = (chartTimeframe: ChartTimeframeEnum) => {
	if (chartTimeframe === ChartTimeframeEnum.Month) {
		return d3.timeMonth.every(2);
	}
	if (chartTimeframe === ChartTimeframeEnum.Year) {
		return d3.timeYear.every(1);
	}
	return d3.timeMonth.every(2);
};

/**
 * Sets the appropiate D3 time scale
 * @param chartTimeframe
 * @returns
 */
const getTickFormat = (chartTimeframe: ChartTimeframeEnum) => {
	if (chartTimeframe === ChartTimeframeEnum.Month) {
		return d3.timeFormat("%b %Y");
	}
	if (chartTimeframe === ChartTimeframeEnum.Year) {
		return d3.timeFormat("%Y");
	}
	return d3.timeFormat("%b %Y");
};
/**
 * Set X Axis
 * @param param0
 */
const setxAxis = ({
	x,
	svg,
	height,
	chartTimeframe,
}: {
	x: d3.ScaleTime<number, number, never>;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	height: number;
	chartTimeframe: ChartTimeframeEnum;
}) => {
	const X_AXIS_ID = "X_AXIS_ID";
	const xAxisSVG = d3.select(`#${X_AXIS_ID}`);
	// Not empty
	if (!xAxisSVG.empty()) {
		xAxisSVG.remove();
	}

	// After clearing or already empty add X axis
	svg
		.append("g")
		.attr("id", X_AXIS_ID)
		.attr("transform", `translate(0, ${height})`)
		// @ts-ignore
		.call(
			d3
				.axisBottom(x)
				.tickSize(4)
				.tickPadding(6)
				.ticks(getTicks(chartTimeframe))
				//@ts-ignore
				.tickFormat(getTickFormat(chartTimeframe))
		)
		.call((g) => g.select(".domain").remove())
		.call((g) =>
			g.selectAll("line").attr("stroke", colorBaseMap[ColorBaseCore.NEUTRAL_8])
		);
};

/**
 * Generates tick values based on tick count (omits the first value);
 * @param tickCount
 * @returns
 */
const generateYaxisTickValues = ({
	tickCount,
	data,
	yRangeField,
}: {
	tickCount: number;
	data: any[];
	yRangeField: string;
}) => {
	const max = d3.max(data, (d) => d[yRangeField]) as number;
	const arr = [];
	for (let num = max / tickCount; num <= max; num += max / tickCount) {
		// Take number, get its digits, get 1XXX (digits)
		const digits = (Math.log(num) * Math.LOG10E + 1) | 0;

		// Generate number
		const digitsNum = generateNumberByDigits(digits);

		// Divide the number by the digit number
		const multiplier = round(num / digitsNum);

		// Multiply floor result with the 1XXX (digits)
		const res = multiplier * digitsNum;

		arr.push(res);
	}
	return arr;
};

/**
 * Set Y Axis
 * @param param0
 */
const setyAxis = ({
	y,
	data,
	yRangeField,
	svg,
	currencySymbol,
}: {
	y: any;
	data: any[];
	yRangeField: string;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	currencySymbol: string;
}) => {
	const Y_AXIS_ID = "Y_AXIS_ID";
	const yAxisSVG = d3.select(`#${Y_AXIS_ID}`);

	// Not empty
	if (!yAxisSVG.empty()) {
		yAxisSVG.remove();
	}

	const yTickValues = generateYaxisTickValues({
		tickCount: 4,
		data,
		yRangeField,
	});

	// After clearing or already empty add Y axis
	svg
		.append("g")
		.attr("id", Y_AXIS_ID)
		.call(
			d3
				.axisLeft(y)
				.tickSize(0)
				.tickPadding(4)
				.tickValues(yTickValues)
				.tickFormat((d) => `${currencySymbol}${numeral(d).format("0,0")}`)
		)
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
const setGridLines = ({
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
	//
	// Add grid lines
	//
	svg
		.selectAll("yGrid")
		.data([0, ...yTickValues])
		.join("line")
		.attr("x1", 0)
		.attr("x2", width)
		.attr("y1", (d) => y(d))
		.attr("y2", (d) => y(d))
		.attr("stroke", colorBaseMap[ColorBaseCore.NEUTRAL_8])
		.attr("stroke-width", 1);
};

const setTickFont = (
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
export default ({
	x,
	y,
	data,
	xRangeField,
	yRangeField,
	svg,
	height,
	width,
	currencySymbol,
	chartTimeframe,
}: {
	data: any[];
	x: d3.ScaleTime<number, number, never>;
	y: d3.ScaleLinear<number, number, never>;
	xRangeField: string;
	yRangeField: string;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	height: number;
	width: number;
	currencySymbol: string;
	chartTimeframe: ChartTimeframeEnum;
}) => {
	// Set the scale of the x and y axis (RANGE OF DATA)
	setDomainScale({ x, y, xRangeField, yRangeField, data });

	// Set X axis (Filter time scale)
	setxAxis({ x, svg, height, chartTimeframe });
	// Set Y axis
	const { yTickValues } = setyAxis({
		y,
		svg,
		currencySymbol,
		data,
		yRangeField,
	});

	// Set grid lines
	setGridLines({ y, yTickValues, svg, width });

	// Set font
	setTickFont(svg);
};
