import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { useSelector } from "react-redux";
import { updateCalendarLease } from "../utils/calendarUpdate/lease";

import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import { updateCalendarInvestor } from "../utils/calendarUpdate/investors";
import { updateCalendarProduct } from "../utils/calendarUpdate/product";
import {
	getCompanyValues,
	getInvestorCalendarValues,
	getLeaseValues,
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
			const companyValues: CompanyCalendarValues = getCompanyValues({
				companyValuesCore,
				product,
				lease,
				leasesFootTrafficCurveIdDataPointsMap,
			});
			updateCalendarProduct({
				calendar,
				companyValues,
				productValues,
				leaseValues,
				leasesFootTrafficCurveIdDataPointsMap,
			});
		});
	});

	//
	// TODO: LEASES
	//
	leases.forEach((lease) => {
		const leaseValues: LocationLeaseCalendarValues = getLeaseValues({
			lease,
			leasesFootTrafficCurveIdDataPointsMap,
		});
		updateCalendarLease({ calendar, companyValuesCore, leaseValues });
	});

	//
	// Update all investors based on earned revenue calculated from products
	//
	investors.forEach((i) => {
		// Investor values to be processed on
		const investor: InvestorCalendarValues = getInvestorCalendarValues(i);
		updateCalendarInvestor({ calendar, companyValuesCore, investor });
	});

	return calendar;
};
