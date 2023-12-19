import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { AllCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";

import {} from "../calendarCalculate/company";
import { calcCustomersPerDay } from "../calendarCalculate/helpers";
import { updateCalendarValuesProduct } from "../calendarCalculate/product";
import { genInitProductCalendar } from "../calendarInitialize";
import { getPrevDay, getPrevMonth } from "./helpers";

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendarProduct = ({
	calendar,
	values,
}: {
	calendar: Calendar;
	values: AllCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];

		updateCalendarYear({ year, prevYear, values });
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	//
	// Get Product
	//
	const product = genInitProductCalendar(values);

	//
	// Product
	//
	const lastProduct = lastCalendarYear.products[product.id];

	// Revenue
	product.lifetimeRevenue = lastProduct.lifetimeRevenue;
	// Expenses
	product.lifetimeExpenses = lastProduct.lifetimeExpenses;
	// Profit
	product.lifetimeProfit = lastProduct.lifetimeProfit;
	// Taxes
	product.lifetimeTaxes = lastProduct.lifetimeTaxes;
	calendar.products[product.id] = product;

	//
	// Company
	//
	// Revenue
	calendar.lifetimeRevenue = lastCalendarYear.lifetimeRevenue;
	// Expenses
	calendar.lifetimeExpenses = lastCalendarYear.lifetimeExpenses;
	// Profit
	calendar.lifetimeProfit = lastCalendarYear.lifetimeProfit;
	// Taxes
	calendar.lifetimeTaxes = lastCalendarYear.lifetimeTaxes;
	// Reserves
	calendar.lifetimeReserves = lastCalendarYear.lifetimeReserves;
};

const updateCalendarYear = ({
	year,
	prevYear,
	values,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	values: AllCalendarValues;
}) => {
	let totalRevenue = 0;
	let totalExpenses = 0;
	let totalProfit = 0;
	let totalReserves = 0;
	let productRevenue = 0;
	let productExpenses = 0;
	let productProfit = 0;

	//
	// Get Product
	//
	if (!(values.productId in year.products)) {
		year.products[values.productId] = genInitProductCalendar(values);
	}
	const product = year.products[values.productId];
	const prevProduct = prevYear && prevYear.products[values.productId];

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		const {
			monthTotalRevenue,
			monthTotalExpenses,
			monthTotalProfit,
			monthTotalReserves,
			monthProductRevenue,
			monthProductExpenses,
			monthProductProfit,
		} = updateCalendarMonth({ month, prevMonth, values });

		// Calculate yearly total revenue
		totalRevenue += monthTotalRevenue;
		totalExpenses += monthTotalExpenses;
		totalProfit += monthTotalProfit;
		totalReserves += monthTotalReserves;
		productRevenue += monthProductRevenue;
		productExpenses += monthProductExpenses;
		productProfit += monthProductProfit;
	});

	// Update calendar values
	updateCalendarValuesProduct({
		values,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		product,
		prevProduct,
		productRevenue,
		productExpenses,
		productProfit,
	});
};

const updateCalendarMonth = ({
	month,
	prevMonth,
	values,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	values: AllCalendarValues;
}) => {
	let totalRevenue = 0;
	let totalExpenses = 0;
	let totalProfit = 0;
	let totalReserves = 0;
	let productRevenue = 0;
	let productExpenses = 0;
	let productProfit = 0;

	//
	// Get Product
	//
	if (!(values.productId in month.products)) {
		month.products[values.productId] = genInitProductCalendar(values);
	}
	const product = month.products[values.productId];
	const prevProduct = prevMonth && prevMonth.products[values.productId];

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		const {
			dayTotalRevenue,
			dayTotalExpenses,
			dayTotalProfit,
			dayTotalReserves,
			dayProductRevenue,
			dayProductExpenses,
			dayProductProfit,
		} = updateCalendarDay({ day, prevDay, values });

		// Calculate monthly total revenue
		totalRevenue += dayTotalRevenue;
		totalExpenses += dayTotalExpenses;
		totalProfit += dayTotalProfit;
		totalReserves += dayTotalReserves;
		productRevenue += dayProductRevenue;
		productExpenses += dayProductExpenses;
		productProfit += dayProductProfit;
	});

	// Update calendar values
	updateCalendarValuesProduct({
		values,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		product,
		prevProduct,
		productRevenue,
		productExpenses,
		productProfit,
	});

	return {
		monthProductRevenue: productRevenue,
		monthTotalRevenue: totalRevenue,
		monthProductExpenses: productExpenses,
		monthTotalExpenses: totalExpenses,
		monthProductProfit: productProfit,
		monthTotalProfit: totalProfit,
		monthTotalReserves: totalReserves,
	};
};

const updateCalendarDay = ({
	day,
	prevDay,
	values,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	values: AllCalendarValues;
}) => {
	//
	// Core Values
	//
	const customersPerDay = calcCustomersPerDay(values, day.date);

	//
	// Get Product
	//
	if (!(values.productId in day.products)) {
		day.products[values.productId] = genInitProductCalendar(values);
	}
	const product = day.products[values.productId];
	const prevProduct = prevDay && prevDay.products[values.productId];

	//
	// Revenue, expense, profit, etc.
	//

	// Revenue
	const productRevenue = customersPerDay * values.retailPrice;
	const totalRevenue = productRevenue + day.totalRevenue;

	// Expenses
	const productExpenses = customersPerDay * values.costToProduce;
	const totalExpenses = productExpenses + day.totalExpenses;
	// Profit
	const productProfit = productRevenue - productExpenses;
	const totalProfit = totalRevenue - totalExpenses;
	// Reserves
	const totalReserves = totalProfit;

	// Update calendar values
	updateCalendarValuesProduct({
		values,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		product,
		prevProduct,
		productRevenue,
		productExpenses,
		productProfit,
	});

	return {
		dayProductRevenue: productRevenue,
		dayTotalRevenue: totalRevenue,
		dayProductExpenses: productExpenses,
		dayTotalExpenses: totalExpenses,
		dayProductProfit: productProfit,
		dayTotalProfit: totalProfit,
		dayTotalReserves: totalReserves,
	};
};
