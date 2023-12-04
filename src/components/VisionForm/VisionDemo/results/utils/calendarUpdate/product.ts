import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { AllCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";

import {
	calcCustomersPerDay,
	updateCalendarValuesProduct,
} from "../calendarCalculate/calendarCalculate";
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
	product.lifetimeTaxed = lastProduct.lifetimeTaxed;
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
	calendar.lifetimeTaxed = lastCalendarYear.lifetimeTaxed;
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
	let productRevenue = 0;
	let productExpenses = 0;
	let totalRevenue = 0;
	let totalExpenses = 0;

	//
	// Get Product
	//
	const product = genInitProductCalendar(values);
	const prevProduct = prevYear && prevYear.products[values.productId];

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		updateCalendarMonth({ month, prevMonth, values });

		// Calculate yearly total revenue
		productRevenue += month.products[values.productId].totalRevenue;
		productExpenses += month.products[values.productId].totalExpenses;
		totalRevenue += month.totalRevenue;
		totalExpenses += month.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesProduct({
		values,
		unitOfTime: year,
		prevUnitOfTime: prevYear,
		product,
		prevProduct,
		totalRevenue: totalRevenue,
		productRevenue: productRevenue,
		totalExpenses: totalExpenses,
		productExpenses: productExpenses,
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
	let productRevenue = 0;
	let productExpenses = 0;
	let totalRevenue = 0;
	let totalExpenses = 0;

	//
	// Get Product
	//
	const product = genInitProductCalendar(values);
	const prevProduct = prevMonth && prevMonth.products[values.productId];

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		updateCalendarDay({ day, prevDay, values });

		// Calculate monthly total revenue
		productRevenue += day.products[values.productId].totalRevenue;
		productExpenses += day.products[values.productId].totalExpenses;
		totalRevenue += day.totalRevenue;
		totalExpenses += day.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesProduct({
		values,
		unitOfTime: month,
		prevUnitOfTime: prevMonth,
		product,
		prevProduct,
		totalRevenue: totalRevenue,
		productRevenue: productRevenue,
		totalExpenses: totalExpenses,
		productExpenses: productExpenses,
	});
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
	const product = genInitProductCalendar(values);
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

	// Update calendar values
	updateCalendarValuesProduct({
		values,
		unitOfTime: day,
		prevUnitOfTime: prevDay,
		product,
		prevProduct,
		totalRevenue: totalRevenue,
		productRevenue: productRevenue,
		totalExpenses: totalExpenses,
		productExpenses: productExpenses,
	});
};
