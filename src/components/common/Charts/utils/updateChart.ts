import { ChartFilterEnum } from "@/types/Charts/Filter";
import { ChartProps } from "../LineChart";
import updateChartAxis from "./updateChartAxis";
import updateChartLines from "./updateChartLines";

interface UpdateCreateChartProps {
	currencySymbol: string;
	chart: ChartProps;
	filter: ChartFilterEnum;
	xRange: [number, number];
	yRange: [number, number];
	data: any[];
	width: number;
}

const updateChart = ({
	currencySymbol,
	chart,
	filter,
	xRange,
	yRange,
	data,
	width,
}: UpdateCreateChartProps) => {
	// Update axis
	updateChartAxis({
		currencySymbol,
		data,
		chart,
		filter,
		xRange,
		yRange,
		width,
	});

	// Update lines
	updateChartLines({ data, chart });
};

export default updateChart;
