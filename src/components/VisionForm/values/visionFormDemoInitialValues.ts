import {
	InvestorType,
	LoanType,
} from "@/types/VisionForm/CapitalAndInvestorsSection";
import {
	CompoundScheduleType,
	ScheduleType,
} from "@/types/VisionForm/Schedule";
import { CurrencyTypes } from "@/types/currency/types";
import { DraftVisionFormValues } from "..";
import { LocationDropdownValuesEnum } from "./visionFormDropdownValues";

export const visionFormDemoInitialValues: DraftVisionFormValues = {
	businessName: "",
	businessCurrency: CurrencyTypes.USD,
	businessIndustry: "",
	businessLocation: LocationDropdownValuesEnum.UNKNOWN,
	forecastingStartDate: "",
	forecastingEndDate: "",
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
	legalStructure: "",
};
