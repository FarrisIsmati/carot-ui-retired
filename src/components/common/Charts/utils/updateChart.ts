import { ChartFilterEnum } from "@/types/Charts/Filter";
import { ChartProps } from "../LineChart";
import updateChartAxis from "./updateChartAxis";
import updateChartLines from "./updateChartLines";

interface UpdateCreateChartProps {
	currencySymbol: string;
	chart: ChartProps;
	filter: ChartFilterEnum;
	xField: string;
	yField: string;
	data: any[];
	width: number;
}

export default ({
	currencySymbol,
	chart,
	filter,
	xField,
	yField,
	data,
	width,
}: UpdateCreateChartProps) => {
	// Update axis
	updateChartAxis({
		currencySymbol,
		data,
		chart,
		filter,
		xField,
		yField,
		width,
	});

	// Update lines
	updateChartLines({ data, chart });
};
