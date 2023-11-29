import {
	InvestorSection,
	InvestorType,
} from "@/types/VisionForm/capitalSection/InvestorSection";
import { ScheduleType } from "@/types/VisionForm/common/schedule";

export const InvestorsFormInitialValues: Omit<InvestorSection, "id"> = {
	investorName: "",
	investorType: InvestorType.ACTIVE,
	investorJoinDate: "",
	investorEquityPercentage: 100,

	// Starting cash
	investorStartingCashLow: 0,
	investorStartingCashAverage: 0,
	investorStartingCashHigh: 0,

	// Draw profit
	investorDrawProfitPercentageLow: 0,
	investorDrawProfitPercentageAverage: 0,
	investorDrawProfitPercentageHigh: 0,

	// Draw target
	investorDrawTargetLow: 0,
	investorDrawTargetAverage: 0,
	investorDrawTargetHigh: 0,

	investorDrawSchedule: ScheduleType.MONTHLY,

	investorTaxBracket: "",
};
