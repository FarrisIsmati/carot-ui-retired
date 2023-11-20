import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { generateInitResultsCalendar } from "./genInitCalendar";
import { getLeaseValues, getProductValues } from "./getValues";
import { useGetAllLeaseCurveDataPoints } from "./hooks/useCurves";
import { updateCalendar } from "./updateCalendar";

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;

	// Generate init calendar
	const calendar = useMemo(
		() => generateInitResultsCalendar(startDate, endDate),
		[startDate, endDate]
	);

	//
	// Calculations
	//

	// First Good
	// First location
	const firstProduct = visionFormDemoState.products[0];
	const firstProductLocation = visionFormDemoState.leases.find((lease) =>
		firstProduct.locationIds.has(lease.id)
	);

	if (firstProduct && !firstProductLocation) {
		throw new Error("No location found for product");
	}

	//
	// Test
	//

	// FIXME: Todo calculate all leases not just one
	const { leaseFootTrafficCurveDataPoints } = useGetAllLeaseCurveDataPoints();

	// Ensure product is loaded
	if (firstProduct && firstProductLocation) {
		// Get values from form based on set input mode
		const companyValues: ResultsCompanyValues = {
			...getProductValues(firstProduct),
			...getLeaseValues(firstProductLocation!),
		};

		updateCalendar(calendar, companyValues);
	}

	console.log(calendar);

	console.log("-");

	return <p>Le results</p>;
};
