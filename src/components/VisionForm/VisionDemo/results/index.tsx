import { getCurrencySymbol } from "@/redux/visionFormDemo/selectors";
import { useSelector } from "react-redux";
import LineChart from "./LineChart";
import useCalendar from "./hooks/useCalendar";

export default () => {
	// Creates a calendar everytime the form state on redux updates (redux triggers the calendar update)
	const calendar = useCalendar();
	const currencySymbol = useSelector(getCurrencySymbol);

	// console.log("Calendar Results", calendar);

	return (
		<LineChart
			data={calendar}
			currencySymbol={currencySymbol}
			height={400}
			width={829}
		/>
	);
};
