import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";
import { useSelector } from "react-redux";
import { updateCalendar } from "../utils/calendarUpdate";
import {
	getFixedCompanyValues,
	getLeaseValues,
	getProductValues,
} from "../utils/formValues";
import { useCalcAllLeaseCurveDataPoints } from "./useCurves";
import useGenerateInitialCalendar from "./useGenerateInitialCalendar";

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
		const companyValues: ResultsCompanyValues = {
			...getProductValues(product),
			...getLeaseValues(location, leasesFootTrafficCurveIdDataPointsMap),

			fixedCompanyValues: getFixedCompanyValues(visionFormDemoState),
		};

		/**
		 * TODO/FIXME add investors
		 */
		updateCalendar(calendar, companyValues);
	});

	return calendar;
};
