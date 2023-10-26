import { CapitalAndInvestorsSection } from "@/types/VisionForm/CapitalAndInvestorsSection";
import {
	investorEquityValidator,
	investorNameValidator,
	investorStartingCashValidator,
} from "./Validators";

export default (formValues: CapitalAndInvestorsSection) => {
	// Investor
	const investorName = investorNameValidator(formValues.investorName);

	// Starting cash
	const investorStartingCashLow = investorStartingCashValidator(
		formValues.investorStartingCashLow
	);
	const investorStartingCashAverage = investorStartingCashValidator(
		formValues.investorStartingCashAverage
	);
	const investorStartingCashHigh = investorStartingCashValidator(
		formValues.investorStartingCashHigh
	);

	const investorEquityPercentage = investorEquityValidator(
		formValues.investorEquityPercentage
	);

	return {
		// Name
		investorName,

		// Starting cash
		investorStartingCashLow,
		investorStartingCashAverage,
		investorStartingCashHigh,

		// Equity
		investorEquityPercentage,
	};
};
