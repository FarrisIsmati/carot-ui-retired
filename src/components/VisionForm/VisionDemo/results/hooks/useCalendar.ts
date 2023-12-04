import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { useSelector } from "react-redux";
import { updateCalendarLease } from "../utils/calendarUpdate/lease";

import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import { updateCalendarInvestor } from "../utils/calendarUpdate/investors";
import { updateCalendarProduct } from "../utils/calendarUpdate/product";
import {
	getAllCalendarValues,
	getCompanyCalendarValues,
	getInvestorCalendarValues,
	getLeaseCalendarValues,
} from "../utils/calendarValues";
import { useCalcAllLeaseCurveDataPoints } from "./useCurves";
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

	// Memoized: calculate all lease traffic curve data points
	const leasesFootTrafficCurveIdDataPointsMap =
		useCalcAllLeaseCurveDataPoints();

	//
	// Update all company and product revenue/expenses
	//
	products.forEach((product) => {
		// Lease locations the product is being sold in
		const leases = visionFormDemoState.leases.filter((lease) =>
			product.locationIds.has(lease.id)
		);

		//
		// Loop through all leases product is associated with
		//
		leases.forEach((lease) => {
			// Company values to be processed on
			const values = getAllCalendarValues({
				formState: visionFormDemoState,
				productState: product,
				leaseState: lease,
				leasesFootTrafficCurveIdDataPointsMap,
			});
			updateCalendarProduct({
				calendar,
				values,
			});
		});
	});

	//
	// Update lease and company expenses/profits/taxes
	//
	leases.forEach((lease) => {
		const leaseValues: LocationLeaseCalendarValues = getLeaseCalendarValues({
			lease,
			leasesFootTrafficCurveIdDataPointsMap,
		});
		updateCalendarLease({
			calendar,
			companyValues: getCompanyCalendarValues(visionFormDemoState),
			leaseValues,
		});
	});

	//
	// Update all investors based on earned revenue calculated from products
	//
	investors.forEach((i) => {
		// Investor values to be processed on
		const investor: InvestorCalendarValues = getInvestorCalendarValues(i);
		updateCalendarInvestor({
			calendar,
			companyValues: getCompanyCalendarValues(visionFormDemoState),
			investor,
		});
	});

	return calendar;
};
