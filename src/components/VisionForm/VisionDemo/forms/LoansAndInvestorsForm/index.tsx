// This section is a subform
// The values do not impact the main form's validations only the sub form
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { CapitalType } from "@/types/VisionForm/LoansAndInvestorsSection";

import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { useForm } from "react-final-form";
import { styled } from "styled-components";
import { useCurrencySymbol } from "../../../utils/currency";
import InvestorForm from "./InvestorForm";
import LoanForm from "./LoanForm";
import { LoansAndInvestorsFormContextProvider } from "./LoansAndInvestorsFormContext";

// Add Button
export const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

// Loans and InvestorsForm
interface LoansAndInvestorsFormProps {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
	/**
	 * Type of form being rendered
	 */
	capitalType: CapitalType | null;
}

export default ({ children, capitalType }: LoansAndInvestorsFormProps) => {
	const visionForm = useForm<VisionFormValues>();
	const currencySymbol = useCurrencySymbol();

	return (
		<LoansAndInvestorsFormContextProvider
			value={{ currencySymbol, visionForm }}
		>
			{capitalType === CapitalType.INVESTOR && (
				<InvestorForm>{children}</InvestorForm>
			)}
			{capitalType === CapitalType.LOAN && <LoanForm>{children}</LoanForm>}
		</LoansAndInvestorsFormContextProvider>
	);
};
