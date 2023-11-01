import {
	InvestorSection,
	InvestorsInputModeLess,
} from "./CapitalSection/InvestorSection";
import { LoanSection, LoansInputModeLess } from "./CapitalSection/LoanSection";
import { LegalSection } from "./LegalSection";

import {
	PhysicalLeaseLocationSection,
	PhysicalLocationSection,
	PhysicalLocationSectionInputModeLess,
} from "./LocationSection";
import {
	LeaseSection,
	LeaseSectionInputModeLess,
} from "./LocationSection/LeaseSection";
import { OverviewSection } from "./OverviewSection";
import { RevenueSection, RevenueSectionInputModeLess } from "./RevenueSection";

import { StaffSection } from "./StaffSection";
import { TaxesInputModeLess, TaxesSection } from "./TaxesSection";

// All form values including vision form and all other forms nested in vision form
// Mainly used for referencing form key values for form fields
export interface AllFormValues
	extends VisionFormValues,
		RevenueSection,
		InvestorSection,
		LoanSection,
		PhysicalLocationSection,
		LeaseSection,
		StaffSection {}

// All form value keys minus arrays for operations that don't expect to be taken on fields with arrays
export interface AllFormValuesNoArrays
	extends Omit<AllFormValues, "investors" | "loans" | "leases" | "products"> {}

// Used to get keyof all field names from all forms that have low, average, high in it
export interface AllFormValuesInputModeLess
	extends RevenueSectionInputModeLess,
		InvestorsInputModeLess,
		LoansInputModeLess,
		PhysicalLocationSectionInputModeLess,
		LeaseSectionInputModeLess,
		TaxesInputModeLess {}

// Vision form all form values that can't be multiple (think multiple investors, multiple places, etc..)
export interface VisionFormValues
	extends OverviewSection,
		LegalSection,
		TaxesSection {
	investors: InvestorSection[];
	loans: LoanSection[];
	leases: PhysicalLeaseLocationSection[];
	products: RevenueSection[];
}
