// This section is a subform
// The values do not impact the main form's validations only the sub form
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsForm";
import CapitalAndInvestorsFormValidator from "@/validators/CapitalAndInvestorsFormValidator";
import { Form } from "react-final-form";
import { styled } from "styled-components";
import { useCurrencySymbol } from "../../utils/currency";
import { CapitalAndInvestorsFormInitialValues } from "../values/CapitalAndInvestorsFormInitialValues";
import { CapitalAndInvestorsFormContextProvider } from "./CapitalAndInvestorsFormContext";

// Add Button

const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

// CapitalAndInvestorsForm

interface CapitalAndInvestorsFormProps {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
	/**
	 * Type of form being rendered
	 */
	capitalType: CapitalType | null;
}

const handleSubmit = () => {
	console.log("SUBMIT");
};

export default ({ children, capitalType }: CapitalAndInvestorsFormProps) => {
	// Set this to context (need to reference field in current form not Capital And Investors form)
	const currencySymbol = useCurrencySymbol();
	return (
		<CapitalAndInvestorsFormContextProvider value={{ currencySymbol }}>
			<Form<any>
				initialValues={CapitalAndInvestorsFormInitialValues}
				validate={(values) => CapitalAndInvestorsFormValidator(values)}
				onSubmit={handleSubmit}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						{children}
						{!!capitalType && (
							<StyledAddButton onClick={handleSubmit}>Add</StyledAddButton>
						)}
					</form>
				)}
			/>
		</CapitalAndInvestorsFormContextProvider>
	);
};
