import { LocationLeaseCalendarValues } from "./locationCalendarValues";
import { ProductValues } from "./productCalendarValues";

//
// All Values that need to be passed into the calendar results function
//

export interface CompanyCalendarValues
	extends ProductValues,
		LocationLeaseCalendarValues {
	coreValues: CompanyCalendarValuesCore;
}

// Values that don't include product or location
// It's nested in a new object rather than being destructured (easier to access these props than omit arrays)
export interface CompanyCalendarValuesCore {
	startDate: string;
	endDate: string;
	taxRate: number;
}
