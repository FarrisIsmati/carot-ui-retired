import { DayCalendar } from "@/types/VisionForm/calendar";
import moment from "moment";
import { updateReserves } from "./company";
import { UpdateCalendarValuesInvestorsProps } from "./investor";

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesCapital = ({
	investor,
	companyValues,
	unitOfTime,
	prevUnitOfTime,
	totalReserves,
}: Omit<
	UpdateCalendarValuesInvestorsProps,
	"totalExpenses" | "totalRevenue"
> & { totalReserves: number }) => {
	//
	// Initial Values
	// For anything that needs to be run once do it in this if block (here it's only initial construction cost)
	// If date is first date
	if (
		(unitOfTime as DayCalendar).date &&
		moment((unitOfTime as DayCalendar).date).isSame(companyValues.startDate)
	) {
		totalReserves = totalReserves + investor.initialInvestment;
	}

	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, totalReserves);
};
