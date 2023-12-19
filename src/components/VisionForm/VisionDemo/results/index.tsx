import BlurbLarge from "@/components/common/Blurb/BlurbLarge";
import Legend from "@/components/common/Charts/Legend";
import { createLegendPayload } from "@/components/common/Charts/utils/legend";
import ChipButtonControl, {
	ChipButtonControlState,
} from "@/components/common/ChipButtonControl";
import { getVFDemoCurrencySymbol } from "@/redux/visionFormDemo/selectors";
import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer16, spacer24, spacer4, spacer40 } from "@/styles/sizes";
import { CalendarResult } from "@/types/Charts";
import { ChartFilterEnum } from "@/types/Charts/Filter";
import { legendColorMap } from "@/types/Charts/Legend";
import { useState } from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import LineChart from "../../../common/Charts/LineChart";
import { ResultsOverview } from "./Overview";
import { defaultVisionDemoLineChartData } from "./defaultData";
import useCalendar from "./hooks/useCalendar";
import { getChartFilterData } from "./utils/chartFilter";

const ChartFilterContainer = styled.div`
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
	border-radius: ${spacer4};
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
`;

const FilterContainer = styled.div`
	margin: ${spacer16} ${spacer24} 0 ${spacer16};
`;

const StickyContainer = styled.div<{ width: number }>`
	display: flex;
	flex-direction: column;
	gap: ${spacer16};
	position: sticky;
	top: ${spacer16};
	max-width: ${(props) => props.width};
`;

const StyledBlurbLarge = styled(BlurbLarge)`
	margin-top: ${spacer40};
`;

export const ResultsDimensions = { height: 400, width: 900 };

const Results = () => {
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

	// Initial Line Chart Data
	const initialLineChartData: CalendarResult = {
		date: data[0].date,
		lifetimeRevenue: 0,
		lifetimeProfit: 0,
		lifetimeExpenses: 0,
	};

	return (
		<div>
			{/* Div required to allow sticky container to work  */}
			<StickyContainer width={ResultsDimensions.width}>
				{/* Top bar data preview */}
				<ResultsOverview
					calendar={calendar}
					data={data}
					currencySymbol={currencySymbol}
				/>
				{/* Chart */}
				<ChartFilterContainer>
					<FilterContainer>
						<ChipButtonControl state={filterData} setState={setFilterData} />
					</FilterContainer>
					<LineChart
						data={data}
						isDataLoaded={isDataLoaded}
						initialLineChartData={initialLineChartData}
						xField="date"
						// yField="lifetimeRevenue"
						height={ResultsDimensions.height}
						width={ResultsDimensions.width}
						margin={{ top: 10, right: 20, bottom: 20, left: 20 }}
						filter={filter}
						currencySymbol={currencySymbol}
					/>
				</ChartFilterContainer>
				{/* Legend */}
				{isDataLoaded && (
					<Legend payload={createLegendPayload(legendColorMap)} />
				)}

				<StyledBlurbLarge
					headline="Get more"
					body="Way more options to fill in, numbers to see, and charts that make you go “hmm... interesting.”"
					buttonText="Sign up free"
				/>
			</StickyContainer>
		</div>
	);
};

export default Results;
