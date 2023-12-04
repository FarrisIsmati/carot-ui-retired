import {
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";

import {
	AllCalendarValues,
	CompanyCalendarValues,
} from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendar } from "@/types/VisionForm/calendar/investor/investorCalendar";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { LocationLeaseCalendar } from "@/types/VisionForm/calendar/location/leaseCalendar";
import { ProductCalendar } from "@/types/VisionForm/calendar/product/productCalendar";
import { round } from "lodash";
import moment from "moment";
import { genInitInvestorCalendar } from "../calendarInitialize";
import { calculateTaxes } from "./helpers";
import { updateLeasePaid } from "./lease";

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

/**
 * Updates object with new revenue inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateRevenue = (
	obj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar,
	prevObj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar | null,
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
	obj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar,
	prevObj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar | null,
	expense: number
) => {
	obj.totalExpenses = expense;
	obj.lifetimeExpenses = prevObj
		? round(prevObj.lifetimeExpenses + obj.totalExpenses, 2)
		: obj.totalExpenses;
};

/**
 * Updates object with new profits inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateProfit = (
	obj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar,
	prevObj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar | null,
	profit: number
) => {
	obj.totalProfit = profit;
	obj.lifetimeProfit = prevObj
		? round(prevObj.lifetimeProfit + obj.totalProfit, 2)
		: obj.totalProfit;
};

/**
 * Updates object with new profits inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateTaxes = (
	obj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar,
	prevObj: ProductCalendar | DayCalendar | MonthCalendar | YearCalendar | null,
	taxed: number
) => {
	obj.totalTaxed = taxed;
	obj.lifetimeTaxed = prevObj
		? round(prevObj.lifetimeTaxed + obj.totalTaxed, 2)
		: obj.totalTaxed;
};

/**
 * Updates object with new company reserves inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateReserves = (
	obj: DayCalendar | MonthCalendar | YearCalendar,
	prevObj: DayCalendar | MonthCalendar | YearCalendar | null,
	reserves: number
) => {
	obj.totalReserves = reserves;
	obj.lifetimeReserves = prevObj
		? round(prevObj.lifetimeReserves + obj.totalReserves, 2)
		: obj.totalReserves;
};

export interface UpdateCalendarValuesProps {
	companyValues: CompanyCalendarValues;
	unitOfTime: DayCalendar | MonthCalendar | YearCalendar;
	prevUnitOfTime: DayCalendar | MonthCalendar | YearCalendar | null;
	product: ProductCalendar;
	prevProduct: ProductCalendar | null;
	productRevenue: number;
	productExpenses: number;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Updates investor object with new company reserves inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateEarned = (
	obj: InvestorCalendar,
	prevObj: InvestorCalendar | null,
	earned: number
) => {
	obj.totalEarned = earned;
	obj.lifetimeEarned = prevObj
		? round(prevObj.lifetimeEarned + obj.totalEarned, 2)
		: obj.totalEarned;
};

/**
 * Updates investor object with percentage of initial investment recouped
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updatePercentageOfInitialInvestmentRecouped = (
	obj: InvestorCalendar,
	prevObj: InvestorCalendar | null,
	percent: number
) => {
	obj.totalPercentageInitialInvestmentRecouped = percent;
	obj.lifetimePercentageInitialInvestmentRecouped = prevObj
		? round(
				prevObj.lifetimePercentageInitialInvestmentRecouped +
					obj.totalPercentageInitialInvestmentRecouped,
				2
		  )
		: obj.totalPercentageInitialInvestmentRecouped;
};

export interface UpdateCalendarValuesProductProps {
	values: AllCalendarValues;
	unitOfTime: DayCalendar | MonthCalendar | YearCalendar;
	prevUnitOfTime: DayCalendar | MonthCalendar | YearCalendar | null;
	product: ProductCalendar;
	prevProduct: ProductCalendar | null;
	productRevenue: number;
	productExpenses: number;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0 UpdateCalendarValuesProps
 */
