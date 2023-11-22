import {
	ResultsCalendar,
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import { ResultsCompanyValues } from "@/types/VisionForm/results/company";
import {
	calcCustomersPerDay,
	updateExpense,
	updateRevenue,
} from "./calendarCalculate";
import { genInitResultsProduct } from "./calendarInitialize";

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

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);

	//
	// Product
	//

	// TODO

	//
	// Company
	//

	calendar.lifetimeRevenue =
		calendar.years[calendar.years.length - 1].lifetimeRevenue;
	calendar.lifetimeExpenses =
		calendar.years[calendar.years.length - 1].lifetimeExpenses;

	// TODO
};

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

const updateCalendarYear = (
	year: ResultsYear,
	prevYear: ResultsYear | null,
	companyValues: ResultsCompanyValues
) => {
	let revenue = 0;
	let expense = 0;

	year.months.forEach((month, i) => {
		const prevMonth = getPrevMonth({ year, prevYear, month, i });

		updateCalendarMonth(month, prevMonth, companyValues);

		// Calculate annual total revenue
		revenue += month.totalRevenue;
		// Calculate monthly total expenses
		expense += month.totalExpenses;
	});

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);
	const prevProduct = prevYear && prevYear.products[companyValues.productId];

	//
	// Product
	//

	// Revenue
	updateRevenue(product, prevProduct, revenue);
	// Expense
	updateExpense(product, prevProduct, expense);
	// Add product
	year.products[product.id] = product;

	//
	// Company
	//

	// Revenue
	updateRevenue(year, prevYear, revenue);
	// Expense
	updateExpense(year, prevYear, expense);
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

const updateCalendarMonth = (
	month: ResultsMonth,
	prevMonth: ResultsMonth | null,
	companyValues: ResultsCompanyValues
) => {
	let revenue = 0;
	let expense = 0;

	month.days.forEach((day, i) => {
		const prevDay = getPrevDay({ month, prevMonth, day, i });

		updateCalendarDay(day, prevDay, companyValues);

		// Calculate monthly total revenue
		revenue += day.totalRevenue;
		// Calculate monthly total expenses
		expense += day.totalExpenses;
	});

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);
	const prevProduct = prevMonth && prevMonth.products[companyValues.productId];

	//
	// Product
	//

	// Revenue
	updateRevenue(product, prevProduct, revenue);
	// Expense
	updateExpense(product, prevProduct, expense);
	// Add product
	month.products[product.id] = product;

	//
	// Company
	//

	// Revenue
	updateRevenue(month, prevMonth, revenue);
	// Expense
	updateExpense(month, prevMonth, expense);
};

const updateCalendarDay = (
	day: ResultsDay,
	prevDay: ResultsDay | null,
	companyValues: ResultsCompanyValues
) => {
	//
	// Core Values
	//
	const customersPerDay = calcCustomersPerDay(companyValues);

	//
	// Get Product
	//
	const product = genInitResultsProduct(companyValues);
	const prevProduct = prevDay && prevDay.products[companyValues.productId];

	//
	// Revenue, expense, profit, etc.
	//
	const revenue = customersPerDay * companyValues.retailPrice;
	const expense = customersPerDay * companyValues.costToProduce;

	//
	// Product
	//

	// Revenue
	updateRevenue(product, prevProduct, revenue);
	// Expense
	updateExpense(product, prevProduct, expense);
	// Add product
	day.products[product.id] = product;

	//
	// Company
	//

	// Revenue
	updateRevenue(day, prevDay, revenue);
	// Expense
	updateExpense(day, prevDay, expense);
};
