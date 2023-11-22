import {
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";
import { ProductResults } from "@/types/VisionForm/results/product";
import { round } from "lodash";
import moment from "moment";

/**
 * Calculate number of customers that enter a physical location per day
 * @param companyValues
 * @returns
 */
export const calcCustomersPerDay = (
	companyValues: ResultsCompanyValues,
	date: string
) => {
	// Current day number
	const day = moment(date).diff(companyValues.startDate, "days");
	// Hours open per day (only calculating generic not by actual hour)
	const hoursOpen = companyValues.hoursOpenPerDayGeneric;
	// How long on average a patron will spend within the physical store
	const footTrafficTurnoverTime = companyValues.trafficTurnoverTime; // in minutes
	// Maximum amount of people than can be in the store at any given time
	const maxOccupancy = companyValues.maxOccupancy;
	// Average amount of people in the store at any given time (multiply potential max by the curve)
	const averageOccupancy = round(
		maxOccupancy *
			(companyValues.leaseFootTrafficCurveDataPoints !== undefined
				? companyValues.leaseFootTrafficCurveDataPoints[day].uv / 100 // must be divided by 100 to get %
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
		? round(prevObj.lifetimeRevenue + obj.totalRevenue)
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
		? round(prevObj.lifetimeExpenses + obj.totalExpenses, 2)
		: obj.totalExpenses;
};

export interface UpdateCalendarValuesProps {
	unitOfTime: ResultsDay | ResultsMonth | ResultsYear;
	prevUnitOfTime: ResultsDay | ResultsMonth | ResultsYear | null;
	product: ProductResults;
	prevProduct: ProductResults | null;
	productRevenue: number;
	productExpenses: number;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0 UpdateCalendarValuesProps
 */
export const updateCalendarValues = ({
	unitOfTime,
	prevUnitOfTime,
	product,
	prevProduct,
	productRevenue,
	productExpenses,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesProps) => {
	//
	// Product
	//

	// Revenue
	updateRevenue(product, prevProduct, productRevenue);
	// Expense
	updateExpense(product, prevProduct, productExpenses);
	// Add product
	unitOfTime.products[product.id] = product;

	//
	// Company
	//

	// Revenue
	updateRevenue(unitOfTime, prevUnitOfTime, totalRevenue);
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
};
