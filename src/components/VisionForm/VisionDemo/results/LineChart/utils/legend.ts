import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { LineChartKeyMapType } from "@/types/Charts";

export const legendColorMap: LineChartKeyMapType = {
	lifetimeRevenue: colorBaseMap[ColorBaseCore.RED_5],
	lifetimeExpenses: colorBaseMap[ColorBaseCore.GREEN_5],
};

export const legendKeyMap: LineChartKeyMapType = {
	lifetimeRevenue: "Revenue",
	lifetimeExpenses: "Expenses",
};

export const createLegendPayload = (legendColorMap: LineChartKeyMapType) => {
	const res = [];
	for (const [k, v] of Object.entries(legendColorMap)) {
		res.push({
			color: v,
			value: legendKeyMap[k as keyof LineChartKeyMapType],
		});
	}
	return res;
};
