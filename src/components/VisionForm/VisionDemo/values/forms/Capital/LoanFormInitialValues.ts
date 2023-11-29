import {
	LoanSection,
	LoanType,
} from "@/types/VisionForm/capitalSection/LoanSection";
import { CompoundScheduleType } from "@/types/VisionForm/common/schedule";

export const LoanFormInitialValues: Omit<LoanSection, "id"> = {
	loanName: "",
	loanType: LoanType.GENERIC,
	loanIssueDate: "",

	// Loan amount
	loanAmountLow: 0,
	loanAmountAverage: 0,
	loanAmountHigh: 0,

	// Loan length years
	loanTermLengthYearsLow: 0,
	loanTermLengthYearsAverage: 0,
	loanTermLengthYearsHigh: 0,

	// Loan length months
	loanTermLengthMonthsLow: 0,
	loanTermLengthMonthsAverage: 0,
	loanTermLengthMonthsHigh: 0,

	loanCompoundRate: CompoundScheduleType.ANNUALLY,

	// Loan closing cost
	loanClosingCostPercentageLow: 0,
	loanClosingCostPercentageAverage: 0,
	loanClosingCostPercentageHigh: 0,

	// Loan origination fee
	loanOriginationFeeLow: 0,
	loanOriginationFeeAverage: 0,
	loanOriginationFeeHigh: 0,

	// Loan documentation fee
	loanDocumentationFeeLow: 0,
	loanDocumentationFeeAverage: 0,
	loanDocumentationFeeHigh: 0,
};
