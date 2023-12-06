import { AllCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { round } from "lodash";
import moment from "moment";

/**
 * Total year profit determines if the user is net positive or net negative so if the given profit should be taxed
 * @param totalYearProfit
 * @param prevTotalYearProfit
 * @param profit
 * @param taxRate
 * @returns
 */
export const calculateTaxes = ({
	totalYearProfit,
	prevTotalYearProfit,
	totalYearTaxes,
	profit,
	taxRate,
}: {
	totalYearProfit: number;
	prevTotalYearProfit: number;
	totalYearTaxes: number;
	profit: number;
	taxRate: number;
}) => {
	// If there is no profit for current year no need to add taxes
	if (totalYearProfit <= 0) {
		return 0;
	}

	// If we started to loose profits while profitable for the year, reduce
	if (totalYearTaxes > 0 && profit <= 0) {
		// If profit will make taxes negative just force taxes down to 0
		if (totalYearTaxes + profit < 0) {
			return -1 * totalYearTaxes;
		}
		return profit; // we want to subtract profit from taxes owed
	}

	// Offsetting current profit with previous profit
	if (prevTotalYearProfit < 0 && totalYearProfit > 0) {
		return (profit + prevTotalYearProfit) * (taxRate / 100);
	}

	// Normal profit tax rate
	return profit * (taxRate / 100);
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
