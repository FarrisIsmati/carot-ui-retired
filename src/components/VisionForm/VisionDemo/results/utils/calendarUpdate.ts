import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { cloneDeep } from "lodash";
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
	year: YearCalendar;
	prevYear: YearCalendar | null;
	month: MonthCalendar;
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
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	day: DayCalendar;
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
export const updateCalendar = ({
	calendar,
	companyValues,
	investorValues,
}: {
	calendar: Calendar;
	companyValues: CompanyCalendarValues;
	investorValues: InvestorCalendarValues[];
}) => {
	calendar.years.forEach((year, i) => {
		const prevYear =
			calendar.years[0].year === year.year ? null : calendar.years[i - 1];

		updateCalendarYear({ year, prevYear, companyValues, investorValues });
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

	//
	// Investor
	//
	Object.entries(lastCalendarYear.investors).forEach(([k, v]) => {
		calendar.investors[k] = cloneDeep(v);
		calendar.investors[k].totalEarned = 0;
		calendar.investors[k].totalPercentageInitialInvestmentRecouped = 0;
	});
};

const updateCalendarYear = ({
	year,
	prevYear,
	companyValues,
	investorValues,
}: {
	year: YearCalendar;
	prevYear: YearCalendar | null;
	companyValues: CompanyCalendarValues;
	investorValues: InvestorCalendarValues[];
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

		updateCalendarMonth({ month, prevMonth, companyValues, investorValues });

		// Calculate yearly total revenue
		productRevenue += month.products[companyValues.productId].totalRevenue;
		productExpenses += month.products[companyValues.productId].totalExpenses;
		totalRevenue += month.totalRevenue;
		totalExpenses += month.totalExpenses;
	});

	// Update calendar values
	updateCalendarValues({
		investors: investorValues,
		fixedValues: companyValues.fixedCompanyValues,
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
	investorValues,
}: {
	month: MonthCalendar;
	prevMonth: MonthCalendar | null;
	companyValues: CompanyCalendarValues;
	investorValues: InvestorCalendarValues[];
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

		updateCalendarDay({ day, prevDay, companyValues, investorValues });

		// Calculate monthly total revenue
		productRevenue += day.products[companyValues.productId].totalRevenue;
		productExpenses += day.products[companyValues.productId].totalExpenses;
		totalRevenue += day.totalRevenue;
		totalExpenses += day.totalExpenses;
	});

	// Update calendar values
	updateCalendarValues({
		investors: investorValues,
		fixedValues: companyValues.fixedCompanyValues,
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
	investorValues,
}: {
	day: DayCalendar;
	prevDay: DayCalendar | null;
	companyValues: CompanyCalendarValues;
	investorValues: InvestorCalendarValues[];
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
	updateCalendarValues({
		investors: investorValues,
		fixedValues: companyValues.fixedCompanyValues,
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
