import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { useSelector } from "react-redux";
import { updateCalendar } from "../utils/calendarUpdate";
import {
	getCompanyCalendarValuesFixed,
	getLeaseValues,
	getProductValues,
} from "../utils/calendarValues";
import { useCalcAllLeaseCurveDataPoints } from "./useCurves";
import useGenerateInitialCalendar from "./useGenerateInitialCalendar";
import useGenerateInitialInvestorsValues from "./useGenerateInitialInvestorsValues";

/**
 * Generates initial calendar
 * Updates calendar based on all form values
 * Continues to update calendar if form values change (need to resubmit form)
 */

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);

	// A memoized way to generate the initial calendar
	const calendar = useGenerateInitialCalendar();

	// Memoized way to calculate all lease traffic curve data points
	const leasesFootTrafficCurveIdDataPointsMap =
		useCalcAllLeaseCurveDataPoints();

	// Memoized way to getInvestorCalendarValues
	const investorValues = useGenerateInitialInvestorsValues(
		visionFormDemoState.investors
	);

	// Loop through all products
	visionFormDemoState.products.forEach((product) => {
		const location = visionFormDemoState.leases.find((lease) =>
			product.locationIds.has(lease.id)
		);

		if (!location) {
			throw new Error("No location found for product");
		}

		/**
		 * Get values for current product and lease association
		 * Update calendar for that specific product
		 */
		const companyValues: CompanyCalendarValues = {
			...getProductValues(product),
			...getLeaseValues(location, leasesFootTrafficCurveIdDataPointsMap),
			fixedCompanyValues: getCompanyCalendarValuesFixed(visionFormDemoState),
		};

		updateCalendar({ calendar, companyValues, investorValues });
	});

	return calendar;
};
