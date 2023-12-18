import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { LineChartKeyMapType } from ".";

export const legendColorMap: LineChartKeyMapType = {
	lifetimeRevenue: colorBaseMap[ColorBaseCore.BLUE_5],
	lifetimeProfit: colorBaseMap[ColorBaseCore.GREEN_5],
	lifetimeExpenses: colorBaseMap[ColorBaseCore.RED_5],
};
