import { VisionFormValues } from "@/types/VisionForm";
import { CompanyCalendarValuesCore } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { getCompanyCalendarValuesFixed } from "../utils/calendarValues";

export default (
	visionFormDemoState: VisionFormValues
): CompanyCalendarValuesCore => {
	return getCompanyCalendarValuesFixed(visionFormDemoState);
	// // TODO: Not memoizing until I can track an edited field
	// return useMemo(
	// 	() => getCompanyCalendarValuesFixed(visionFormDemoState),
	// 	[visionFormDemoState.???]
	// );
};
