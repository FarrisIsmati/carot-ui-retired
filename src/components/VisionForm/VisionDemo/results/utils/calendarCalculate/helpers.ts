import { AllCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { round } from "lodash";
import moment from "moment";

// Helps calculate taxes
export const calculateTaxes = (profit: number, taxRate: number) => {
	if (profit <= 0) {
		return 0;
	}
	return round(profit * (taxRate / 100));
};

/**
 * Calculate number of customers that enter a physical location per day
 * @param companyValues
 * @returns
 */
export const calcCustomersPerDay = (
	values: AllCalendarValues,
	date: string
) => {
	// Current day number
	const day = moment(date).diff(values.startDate, "days");
	// Hours open per day (only calculating generic not by actual hour)
	const hoursOpen = values.hoursOpenPerDayGeneric;
	// How long on average a patron will spend within the physical store
	const footTrafficTurnoverTime = values.trafficTurnoverTime; // in minutes
	// Maximum amount of people than can be in the store at any given time
	const maxOccupancy = values.maxOccupancy;
	// Average amount of people in the store at any given time (multiply potential max by the curve)
	const averageOccupancy = round(
		maxOccupancy *
			(values.leaseFootTrafficCurveDataPoints !== undefined
				? values.leaseFootTrafficCurveDataPoints[day].uv / 100 // must be divided by 100 to get %
				: 1),
		2
	); // TODO/FIXME when other options handle not just lease curve
	// Number of customers that enter the store per hour
	const visitorsPerHour =
		round(60 / footTrafficTurnoverTime) * averageOccupancy;
	// Number of visitors per day
	const visitorsPerDay = hoursOpen * visitorsPerHour;
	// Number of customers per day
	const customersPerDay =
		visitorsPerDay * (values.customerConversionRate / 100);

	return customersPerDay;
};
