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
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
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
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
	profit: number
) => {
	obj.totalProfit = profit;
	obj.lifetimeProfit = prevObj
		? round(prevObj.lifetimeProfit + obj.totalProfit, 2)
		: obj.totalProfit;
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
	obj.totalReserves = obj.totalReserves + reserves;
	obj.lifetimeReserves = prevObj
		? round(prevObj.lifetimeReserves + obj.totalReserves, 2)
		: obj.totalReserves;
};
