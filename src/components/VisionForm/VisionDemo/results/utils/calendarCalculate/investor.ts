import { CalendarType } from "@/types/VisionForm/calendar";
import { CompanyCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { round } from "lodash";
import { genInitInvestorCalendar } from "../calendarInitialize";

import { InvestorCalendar } from "@/types/VisionForm/calendar/investor/investorCalendar";
import { calculateTaxes } from "./helpers";

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
	obj.totalEarned = earned;
	obj.lifetimeEarned = prevObj
		? round(prevObj.lifetimeEarned + obj.totalEarned, 2)
		: obj.totalEarned;
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
	obj.totalPercentageInitialInvestmentRecouped = percent;
	obj.lifetimePercentageInitialInvestmentRecouped = prevObj
		? round(
				prevObj.lifetimePercentageInitialInvestmentRecouped +
					obj.totalPercentageInitialInvestmentRecouped,
				2
		  )
		: obj.totalPercentageInitialInvestmentRecouped;
};

export interface UpdateCalendarValuesInvestorsProps {
	investor: InvestorCalendarValues;
	companyValues: CompanyCalendarValues;
	unitOfTime: CalendarType;
	prevUnitOfTime: CalendarType | null;
	totalRevenue: number;
	totalExpenses: number;
}

/**
 * Update revenue, expenses, product for any unit of time (day, month, year)
 * @param param0
 */
export const updateCalendarValuesInvestor = ({
	investor: i,
	companyValues,
	unitOfTime,
	prevUnitOfTime,
	totalRevenue,
	totalExpenses,
}: UpdateCalendarValuesInvestorsProps) => {
	const { taxRate } = companyValues;
	const companyProfit = totalRevenue - totalExpenses;
	const companyTaxes = calculateTaxes(companyProfit, taxRate);
	const companyReserves = companyProfit - companyTaxes;

	//
	// Investor
	//
	if (!(i.id in unitOfTime.investors)) {
		unitOfTime.investors[i.id] = genInitInvestorCalendar(i);
	}
	const investor = unitOfTime.investors[i.id];
	const prevInvestor = prevUnitOfTime?.investors[i.id] ?? null;

	const equity = round(100 / i.equity, 2);
	const earned = round(companyReserves * equity, 2);
	const percentageInvestmentRecouped = round(
		100 * (earned / investor.initialInvestment),
		4
	);

	// Earned
	updateEarned(investor, prevInvestor, earned);
	// Percentage of initial investment recouped
	updatePercentageOfInitialInvestmentRecouped(
		investor,
		prevInvestor,
		percentageInvestmentRecouped
	);
};
