import {
	CapitalAndInvestorsFormValues,
	InvestorType,
	LoanType,
} from "@/types/VisionForm/CapitalAndInvestorsForm";
import {
	CompoundScheduleType,
	ScheduleType,
} from "@/types/VisionForm/common/Schedule";

export const CapitalAndInvestorsFormInitialValues: CapitalAndInvestorsFormValues =
	{
		investorName: "",
		investorType: InvestorType.ACTIVE,
		investorJoinDate: "",
		investorEquityPercentage: 100,
		investorStartingCash: 0,
		investorDrawProfitPercentage: 0,
		investorDrawSchedule: ScheduleType.MONTHLY,
		investorDrawTarget: 0,
		investorTaxBracket: "",
		loanName: "",
		loanType: LoanType.GENERIC,
		loanIssueDate: "",
		loanAmount: 0,
		loanTermLengthYears: 0,
		loanTermLengthMonths: 0,
		loanCompoundRate: CompoundScheduleType.ANNUALLY,
		loanClosingCostPercentage: 0,
		loanOriginationFee: 0,
		loanDocumentationFee: 0,
	};
