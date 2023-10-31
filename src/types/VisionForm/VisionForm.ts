import { LegalAndTaxesSection } from "./LegalAndTaxesSection";
import {
	InvestorSection,
	InvestorsInputModeLess,
	LoanSection,
	LoansInputModeLess,
} from "./LoansAndInvestorsSection";
import { OverviewSection } from "./OverviewSection";
import { RevenueSection, RevenueSectionInputModeLess } from "./RevenueSection";
import {
	SpaceAndPlaceInputModeLess,
	SpaceAndPlaceSection,
} from "./SpaceAndPlaceSection";
import { StaffSection } from "./StaffSection";

// All form values including vision form and all other forms nested in vision form
// Mainly used for referencing form key values for form fields
export interface AllFormValues
	extends VisionFormValues,
		InvestorSection,
		LoanSection,
		SpaceAndPlaceSection,
		StaffSection {}

// Used to get keyof all field names from all forms that have low, average, high in it
export interface AllFormValuesInputModeLess
	extends RevenueSectionInputModeLess,
		InvestorsInputModeLess,
		LoansInputModeLess,
		SpaceAndPlaceInputModeLess {}

// Vision form all form values that can't be multiple (think multiple investors, multiple places, etc..)
export interface VisionFormValues
	extends OverviewSection,
		RevenueSection,
		LegalAndTaxesSection {
	investors: InvestorSection[];
	loans: LoanSection[];
}
