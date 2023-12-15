import { spacer16, spacer24, spacer8 } from "@/styles/sizes";
import { Margin } from "@/types/Charts";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import createChart from "./utils/createChart";
import getDimensions from "./utils/getDimensions";
import updateChart from "./utils/updateChart";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const LineChartWrapper = styled.div`
	padding: ${spacer16} ${spacer24} 0 ${spacer24};
`;

export interface ChartProps {
	x: d3.ScaleTime<number, number, never>;
	xAxis:
		| (d3.Axis<Date | d3.NumberValue> &
				((domainValue: Date | d3.NumberValue, index: number) => string))
		| null;
	y: d3.ScaleLinear<number, number, never>;
	yAxis: d3.Axis<d3.AxisDomain> | null;
	svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	lines: {
		[key: string]: d3.Selection<SVGPathElement, any, null, undefined>;
	};
}

export interface LineChartProps {
	data: any[]; // Data values represented
	isDataLoaded: boolean; // Whether or not to render blank chart before data is set
	xField: string; // X field to represent on data
	yField: string; // Y field to represent on data
	width: number; // Sizing
	height: number; // Sizing
	margin: Margin;
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
	margin: m,
	filter,
	currencySymbol = "",
}: LineChartProps) => {
	// Ref
	const ref = useRef<SVGElement>(null);

	// Chart elements
	const [chart, setChart] = useState<ChartProps>();

	// Get width height + margins
	const { width, height, margin } = useMemo(
		() =>
			getDimensions({
				width: w,
				height: h,
				margin: m,
			}),
		[w, h, m.top, m.bottom, m.left, m.right]
	);

	// Create initial chart
	useEffect(() => {
		createChart({
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
	}, []);

	// Only should run on updates to data
	if (isDataLoaded && chart) {
		updateChart({
			chart,
			filter,
			xField,
			yField,
			data,
			width: w,
		});
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
