import { CalendarType } from "@/types/VisionForm/calendar";
import { updateInvested, updateReserves } from "./company";

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesCapital = ({
	unitOfTime,
	prevUnitOfTime,
	totalInvested,
}: {
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	totalInvested: number;
}) => {
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, totalInvested);
	// Invested
	updateInvested(unitOfTime, prevUnitOfTime, totalInvested);
};
