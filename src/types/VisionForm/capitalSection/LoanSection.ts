// Loans section

import { CompoundScheduleType } from "../common/schedule";

export enum LoanType {
	GENERIC = "GENERIC",
	SMALL_BUSINESS = "SMALL_BUSINESS",
	MORTGAGE = "MORTGAGE",
	VEHICLE = "VEHICLE",
}

export interface LoanSection {
	id: string;

	loanName: string;
	loanType: LoanType; // Type of loan a user wants to take out (this can impact options/validations)
	loanIssueDate: string; // Date when the loan is issued

	// Amount the loan is worth
	loanAmountLow: number;
	loanAmountAverage: number;
	loanAmountHigh: number;

	// Length of loan
	// Years
	loanTermLengthYearsLow: number;
	loanTermLengthYearsAverage: number;
	loanTermLengthYearsHigh: number;

	// Months
	loanTermLengthMonthsLow: number;
	loanTermLengthMonthsAverage: number;
	loanTermLengthMonthsHigh: number;

	loanCompoundRate: CompoundScheduleType; // How often loan compounds, usually annually but quarterly, monthly, etc

	// Percentage closing costs added onto loan
	loanClosingCostPercentageLow: number;
	loanClosingCostPercentageAverage: number;
	loanClosingCostPercentageHigh: number;

	// TODO: add advanced closing cost fields
	// Usually between 1-6% of the loan rolled into the cost of the loan, or a flat fee to cover the cost of the loan approval process
	loanOriginationFeeLow: number;
	loanOriginationFeeAverage: number;
	loanOriginationFeeHigh: number;

	// Usually a fixed fee for processing paperwork
	loanDocumentationFeeLow: number;
	loanDocumentationFeeAverage: number;
	loanDocumentationFeeHigh: number;
}

// Loan keys without input modes
export interface LoansInputModeLess {
	loanAmount: any;
	loanTermLengthYears: any;
	loanTermLengthMonths: any;
	loanClosingCostPercentage: any;
	loanOriginationFee: any;
	loanDocumentationFee: any;
}
