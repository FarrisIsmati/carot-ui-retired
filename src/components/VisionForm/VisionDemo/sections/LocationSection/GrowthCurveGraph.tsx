import { createGrowthCurve } from "@/components/VisionForm/utils/growthCurve";
import { pxStringToNum, spacer320 } from "@/styles/sizes";
import { Line, LineChart } from "recharts";
import { Point } from "recharts/types/shape/Curve";

export interface GrowthCurveGraphProps {
	/**
	 * Data points
	 */
	data: Point[];
	/**
	 * Length in days
	 */
	length: number;
}

export default ({ data, length }: GrowthCurveGraphProps) => (
	<LineChart
		width={pxStringToNum(spacer320)}
		height={pxStringToNum(spacer320)}
		data={createGrowthCurve(data, length)}
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
