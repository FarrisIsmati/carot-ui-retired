import { round } from "lodash";

import { InvestorCalendar } from "@/types/VisionForm/calendar/investor/investorCalendar";

/**
 * Updates investor object with new company reserves inplace
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updateEarned = (
	obj: InvestorCalendar,
	prevObj: InvestorCalendar | null,
	earned: number
) => {
	obj.totalEarned += earned;
	obj.lifetimeEarned = round(
		prevObj ? prevObj.lifetimeEarned + obj.totalEarned : obj.totalEarned,
		2
	);
};

/**
 * Updates investor object with percentage of initial investment recouped
 * @param obj
 * @param prevObj
 * @param revenue
 */
export const updatePercentageOfInitialInvestmentRecouped = (
	obj: InvestorCalendar,
	prevObj: InvestorCalendar | null,
	percent: number
) => {
	obj.totalPercentageInitialInvestmentRecouped += percent;
	obj.lifetimePercentageInitialInvestmentRecouped = round(
		prevObj
			? prevObj.lifetimePercentageInitialInvestmentRecouped +
					obj.totalPercentageInitialInvestmentRecouped
			: obj.totalPercentageInitialInvestmentRecouped,
		4
	);
};

export interface UpdateCalendarValuesInvestorsProps {
	investor: InvestorCalendar;
	prevInvestor: InvestorCalendar | null;
	earned: number;
	percentageInvestmentRecouped: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesInvestor = ({
	investor,
	prevInvestor,
	earned,
	percentageInvestmentRecouped,
}: UpdateCalendarValuesInvestorsProps) => {
	// Earned
	updateEarned(investor, prevInvestor, earned);
	// Percentage of initial investment recouped
	updatePercentageOfInitialInvestmentRecouped(
		investor,
		prevInvestor,
		percentageInvestmentRecouped
	);
};
