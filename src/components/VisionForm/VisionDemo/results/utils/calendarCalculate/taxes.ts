import { CalendarType } from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { ProductCalendar } from "@/types/VisionForm/calendar/product/productCalendar";
import { round } from "lodash";
import { updateReserves } from "./company";
import { calculateTaxes } from "./helpers";

/**
 * Updates object with new profits inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateTaxes = (
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
	taxed: number
) => {
	obj.totalTaxed = taxed;
	obj.lifetimeTaxed = prevObj
		? round(prevObj.lifetimeTaxed + obj.totalTaxed, 2)
		: obj.totalTaxed;
};

export interface UpdateCalendarValuesTaxesProps {
	date?: string;
	companyValues: CompanyCalendarValues;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	totalYearProfit: number;
}

/**
 * Update taxes and reserve
 * @param param0
 */
export const updateCalendarValuesTaxes = ({
	companyValues,
	unitOfTime,
	prevUnitOfTime,
	totalYearProfit,
}: UpdateCalendarValuesTaxesProps) => {
	const { taxRate } = companyValues;

	//
	// Company
	//
	const companyTaxes = calculateTaxes(totalYearProfit, taxRate);
	const companyReserves = totalYearProfit - companyTaxes;
	// Taxes
	updateTaxes(unitOfTime, prevUnitOfTime, companyTaxes);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, companyReserves);
};
