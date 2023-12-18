import { LineChartKeyMapType } from "@/types/Charts";

//
// For all field sin legend key map it will be added to legend
//
export const legendKeyMap: LineChartKeyMapType = {
	lifetimeRevenue: "Revenue",
	lifetimeProfit: "Profit",
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
