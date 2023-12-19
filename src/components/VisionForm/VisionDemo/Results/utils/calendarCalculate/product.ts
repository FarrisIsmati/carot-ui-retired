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
	productProfit: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesProduct = ({
	unitOfTime,
	prevUnitOfTime,
	product,
	prevProduct,
	productRevenue,
	productExpenses,
	productProfit,
}: UpdateCalendarValuesProductProps) => {
	//
	// Product
	//
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
	// Revenue
	updateRevenue(unitOfTime, prevUnitOfTime, productRevenue);
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, productExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, productProfit);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, productProfit);
};
