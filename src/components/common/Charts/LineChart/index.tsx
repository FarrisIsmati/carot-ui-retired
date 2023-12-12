import createBlankChart from "@/components/common/Charts/LineChart/utils/createBlankChart";
import getDimensions from "@/components/common/Charts/LineChart/utils/getDimensions";
import setAxis from "@/components/common/Charts/LineChart/utils/setAxis";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer16, spacer24, spacer4, spacer8 } from "@/styles/sizes";
import { ChartTimeframeEnum } from "@/types/Charts/ChartTimeFrame";
import { legendColorMap } from "@/types/Charts/Legend";
import * as d3 from "d3";
import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { CalendarResult } from "../../../VisionForm/VisionDemo/results/utils/calendarResults";
import Legend from "./Legend";
import { createLegendPayload } from "./utils/legend";

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

const TimeFilterContainer = styled.div`
	margin-bottom: ${spacer16};
`;

export default ({
	isDefaultData,
	xRangeField,
	yRangeField,
	data,
	currencySymbol,
	width: actualWidth,
	height: actualHeight,
	chartTimeframe,
	TimeFilter,
}: {
	isDefaultData: boolean; // Whether or not calendar data is loaded in
	xRangeField: string;
	yRangeField: string;
	data: CalendarResult[];
	currencySymbol: string;
	width: number;
	height: number;
	// Defines what timescale is selected
	chartTimeframe: ChartTimeframeEnum;
	// Component to select what the time scale/frame is
	TimeFilter?: JSX.Element;
}) => {
	const ref = useRef<SVGElement>(null);
	const [chartEl, setChartEl] = useState<{
		x: d3.ScaleTime<number, number, never>;
		y: d3.ScaleLinear<number, number, never>;
		svg: d3.Selection<SVGGElement, unknown, null, undefined>;
	} | null>(null);

	// Get margins, memoized
	const { width, height, margin } = useMemo(
		() =>
			getDimensions({
				width: actualWidth,
				height: actualHeight,
			}),
		[]
	);

	// Create the svg once
	useEffect(() => {
		// Create chart
		const { x, y, svg } = createBlankChart({
			ref,
			width,
			height,
			margin,
		});

		setChartEl({ x, y, svg });
	}, []);

	// Append the svg once the ref exists
	useEffect(() => {
		if (ref.current && chartEl) {
			const { x, y, svg } = chartEl;

			// Set axis (x & y axis plus formatting)
			setAxis({
				currencySymbol,
				chartTimeframe,
				height,
				width,
				data,
				svg,
				x,
				y,
				xRangeField,
				yRangeField,
			});
		}
	}, [ref.current]);

	// Only should run on updates to data
	if (!isDefaultData && chartEl) {
		const { x, y, svg } = chartEl;

		// Set axis (x & y axis plus formatting)
		setAxis({
			currencySymbol,
			chartTimeframe,
			height,
			width,
			data,
			svg,
			x,
			y,
			xRangeField,
			yRangeField,
		});

		const fields = Object.keys(data[0]) as Array<keyof (typeof data)[0]>;
		fields.forEach((key) => {
			if (key === "date") {
				return;
			}

			const line = d3
				.line()
				.x((d) => x((d as unknown as CalendarResult).date))
				.y((d) => y((d as unknown as CalendarResult)[key]));

			svg
				.append("path")
				.data([data])
				.attr("fill", "none")
				.attr("stroke", legendColorMap[key])
				.attr("stroke-width", 1)
				// @ts-ignore
				.attr("d", line);
		});
	}

	return (
		<Container>
			<LineChartWrapper>
				{data.length > 0 && (
					<TimeFilterContainer>{TimeFilter}</TimeFilterContainer>
				)}
				<svg
					width={actualWidth}
					height={actualHeight}
					id="lineChart"
					// @ts-ignore
					ref={ref}
				/>
			</LineChartWrapper>
			{!isDefaultData && (
				<Legend payload={createLegendPayload(legendColorMap)} />
			)}
		</Container>
	);
};