export const updateCalendarValuesProduct = ({
	values,
	unitOfTime,
	prevUnitOfTime,
	product,
	prevProduct,
	productRevenue,
	productExpenses,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesProductProps) => {
	const { taxRate } = values;
	//
	// Product
	//
	const productProfit = productRevenue - productExpenses;
	const productTaxes = calculateTaxes(productProfit, taxRate);
	// Revenue
	updateRevenue(product, prevProduct, productRevenue);
	// Expense
	updateExpense(product, prevProduct, productExpenses);
	// Profit
	updateProfit(product, prevProduct, productProfit);
	// Taxes
	updateTaxes(product, prevProduct, productTaxes);
	// Add product
	unitOfTime.products[product.id] = product;

	//
	// Company
	//
	const companyProfit = totalRevenue - totalExpenses;
	const companyTaxes = calculateTaxes(companyProfit, taxRate);
	const companyReserves = companyProfit - companyTaxes;
	// Revenue
	updateRevenue(unitOfTime, prevUnitOfTime, totalRevenue);
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, companyProfit);
	// Taxes
	updateTaxes(unitOfTime, prevUnitOfTime, companyTaxes); // TODO/FIXME subtract all tax deductors
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves);
};

export interface UpdateCalendarValuesInvestorsProps {
	investor: InvestorCalendarValues;
	companyValues: CompanyCalendarValues;
	unitOfTime: DayCalendar | MonthCalendar | YearCalendar;
	prevUnitOfTime: DayCalendar | MonthCalendar | YearCalendar | null;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0 UpdateCalendarValuesProps
 */
export const updateCalendarValuesInvestor = ({
	investor: i,
	companyValues,
	unitOfTime,
	prevUnitOfTime,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesInvestorsProps) => {
	const { taxRate } = companyValues;
	const companyProfit = totalRevenue - totalExpenses;
	const companyTaxes = calculateTaxes(companyProfit, taxRate);
	const companyReserves = companyProfit - companyTaxes;

	//
	// Investor
	//
	if (!(i.id in unitOfTime.investors)) {
		unitOfTime.investors[i.id] = genInitInvestorCalendar(i);
	}
	const investor = unitOfTime.investors[i.id];
	const prevInvestor = prevUnitOfTime?.investors[i.id] ?? null;

	const equity = round(100 / i.equity, 2);
	const earned = round(companyReserves * equity, 2);
	const percentageInvestmentRecouped = round(
		100 * (earned / investor.initialInvestment),
		4
	);

	// Earned
	updateEarned(investor, prevInvestor, earned);
	// Percentage of initial investment recouped
	updatePercentageOfInitialInvestmentRecouped(
		investor,
		prevInvestor,
		percentageInvestmentRecouped
	);
};

export type CalendarType = DayCalendar | MonthCalendar | YearCalendar;

export interface UpdateCalendarValuesLeaseProps {
	date?: string;
	companyValues: CompanyCalendarValues;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	lease: LocationLeaseCalendar;
	prevLease: LocationLeaseCalendar | null;
	leaseCost: number;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, lease for any unit of time (day, month, year)
 * @param param0 UpdateCalendarValuesProps
 */
export const updateCalendarValuesLease = <T>({
	companyValues,
	unitOfTime,
	prevUnitOfTime,
	lease,
	prevLease,
	leaseCost,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesLeaseProps) => {
	const { taxRate } = companyValues;
	//
	// Initial Values
	// For anything that needs to be run once do it in this if block (here it's only initial construction cost)
	// If date is first date
	if (
		(unitOfTime as DayCalendar).date &&
		moment((unitOfTime as DayCalendar).date).isSame(companyValues.startDate)
	) {
		totalExpenses = totalExpenses + lease.initialConstructionCost;
	}

	//
	// Lease
	//
	// Total amount of lease paid
	updateLeasePaid(lease, prevLease, leaseCost);
	// Add product
	unitOfTime.leases[lease.id] = lease;

	//
	// Company
	//
	const companyProfit = totalRevenue - totalExpenses;
	const companyTaxes = calculateTaxes(companyProfit, taxRate);
	const companyReserves = companyProfit - companyTaxes;
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, companyProfit);
	// Taxes
	updateTaxes(unitOfTime, prevUnitOfTime, companyTaxes);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves);
};
