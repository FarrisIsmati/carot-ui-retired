import { LegalAndTaxesSection } from "./LegalAndTaxesSection";
import { OverviewSection } from "./OverviewSection";
import { RevenueSection } from "./RevenueSection";

export interface VisionFormValues
	extends OverviewSection,
		RevenueSection,
		LegalAndTaxesSection {}
