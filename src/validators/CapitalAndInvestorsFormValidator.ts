import { CapitalAndInvestorsFormValues } from "@/types/VisionForm/CapitalAndInvestorsForm";
import { investorNameValidator } from "./CapitalAndInvestorsFormValidators";

export default (formValues: CapitalAndInvestorsFormValues) => {
	// Capital and Investors form
	// Investor
	const investorName = investorNameValidator(formValues.investorName);

	return {
		investorName,
	};
};
