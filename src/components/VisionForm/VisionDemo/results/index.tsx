import Legend from "@/components/common/Charts/Legend";
import { createLegendPayload } from "@/components/common/Charts/utils/legend";
import ChipButtonControl, {
	ChipButtonControlState,
} from "@/components/common/ChipButtonControl";
import { getVFDemoCurrencySymbol } from "@/redux/visionFormDemo/selectors";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer16, spacer24, spacer4 } from "@/styles/sizes";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import { legendColorMap } from "@/types/Charts/Legend";
import { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import LineChart from "../../../common/Charts/LineChart";
import { ResultsOverview } from "./Overview";
import { defaultVisionDemoLineChartData } from "./defaultData";
import useCalendar from "./hooks/useCalendar";
import { CalendarResult } from "./utils/calendarResults";
import { getChartFilterData } from "./utils/chartFilter";

const ChartFilterContainer = styled.div`
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
	border-radius: ${spacer4};
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

const FilterContainer = styled.div`
	margin: ${spacer16} ${spacer24} 0 ${spacer16};
`;

const StickyContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer16};
	position: sticky;
	top: ${spacer16};
`;

export default () => {
	// Creates a calendar everytime the form state on redux updates (redux triggers the calendar update)
	const [calendar, calendarData] = useCalendar();

	// Chart data (if not set add default chart data)
	const data: CalendarResult[] = !calendarData.length
		? defaultVisionDemoLineChartData
		: calendarData;
	//
	// Filter data sets the time scale a user looks at
	//
	const [filterData, setFilterData] = useState<
		ChipButtonControlState<ChartFilterEnum>
	>({
		Month: true,
		Year: false,
	});
	const filter = getChartFilterData(filterData);

	// Is calendar data loaded
	const isDataLoaded = calendarData.length > 0;
	// Selected currency
	const cs = useSelector(getVFDemoCurrencySymbol);
	const currencySymbol = isDataLoaded ? cs : "";

	return (
		<div>
			{/* Div required to allow sticky container to work  */}
			<StickyContainer>
				{/* Top bar data preview */}
				<ResultsOverview calendar={calendar} currencySymbol={currencySymbol} />
				{/* Chart */}
				<ChartFilterContainer>
					<FilterContainer>
						<ChipButtonControl state={filterData} setState={setFilterData} />
					</FilterContainer>
					<LineChart
						data={data}
						isDataLoaded={isDataLoaded}
						xField="date"
						yField="lifetimeRevenue"
						height={400}
						width={829}
						margin={{ top: 10, right: 20, bottom: 20, left: 20 }}
						filter={filter}
						currencySymbol={currencySymbol}
					/>
				</ChartFilterContainer>
				{/* Legend */}
				{isDataLoaded && (
					<Legend payload={createLegendPayload(legendColorMap)} />
				)}
			</StickyContainer>
		</div>
	);
};
