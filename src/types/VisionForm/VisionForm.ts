import {
	CapitalAndInvestorsFormValues,
	CapitalAndInvestorsInputModeLess,
} from "./CapitalAndInvestorsForm";
import { LegalAndTaxesSection } from "./LegalAndTaxesSection";
import { OverviewSection } from "./OverviewSection";
import { RevenueSection, RevenueSectionInputModeLess } from "./RevenueSection";

export interface VisionFormValues
	extends OverviewSection,
		RevenueSection,
		LegalAndTaxesSection {}

export interface AllFormValues
	extends VisionFormValues,
		CapitalAndInvestorsFormValues {}

// Used to get keyof all field names from AllForms that have low, average, high in it
export interface AllFormValuesInputModeLess
	extends RevenueSectionInputModeLess,
		CapitalAndInvestorsInputModeLess {}
