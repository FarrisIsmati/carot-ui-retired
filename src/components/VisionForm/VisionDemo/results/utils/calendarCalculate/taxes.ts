import { CalendarType } from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { ProductCalendar } from "@/types/VisionForm/calendar/product/productCalendar";
import { round } from "lodash";
import { updateReserves } from "./company";

/**
 * Updates object with new profits inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateTaxes = (
	obj: ProductCalendar | CalendarType,
	prevObj: ProductCalendar | CalendarType | null,
	totalTaxes: number
) => {
	obj.totalTaxes = round(obj.totalTaxes + totalTaxes, 2);
	obj.lifetimeTaxes = round(
		prevObj ? prevObj.lifetimeTaxes + obj.totalTaxes : obj.totalTaxes,
		2
	);
};

export interface UpdateCalendarValuesTaxesProps {
	date?: string;
	companyValues: CompanyCalendarValues;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	totalTaxes: number;
	totalReserves: number;
}

/**
 * Update taxes and reserve
 * @param param0
 */
export const updateCalendarValuesTaxes = ({
	unitOfTime,
	prevUnitOfTime,
	totalTaxes,
	totalReserves,
}: UpdateCalendarValuesTaxesProps) => {
	//
	// Company
	//
	// Taxes
	updateTaxes(unitOfTime, prevUnitOfTime, totalTaxes);
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, totalReserves);
};
