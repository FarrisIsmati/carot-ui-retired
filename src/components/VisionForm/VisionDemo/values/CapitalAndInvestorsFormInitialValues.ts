import {
	CapitalAndInvestorsFormValues,
	InvestorType,
	LoanType,
} from "@/types/VisionForm/CapitalAndInvestorsForm";
import {
	CompoundScheduleType,
	ScheduleType,
} from "@/types/VisionForm/common/schedule";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export const CapitalAndInvestorsFormInitialValues: CapitalAndInvestorsFormValues =
	{
		investorName: "",
		investorType: InvestorType.ACTIVE,
		investorJoinDate: "",
		investorEquityPercentage: 100,
		investorStartingCash: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		investorDrawProfitPercentage: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		investorDrawSchedule: ScheduleType.MONTHLY,
		investorDrawTarget: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		investorTaxBracket: "",
		loanName: "",
		loanType: LoanType.GENERIC,
		loanIssueDate: "",
		loanAmount: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		loanTermLengthYears: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		loanTermLengthMonths: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		loanCompoundRate: CompoundScheduleType.ANNUALLY,
		loanClosingCostPercentage: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		loanOriginationFee: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
		loanDocumentationFee: {
			[InputModeEnum.LOW]: 0,
			[InputModeEnum.AVERAGE]: 0,
			[InputModeEnum.HIGH]: 0,
		},
	};
