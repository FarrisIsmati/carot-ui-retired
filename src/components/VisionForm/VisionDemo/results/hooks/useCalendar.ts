import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { useSelector } from "react-redux";
import { updateCalendarInvestor } from "../utils/calendarUpdateInvestors";
import { updateCalendarProduct } from "../utils/calendarUpdateProduct";
import {
	getCompanyValues,
	getInvestorCalendarValues,
} from "../utils/calendarValues";
import { useCalcAllLeaseCurveDataPoints } from "./useCurves";
import useGenerateCompanyValues from "./useGenerateCompanyValues";
import useGenerateInitialCalendar from "./useGenerateInitialCalendar";

/**
 * Generates initial calendar
 * Updates calendar based on all form values
 * Continues to update calendar if form values change (need to resubmit form)
 */

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const { products, investors, leases } = visionFormDemoState;

	// Memoized: generate the initial calendar
	const calendar = useGenerateInitialCalendar();

	// TODO: Memoize: get company values
	const companyValuesCore = useGenerateCompanyValues(visionFormDemoState);

	// Memoized: calculate all lease traffic curve data points
	const leasesFootTrafficCurveIdDataPointsMap =
		useCalcAllLeaseCurveDataPoints();

	// Update all company and product revenue/expenses
	// + Product Revenue
	// - Product expenses
	products.forEach((product) => {
		// Company values (takes product/location/staff/etc) values to gether (all revenue/expenses)
		const companyValues: CompanyCalendarValues = getCompanyValues({
			state: visionFormDemoState,
			companyValuesCore,
			product,
			leasesFootTrafficCurveIdDataPointsMap,
		});

		updateCalendarProduct({ calendar, companyValues });
	});

	// TODO: LEASES

	// Update all investors based on earned revenue calculated from products
	// No modifiers values except investors alone
	investors.forEach((i) => {
		const investor: InvestorCalendarValues = getInvestorCalendarValues(i);

		updateCalendarInvestor({ calendar, companyValuesCore, investor });
	});

	return calendar;
};
