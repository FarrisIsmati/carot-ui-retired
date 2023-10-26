import {
	CapitalAndInvestorsInputModeLess,
	CapitalAndInvestorsSection,
} from "./CapitalAndInvestorsSection";
import { LegalAndTaxesSection } from "./LegalAndTaxesSection";
import { OverviewSection } from "./OverviewSection";
import { RevenueSection, RevenueSectionInputModeLess } from "./RevenueSection";
import {
	SpaceAndPlaceInputModeLess,
	SpaceAndPlaceSection,
} from "./SpaceAndPlaceSection";

// All form values including vision form and all other forms nested in vision form
export interface AllFormValues
	extends VisionFormValues,
		CapitalAndInvestorsSection,
		SpaceAndPlaceSection {}

// Vision form all form values that can't be multiple (think multiple investors, multiple places, etc..)
export interface VisionFormValues
	extends OverviewSection,
		RevenueSection,
		LegalAndTaxesSection {}

// Used to get keyof all field names from all forms that have low, average, high in it
export interface AllFormValuesInputModeLess
	extends RevenueSectionInputModeLess,
		CapitalAndInvestorsInputModeLess,
		SpaceAndPlaceInputModeLess {}
