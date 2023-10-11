import { CapitalAndInvestorsSection } from "./CapitalAndInvestorsSection";
import { LegalAndTaxesSection } from "./LegalAndTaxes";
import { OverviewSection } from "./OverviewSection";
// TODO: Add Goals section
export interface VisionFormValues
	extends OverviewSection,
		CapitalAndInvestorsSection,
		LegalAndTaxesSection {}
