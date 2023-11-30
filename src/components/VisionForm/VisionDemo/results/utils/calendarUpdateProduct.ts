import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import {
	calcCustomersPerDay,
	updateCalendarValuesProduct,
} from "./calendarCalculate";
import { genInitResultsProduct } from "./calendarInitialize";
import { getPrevDay, getPrevMonth } from "./calendarUpdateHelpers";

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendarProduct = ({
	calendar,
	companyValues,
}: {
	calendar: Calendar;
	companyValues: CompanyCalendarValues;
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];

		updateCalendarYear({ year, prevYear, companyValues });
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);

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
	companyValues,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
}) => {
	let productRevenue = 0;
	let productExpenses = 0;
	let totalRevenue = 0;
	let totalExpenses = 0;

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);
	const prevProduct = prevYear && prevYear.products[companyValues.productId];

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		updateCalendarMonth({ month, prevMonth, companyValues });

		// Calculate yearly total revenue
		productRevenue += month.products[companyValues.productId].totalRevenue;
		productExpenses += month.products[companyValues.productId].totalExpenses;
		totalRevenue += month.totalRevenue;
		totalExpenses += month.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesProduct({
		fixedValues: companyValues.coreValues,
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
	companyValues,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
}) => {
	let productRevenue = 0;
	let productExpenses = 0;
	let totalRevenue = 0;
	let totalExpenses = 0;

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);
	const prevProduct = prevMonth && prevMonth.products[companyValues.productId];

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		updateCalendarDay({ day, prevDay, companyValues });

		// Calculate monthly total revenue
		productRevenue += day.products[companyValues.productId].totalRevenue;
		productExpenses += day.products[companyValues.productId].totalExpenses;
		totalRevenue += day.totalRevenue;
		totalExpenses += day.totalExpenses;
	});

	// Update calendar values
	updateCalendarValuesProduct({
		fixedValues: companyValues.coreValues,
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
	companyValues,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
}) => {
	//
	// Core Values
	//
	const customersPerDay = calcCustomersPerDay(companyValues, day.date);

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);
	const prevProduct = prevDay && prevDay.products[companyValues.productId];

	//
	// Revenue, expense, profit, etc.
	//

	// Revenue
	const productRevenue = customersPerDay * companyValues.retailPrice;
	const totalRevenue = productRevenue + day.totalRevenue;
	// Expenses
	const productExpenses = customersPerDay * companyValues.costToProduce;
	const totalExpenses = productExpenses + day.totalExpenses;

	// Update calendar values
	updateCalendarValuesProduct({
		fixedValues: companyValues.coreValues,
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
