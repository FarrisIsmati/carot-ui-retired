import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import { useMemo } from "react";
import { getInvestorCalendarValues } from "../utils/calendarValues";

// Exports memo that should only be used in useCalendar hook
// Note only invalidates cache if investor length has changed (so figure something else out)
// Or if investor is edited, remove + add it back ??
export default (investors: InvestorSection[]): InvestorCalendarValues[] => {
	return useMemo(
		() => investors.map((investor) => getInvestorCalendarValues(investor)),
		[investors.length]
	);
};
