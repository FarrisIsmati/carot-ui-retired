import { updateReserves } from "./company";
import { UpdateCalendarValuesInvestorsProps } from "./investor";

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesCapital = ({
	unitOfTime,
	prevUnitOfTime,
	totalReserves,
}: Omit<
	UpdateCalendarValuesInvestorsProps,
	"totalExpenses" | "totalRevenue" | "companyValues" | "investor"
> & { totalReserves: number }) => {
	// Reserves
	updateReserves(unitOfTime, prevUnitOfTime, totalReserves);
};
