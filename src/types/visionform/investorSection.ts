import { ScheduleTypeFull } from "./dates";

export enum InvestorType {
	ACTIVE = "ACTIVE",
	PASSIVE = "PASSIVE",
}

export interface InvestorFormFull {
	investorName: string;
	investorType: InvestorType;
	investorJoinDate: Date;
	investorEquityPercent: number;
	investorInitCash: number;
	investorDrawProfitPercent: number;
	investorDrawProfitSchedule: ScheduleTypeFull;
	investorDrawProfitTarget: number;
	investorStartingTaxableIncome: number;
}
