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
	totalRevenue: number;
	totalExpenses: number;
	totalProfit: number;
	totalReserves: number;
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
	totalRevenue,
	totalExpenses,
	totalProfit,
	totalReserves,
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
	updateRevenue(unitOfTime, prevUnitOfTime, totalRevenue);
	// Expense
	updateExpense(unitOfTime, prevUnitOfTime, totalExpenses);
	// Profit
	updateProfit(unitOfTime, prevUnitOfTime, totalProfit);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, totalReserves);
};
