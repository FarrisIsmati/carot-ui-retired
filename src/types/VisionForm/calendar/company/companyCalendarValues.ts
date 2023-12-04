import { LocationLeaseCalendarValues } from "../location/leaseCalendarValues";
import { ProductValues } from "../product/productCalendarValues";

// All calendar values
export interface AllCalendarValues
	extends CompanyCalendarValues,
		ProductValues,
		LocationLeaseCalendarValues {}

//
// Company values that need to be passed into the calendar results function
//

export interface CompanyCalendarValues {
	startDate: string;
	endDate: string;
	taxRate: number;
}
