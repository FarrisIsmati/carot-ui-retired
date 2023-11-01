// Investors section

import { ScheduleType } from "../common/schedule";

export enum InvestorType {
	ACTIVE = "ACTIVE",
	SILENT = "SILENT",
}

export interface InvestorSection {
	id: string;

	investorName: string;
	investorType: InvestorType; // Either an active investor/owner or silent investor (hands off)
	investorJoinDate: string; // When an investor joins the company

	// How much equity an investor gets % (can set starting investment capital if there is a starting goal)
	investorEquityPercentage: number;

	// How much starting cash the investor is putting into the company
	investorStartingCashLow: number;
	investorStartingCashAverage: number;
	investorStartingCashHigh: number;

	// Percentage of profits an employee can choose to pay themselves with
	// TODO: Add field to figure out when the draw begins (When does it start, reoccuring days, etc)
	investorDrawProfitPercentageLow: number;
	investorDrawProfitPercentageAverage: number;
	investorDrawProfitPercentageHigh: number;

	// Draw if profits are over X currency TODO: Expand on target options
	investorDrawTargetLow: number;
	investorDrawTargetAverage: number;
	investorDrawTargetHigh: number;

	// TODO: Add fields to include owner salary
	// TODO: Add field to include owner position
	investorDrawSchedule: ScheduleType; // When an investor draws profits
	investorTaxBracket: string; // TODO: Create a mapper for strings based on country and tax brackets, then create util func to convert tax percentage based on mapper
}

// Investor keys without input modes
export interface InvestorsInputModeLess {
	investorStartingCash: any;
	investorDrawProfitPercentage: any;
	investorDrawTarget: any;
}
