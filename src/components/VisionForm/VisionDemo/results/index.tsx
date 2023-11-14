import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import moment from "moment";
import { useSelector } from "react-redux";

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;
	const totalDays = moment(endDate).diff(moment(startDate), "days");

	return <p>Le results</p>;
};
