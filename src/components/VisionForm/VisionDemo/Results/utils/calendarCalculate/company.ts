import { CalendarType } from "@/types/VisionForm/calendar";

import { ProductCalendar } from "@/types/VisionForm/calendar/product/productCalendar";
import { round } from "lodash";

/**
 * Updates object with new revenue inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateRevenue = (
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
	revenue: number
) => {
	obj.totalRevenue = round(obj.totalRevenue + revenue, 2);
	obj.lifetimeRevenue = round(
		prevObj ? prevObj.lifetimeRevenue + obj.totalRevenue : obj.totalRevenue,
		2
	);
};

/**
 * Updates object with new expenses inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateExpense = (
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
	expense: number
) => {
	obj.totalExpenses = round(obj.totalExpenses + expense, 2);
	obj.lifetimeExpenses = round(
		prevObj ? prevObj.lifetimeExpenses + obj.totalExpenses : obj.totalExpenses,
		2
	);
};

/**
 * Updates object with new profits inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateProfit = (
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
	profit: number
) => {
	obj.totalProfit = round(obj.totalProfit + profit, 2);
	obj.lifetimeProfit = round(
		prevObj ? prevObj.lifetimeProfit + obj.totalProfit : obj.totalProfit,
		2
	);
};

/**
 * Updates object with new company reserves inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateReserves = (
	obj: CalendarType,
	prevObj: CalendarType | null,
	reserves: number
) => {
	obj.totalReserves = round(obj.totalReserves + reserves, 2);
	obj.lifetimeReserves = round(
		prevObj ? prevObj.lifetimeReserves + obj.totalReserves : obj.totalReserves,
		2
	);
};

/**
 * Updates object with company cash inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateInvested = (
	obj: CalendarType,
	prevObj: CalendarType | null,
	invested: number
) => {
	obj.totalInvested = round(obj.totalInvested + invested, 2);
	obj.lifetimeInvested = round(
		prevObj ? prevObj.lifetimeInvested + obj.totalInvested : obj.totalInvested,
		2
	);
};
