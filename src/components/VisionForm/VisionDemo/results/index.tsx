import ChipButtonControl, {
	ChipButtonControlState,
} from "@/components/common/ChipButtonControl";
import { getCurrencySymbol } from "@/redux/visionFormDemo/selectors";
import { useState } from "react";
import { useSelector } from "react-redux";
import LineChart from "./LineChart";
import useCalendar from "./hooks/useCalendar";

export default () => {
	// Creates a calendar everytime the form state on redux updates (redux triggers the calendar update)
	const calendar = useCalendar();
	const currencySymbol = useSelector(getCurrencySymbol);

	const [timeFilterState, setTimeFilterState] =
		useState<ChipButtonControlState>({
			Month: true,
			Year: false,
		});

	return (
		<LineChart
			data={calendar}
			currencySymbol={currencySymbol}
			height={400}
			width={829}
			TimeFilter={
				<ChipButtonControl
					state={timeFilterState}
					setState={setTimeFilterState}
				/>
			}
		/>
	);
};
