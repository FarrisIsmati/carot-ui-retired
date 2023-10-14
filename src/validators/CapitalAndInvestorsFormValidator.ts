import { CapitalAndInvestorsFormValues } from "@/types/VisionForm/CapitalAndInvestorsForm";
import {
	investorEquityValidator,
	investorNameValidator,
	investorStartingCashValidator,
} from "./CapitalAndInvestorsFormValidators";

export default (formValues: CapitalAndInvestorsFormValues) => {
	console.log("starting", formValues);

	// Capital and Investors form
	// Investor
	const investorName = investorNameValidator(formValues.investorName);
	const investorStartingCash = investorStartingCashValidator(
		formValues.investorStartingCash.toString()
	);
	const investorEquityPercentage = investorEquityValidator(
		formValues.investorEquityPercentage.toString()
	);
	return {
		investorName,
		investorStartingCash,
		investorEquityPercentage,
	};
};
