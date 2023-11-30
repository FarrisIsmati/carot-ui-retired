import {
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";

import {
	CompanyCalendarValues,
	CompanyCalendarValuesCore,
} from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { ProductCalendar } from "@/types/VisionForm/calendar/company/productCalendar";
import { InvestorCalendar } from "@/types/VisionForm/calendar/investor/investorCalendar";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { round } from "lodash";
import moment from "moment";
import { genInitInvestorCalendar } from "./calendarInitialize";

/**
 * Calculate number of customers that enter a physical location per day
 * @param companyValues
 * @returns
 */
export const calcCustomersPerDay = (
	companyValues: CompanyCalendarValues,
	date: string
) => {
	// Current day number
	const day = moment(date).diff(companyValues.coreValues.startDate, "days");
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
	fixedValues: CompanyCalendarValuesCore;
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

export interface UpdateCalendarValuesProps {
	investors: InvestorCalendarValues[];
	fixedValues: CompanyCalendarValuesCore;
	unitOfTime: DayCalendar | MonthCalendar | YearCalendar;
	prevUnitOfTime: DayCalendar | MonthCalendar | YearCalendar | null;
	product: ProductCalendar;
	prevProduct: ProductCalendar | null;
	productRevenue: number;
	productExpenses: number;
	totalRevenue: number;
	totalExpenses: number;
}

//
// TODO REMOVE THIS
//

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0 UpdateCalendarValuesProps
 */
export const updateCalendarValues = ({
	investors,
	fixedValues,
	unitOfTime,
	prevUnitOfTime,
	product,
	prevProduct,
	productRevenue,
	productExpenses,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesProps) => {
	const { taxRate } = fixedValues;
	//
	// Product
	//
	const productProfit = productRevenue - productExpenses;
	const productTaxes = productProfit * (taxRate / 100);
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
	const companyTaxes = companyProfit * (taxRate / 100);
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
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves); // TODO/FIXME update to only include reserves

	//
	// Investors
	//
	investors.forEach((i) => {
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
	});
};

export interface UpdateCalendarValuesProductProps {
	fixedValues: CompanyCalendarValuesCore;
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
	fixedValues,
	unitOfTime,
	prevUnitOfTime,
	product,
	prevProduct,
	productRevenue,
	productExpenses,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesProductProps) => {
	const { taxRate } = fixedValues;
	//
	// Product
	//
	const productProfit = productRevenue - productExpenses;
	const productTaxes = productProfit * (taxRate / 100);
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
	const companyTaxes = companyProfit * (taxRate / 100);
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
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves); // TODO/FIXME update to only include reserves
};

export interface UpdateCalendarValuesInvestorsProps {
	investor: InvestorCalendarValues;
	companyValuesCore: CompanyCalendarValuesCore;
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
	companyValuesCore,
	unitOfTime,
	prevUnitOfTime,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesInvestorsProps) => {
	const { taxRate } = companyValuesCore;
	const companyProfit = totalRevenue - totalExpenses;
	const companyTaxes = companyProfit * (taxRate / 100);
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
