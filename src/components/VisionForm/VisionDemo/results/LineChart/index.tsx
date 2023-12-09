import createBlankChart from "@/components/VisionForm/VisionDemo/results/LineChart/utils/createBlankChart";
import getDimensions from "@/components/VisionForm/VisionDemo/results/LineChart/utils/getDimensions";
import setAxis from "@/components/VisionForm/VisionDemo/results/LineChart/utils/setAxis";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer16, spacer24, spacer4, spacer8 } from "@/styles/sizes";
import * as d3 from "d3";
import { useRef } from "react";
import styled from "styled-components";
import { CalendarResult } from "../utils/calendarResults";
import Legend from "./Legend";
import { createLegendPayload, legendColorMap } from "./utils/legend";

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

export default ({
	data,
	currencySymbol,
	width: actualWidth,
	height: actualHeight,
	TimeFilter,
}: {
	data: CalendarResult[];
	currencySymbol: string;
	width: number;
	height: number;
	TimeFilter?: JSX.Element;
}) => {
	const ref = useRef<SVGElement>(null);

	if (data.length) {
		// Get dimensions
		const { width, height, margin } = getDimensions({
			width: actualWidth,
			height: actualHeight,
		});

		// Create chart
		const { x, y, svg } = createBlankChart({
			ref,
			width,
			height,
			margin,
		});

		// Set axis (x & y axis plus formatting)
		setAxis({
			currencySymbol,
			height,
			width,
			data,
			svg,
			x,
			y,
			xRangeField: "date",
			yRangeField: "lifetimeRevenue",
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
			{data.length > 0 && TimeFilter}
			<LineChartWrapper>
				<svg
					width={actualWidth}
					height={actualHeight}
					id="lineChartCalendar"
					// @ts-ignore
					ref={ref}
				/>
			</LineChartWrapper>
			{data.length > 0 && (
				<Legend payload={createLegendPayload(legendColorMap)} />
			)}
		</Container>
	);
};
