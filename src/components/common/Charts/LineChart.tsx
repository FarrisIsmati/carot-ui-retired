import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer16, spacer24, spacer4, spacer8 } from "@/styles/sizes";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import { legendColorMap } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { useRef, useState } from "react";
import styled from "styled-components";
import { CalendarResult } from "../../VisionForm/VisionDemo/results/utils/calendarResults";
import useGetDimensions from "./hooks/useGetDimensions";
import useSetChart from "./hooks/useSetChart";
import createChartAxis from "./utils/createChartAxis";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const LineChartWrapper = styled.div`
	padding: ${spacer16} ${spacer24} 0 ${spacer24};
	border-radius: ${spacer4};
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

interface LineChartProps {
	data: CalendarResult[]; // Data values represented
	isDataLoaded: boolean; // Whether or not to render blank chart before data is set
	xField: string; // X field to represent on data
	yField: string; // Y field to represent on data
	width: number; // Sizing
	height: number; // Sizing
	filter: ChartFilterEnum; // Defines what timescale is selected
	currencySymbol?: string;
}

export default ({
	data,
	isDataLoaded,
	xField,
	yField,
	width: w,
	height: h,
	filter,
	currencySymbol = "",
}: LineChartProps) => {
	// Ref
	const ref = useRef<SVGElement>(null);
	// Chart elements
	const [chart, setChart] = useState<{
		x: d3.ScaleTime<number, number, never>;
		y: d3.ScaleLinear<number, number, never>;
		svg: d3.Selection<SVGGElement, unknown, null, undefined>;
		lines: {
			[key: string]: d3.Selection<SVGPathElement, never, null, undefined>;
		};
	} | null>(null);

	// Get width height + margins
	const { width, height, margin } = useGetDimensions({
		width: w,
		height: h,
	});

	// Create initial chart
	useSetChart({
		currencySymbol,
		filter,
		xField,
		yField,
		width,
		height,
		data,
		ref,
		margin,
		setChart,
	});

	// Only should run on updates to data
	if (isDataLoaded && chart) {
		const { x, y, svg, lines } = chart;

		// Set axis (x & y axis plus formatting)
		// TODO UPDATE SET AXIS
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

		const existingLinesKey = Object.keys(lines);
		console.log("existingLinesKey", existingLinesKey);

		// Are there any existing lines
		if (existingLinesKey.length > 0) {
			existingLinesKey.forEach((key) => {
				const lineAttr = d3
					.line()
					.x((d) => x((d as unknown as CalendarResult).date))
					.y((d) => y((d as unknown as CalendarResult)[key]));

				lines[key]
					.data([data])
					.transition()
					.duration(1000)
					.attr("fill", "none")
					.attr("stroke", legendColorMap[key])
					.attr("stroke-width", 1)
					// @ts-ignore
					.attr("d", lineAttr);
			});
		}
	}

	return (
		<Container>
			<LineChartWrapper>
				<svg
					width={w}
					height={h}
					id="lineChart"
					// @ts-ignore
					ref={ref}
				/>
			</LineChartWrapper>
		</Container>
	);
};
