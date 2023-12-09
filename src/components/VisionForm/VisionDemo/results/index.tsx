import ChipButtonControl, {
	ChipButtonControlState,
} from "@/components/common/ChipButtonControl";
import { getCurrencySymbol } from "@/redux/visionFormDemo/selectors";
import { ChartTimeframeEnum } from "@/types/Charts/ChartTimeFrame";
import { useState } from "react";
import { useSelector } from "react-redux";
import LineChart from "./LineChart";
import useCalendar from "./hooks/useCalendar";

const getChartTimeframeFromState = (
	chartTimeframeState: ChipButtonControlState<ChartTimeframeEnum>
): ChartTimeframeEnum => {
	const res = Object.entries(chartTimeframeState).find(([_, isActive]) => {
		if (isActive) {
			return true;
		}
	});
	return (res && (res[0] as ChartTimeframeEnum)) ?? ChartTimeframeEnum.Month;
};

export default () => {
	// Creates a calendar everytime the form state on redux updates (redux triggers the calendar update)
	const calendar = useCalendar();
	const currencySymbol = useSelector(getCurrencySymbol);

	const [chartTimeframeState, setChartTimeFilterState] = useState<
		ChipButtonControlState<ChartTimeframeEnum>
	>({
		Month: true,
		Year: false,
	});

	return (
		<LineChart
			data={calendar}
			currencySymbol={currencySymbol}
			height={400}
			width={829}
			chartTimeframe={getChartTimeframeFromState(chartTimeframeState)}
			TimeFilter={
				<ChipButtonControl
					state={chartTimeframeState}
					setState={setChartTimeFilterState}
				/>
			}
		/>
	);
};
