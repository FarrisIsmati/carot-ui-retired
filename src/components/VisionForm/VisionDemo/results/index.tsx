import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import numeral from "numeral";
import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";
import { default as CustomLegend } from "./Legend";
import useCalendar from "./hooks/useCalendar";

const CustomizedTick = ({ x, y, stroke, payload }: any) => {
	return (
		<g transform={`translate(${x},${y})`}>
			<text
				x={10}
				y={0}
				dy={20}
				textAnchor="end"
				fontFamily="Poppins"
				fontStyle="normal"
				fontWeight="500"
				fontSize="9px"
				fill={colorBaseMap[ColorBaseCore.NEUTRAL_3]}
			>
				{numeral(payload.value).format("0,0")}
			</text>
		</g>
	);
};

export default () => {
	// Creates a calendar everytime the form state on redux updates (redux triggers the calendar update)
	const calendar = useCalendar();

	console.log("Calendar Results", calendar);

	return (
		<LineChart
			width={829}
			height={463}
			data={calendar}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
		>
			<CartesianGrid
				strokeDasharray="0 0"
				vertical={false}
				stroke={colorBaseMap[ColorBaseCore.NEUTRAL_8]}
			/>
			<Legend
				iconType="circle"
				content={(props) => <CustomLegend payload={props.payload} />}
			/>
			<XAxis
				dataKey="date"
				tick={false}
				stroke={colorBaseMap[ColorBaseCore.NEUTRAL_8]}
			/>
			<YAxis
				tick={<CustomizedTick />}
				axisLine={false}
				stroke={colorBaseMap[ColorBaseCore.NEUTRAL_8]}
			/>
			<Line
				name="Revenue"
				type="monotone"
				dataKey="lifetimeRevenue"
				stroke={colorBaseMap[ColorBaseCore.RED_5]}
				dot={false}
			/>
			<Line
				name="Expenses"
				type="monotone"
				dataKey="lifetimeExpenses"
				stroke={colorBaseMap[ColorBaseCore.GREEN_5]}
				dot={false}
			/>
		</LineChart>
	);
};
