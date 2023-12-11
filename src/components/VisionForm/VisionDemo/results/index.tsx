import ChipButtonControl, {
	ChipButtonControlState,
} from "@/components/common/ChipButtonControl";
import { getCurrencySymbol } from "@/redux/visionFormDemo/selectors";
import { spacer16 } from "@/styles/sizes";
import { ChartTimeframeEnum } from "@/types/Charts/ChartTimeFrame";
import { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import LineChart from "../../../common/Charts/LineChart";
import { ResultsOverview } from "./Overview";
import useCalendar from "./hooks/useCalendar";

const StickyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer16};
	position: sticky;
	top: ${spacer16};
`;

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
	const [calendar, calendarData] = useCalendar();
	const currencySymbol = useSelector(getCurrencySymbol);

	const [chartTimeframeState, setChartTimeFilterState] = useState<
		ChipButtonControlState<ChartTimeframeEnum>
	>({
		Month: true,
		Year: false,
	});

	return (
		<div>
			{/* Div required to allow sticky container to work  */}
			<StickyContainer>
				<ResultsOverview currencySymbol={currencySymbol} calendar={calendar} />
				<LineChart
					xRangeField="date"
					yRangeField="lifetimeRevenue"
					data={calendarData}
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
			</StickyContainer>
		</div>
	);
};
