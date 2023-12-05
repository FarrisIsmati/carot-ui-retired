import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { useSelector } from "react-redux";
import { updateCalendarLease } from "../utils/calendarUpdate/lease";

import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import { updateCalendarCapital } from "../utils/calendarUpdate/capital";
import { updateCalendarInvestor } from "../utils/calendarUpdate/investors";
import { updateCalendarProduct } from "../utils/calendarUpdate/product";
import { updateCalendarTaxes } from "../utils/calendarUpdate/taxes";
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
	// 0. Capital: Updates company reserve with starting capital
	//
	investors.forEach((i) => {
		// Update starting reserve of the company
		const investor: InvestorCalendarValues = getInvestorCalendarValues(i);
		updateCalendarCapital({
			calendar,
			companyValues: getCompanyCalendarValues(visionFormDemoState),
			investor,
		});
	});

	//
	// 1. Products: update all company and product revenue/expenses
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
	// 2. Leases: update lease and company expenses/profits
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
	// 3. Taxes
	//
	updateCalendarTaxes({
		calendar,
		companyValues: getCompanyCalendarValues(visionFormDemoState),
	});

	//
	// 4. Investors: update all investors based on earned revenue calculated from products
	// Right now investors only get money after taxes (assuming the only investor owns the whole company)
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
