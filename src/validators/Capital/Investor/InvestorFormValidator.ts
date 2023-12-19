import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import {
	investorEquityValidator,
	investorNameValidator,
	investorStartingCashValidator,
} from "./InvestorFormValidators";

const InvestorFormValidator = (formValues: InvestorSection) => {
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

export default InvestorFormValidator;
