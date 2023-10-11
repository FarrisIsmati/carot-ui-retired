// Capital & Investors section
import { CompoundScheduleType, ScheduleType } from "./Schedule";

export enum InvestorType {
	ACTIVE = "ACTIVE",
	SILENT = "SILENT",
}

export enum LoanType {
	GENERIC = "GENERIC",
	SMALL_BUSINESS = "SMALL_BUSINESS",
	MORTGAGE = "MORTGAGE",
	VEHICLE = "VEHICLE",
}

export enum CapitalType {
	INVESTOR = "INVESTOR",
	LOAN = "LOAN",
}

export interface CapitalAndInvestorsSection extends Investor, Loan {
	capitalType: CapitalType | undefined;
}

export interface Investor {
	investorName: string;
	investorType: InvestorType; // Either an active investor/owner or silent investor (hands off)
	investorJoinDate: string; // When an investor joins the company
	investorEquityPercentage: number; // How much equity an investor gets % (can set starting investment capital if there is a starting goal)
	investorStartingCash: number; // How much starting cash the investor is putting into the company
	investorDrawProfitPercentage: number; // Percentage of profits an employee can choose to pay themselves with
	// TODO: Add field to figure out when the draw begins (When does it start, reoccuring days, etc)
	investorDrawSchedule: ScheduleType; // When an investor draws profits
	investorDrawTarget: number; // Draw if profits are over X currency TODO: Expand on target options
	// TODO: Add fields to include owner salary
	// TODO: Add field to include owner position
	investorTaxBracket: string; // TODO: Create a mapper for strings based on country and tax brackets, then create util func to convert tax percentage based on mapper
}

export interface Loan {
	loanName: string;
	loanType: LoanType; // Type of loan a user wants to take out (this can impact options/validations)
	loanIssueDate: string; // Date when the loan is issued
	loanAmount: number; // Amount the loan is worth
	loanTermLengthYears: number;
	loanTermLengthMonths: number;
	loanCompoundRate: CompoundScheduleType; // How often loan compounds, usually annually but quarterly, monthly, etc
	loanClosingCostPercentage: number; // Percentage closing costs added onto loan
	// TODO: add advanced closing cost fields
	loanOriginationFee: number; // Usually between 1-6% of the loan rolled into the cost of the loan, or a flat fee to cover the cost of the loan approval process
	loanDocumentationFee: number; // Usually a fixed fee for processing paperwork
}
