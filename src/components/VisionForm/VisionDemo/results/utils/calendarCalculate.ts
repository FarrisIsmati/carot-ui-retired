import {
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";
import { ProductResults } from "@/types/VisionForm/results/product";

export const calcCustomersPerDay = (companyValues: ResultsCompanyValues) => {
	// Hours open per day (only calculating generic not by actual hour)
	const hoursOpen = companyValues.hoursOpenPerDayGeneric;
	// How long on average a patron will spend within the physical store
	const footTrafficTurnoverTime = companyValues.trafficTurnoverTime; // in minutes
	// Maximum amount of people than can be in the store at any given time
	const maxOccupancy = companyValues.maxOccupancy;
	// Average amount of people in the store at any given time (multiply potential max by the curve)
	const averageOccupancy = maxOccupancy * 1; // change to companyValues.curve
	// Number of customers that enter the store per hour
	const visitorsPerHour =
		Math.round(60 / footTrafficTurnoverTime) * averageOccupancy;
	// Number of visitors per day
	const visitorsPerDay = hoursOpen * visitorsPerHour;
	// Number of customers per day
	const customersPerDay =
		visitorsPerDay * (companyValues.customerConversionRate / 100);

	return customersPerDay;
};

/**
 * Updates object with new revenue inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateRevenue = (
	obj: ProductResults | ResultsDay | ResultsMonth | ResultsYear,
	prevObj: ProductResults | ResultsDay | ResultsMonth | ResultsYear | null,
	revenue: number
) => {
	obj.totalRevenue = revenue;
	obj.lifetimeRevenue = prevObj
		? prevObj.lifetimeRevenue + obj.totalRevenue
		: obj.totalRevenue;
};

/**
 * Updates object with new expenses inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateExpense = (
	obj: ProductResults | ResultsDay | ResultsMonth | ResultsYear,
	prevObj: ProductResults | ResultsDay | ResultsMonth | ResultsYear | null,
	expense: number
) => {
	obj.totalExpenses = expense;
	obj.lifetimeExpenses = prevObj
		? prevObj.lifetimeExpenses + obj.totalExpenses
		: obj.totalExpenses;
};
