import { CalendarType } from "@/types/VisionForm/calendar";
import { AllCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { ProductCalendar } from "@/types/VisionForm/calendar/product/productCalendar";
import {
	updateExpense,
	updateProfit,
	updateReserves,
	updateRevenue,
} from "./company";

export interface UpdateCalendarValuesProductProps {
	values: AllCalendarValues;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	product: ProductCalendar;
	prevProduct: ProductCalendar | null;
	productRevenue: number;
	productExpenses: number;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
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
	// Revenue
	updateRevenue(product, prevProduct, productRevenue);
	// Expense
	updateExpense(product, prevProduct, productExpenses);
	// Profit
	updateProfit(product, prevProduct, productProfit);
	// Add product
	unitOfTime.products[product.id] = product;

	//
	// Company
	//
	const companyProfit = totalRevenue - totalExpenses;
	const companyReserves = companyProfit;
	// Revenue
	updateRevenue(unitOfTime, prevUnitOfTime, totalRevenue);
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, companyProfit);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves);
};
