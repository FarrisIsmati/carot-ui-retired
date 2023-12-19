import { createGrowthCurve } from "@/components/VisionForm/utils/growthCurve";
import { pxStringToNum, spacer320 } from "@/styles/sizes";
import { CurveType } from "@/types/VisionForm/locationSection";
import { useMemo } from "react";
import { Line, LineChart } from "recharts";

export interface GrowthCurveGraphProps {
	/**
	 * Type of curve
	 */
	curveType: CurveType;
	/**
	 * Length in days
	 */
	length: number;
}

const GrowthCurveGraph = ({ curveType, length }: GrowthCurveGraphProps) => {
	const curveDataPoints = useMemo(
		() => createGrowthCurve(curveType, length),
		[curveType, length]
	);
	return (
		// RECHARTS
		<LineChart
			width={pxStringToNum(spacer320)}
			height={pxStringToNum(spacer320)}
			data={curveDataPoints}
		>
			<Line type="monotone" dataKey="uv" stroke="#8884d8" dot={false} />
			{/* <XAxis dataKey="name">
			<Label
				style={{
					textAnchor: "middle",
					fontSize: "80%",
				}}
				angle={0}
				value={"Time"}
			/>
		</XAxis>
		<YAxis>
			<Label
				style={{
					textAnchor: "middle",
					fontSize: "80%",
				}}
				angle={270}
				value={"Growth Percentage"}
			/>
		</YAxis> */}
		</LineChart>
	);
};

export default GrowthCurveGraph;
