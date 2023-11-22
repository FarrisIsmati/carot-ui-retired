import {
	ResultsCalendar,
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";
import { calcCustomersPerDay, updateCalendarValues } from "./calendarCalculate";
import { genInitResultsProduct } from "./calendarInitialize";

//
// Calendar traversal helper methods
//

const getPrevMonth = ({
	year,
	prevYear,
	month,
	i,
}: {
	year: ResultsYear;
	prevYear: ResultsYear | null;
	month: ResultsMonth;
	i: number;
}) => {
	// If there is a prev year and your on first month of year
	if (!!prevYear && year.months[0].month === month.month) {
		return prevYear.months[prevYear.months.length - 1];
	}

	// If no previous year
	if (!!!prevYear && year.months[0].month === month.month) {
		return null;
	}

	// If not first month of year
	if (year.months[0].month !== month.month) {
		return year.months[i - 1];
	}

	return null;
};

const getPrevDay = ({
	month,
	prevMonth,
	day,
	i,
}: {
	month: ResultsMonth;
	prevMonth: ResultsMonth | null;
	day: ResultsDay;
	i: number;
}) => {
	// If there is a prev month and your on first day of year
	if (!!prevMonth && month.days[0].date === day.date) {
		return prevMonth.days[prevMonth.days.length - 1];
	}

	// If no previous month
	if (!!!prevMonth && month.days[0].date === day.date) {
		return null;
	}

	// If not first day of year
	if (month.days[0].date !== day.date) {
		return month.days[i - 1];
	}

	return null;
};

//
// Functions to loop through entire calendar
//

// Function to loop through calendar
export const updateCalendar = (
	calendar: ResultsCalendar,
	companyValues: ResultsCompanyValues
) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];

		updateCalendarYear(year, prevYear, companyValues);
	});

	const lastCalendarYear = calendar.years[calendar.years.length - 1];

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);

	//
	// Product
	//
	product.lifetimeRevenue =
		lastCalendarYear.products[product.id].lifetimeRevenue;
	product.lifetimeExpenses =
		lastCalendarYear.products[product.id].lifetimeExpenses;
	calendar.products[product.id] = product;

	//
	// Company
	//
	calendar.lifetimeRevenue = lastCalendarYear.lifetimeRevenue;
	calendar.lifetimeExpenses = lastCalendarYear.lifetimeExpenses;
};

const updateCalendarYear = (
	year: ResultsYear,
	prevYear: ResultsYear | null,
	companyValues: ResultsCompanyValues
) => {
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

		updateCalendarMonth(month, prevMonth, companyValues);

		// Calculate yearly total revenue
		productRevenue += month.products[companyValues.productId].totalRevenue;
		productExpenses += month.products[companyValues.productId].totalExpenses;
		totalRevenue += month.totalRevenue;
		totalExpenses += month.totalExpenses;
	});

	// Update calendar values
	updateCalendarValues({
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

const updateCalendarMonth = (
	month: ResultsMonth,
	prevMonth: ResultsMonth | null,
	companyValues: ResultsCompanyValues
) => {
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

		updateCalendarDay(day, prevDay, companyValues);

		// Calculate monthly total revenue
		productRevenue += day.products[companyValues.productId].totalRevenue;
		productExpenses += day.products[companyValues.productId].totalExpenses;
		totalRevenue += day.totalRevenue;
		totalExpenses += day.totalExpenses;
	});

	// Update calendar values
	updateCalendarValues({
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

const updateCalendarDay = (
	day: ResultsDay,
	prevDay: ResultsDay | null,
	companyValues: ResultsCompanyValues
) => {
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
	const productRevenue = customersPerDay * companyValues.retailPrice;
	const totalRevenue = productRevenue + day.totalRevenue;
	const productExpenses = customersPerDay * companyValues.costToProduce;
	const totalExpenses = productExpenses + day.totalExpenses;

	// Update calendar values
	updateCalendarValues({
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
