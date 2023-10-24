// This section is a subform
// The values do not impact the main form's validations only the sub form
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { LocationType } from "@/types/VisionForm/SpaceAndPlaceSection";
import { Form } from "react-final-form";
import { styled } from "styled-components";
import { useCurrencySymbol } from "../../../utils/currency";
import { CapitalAndInvestorsFormContextProvider } from "../CapitalAndInvestorsForm/CapitalAndInvestorsFormContext";

// Add Button

const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

// CapitalAndInvestorsForm

interface SpaceAndPlaceFormProps {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
	/**
	 * Type of form being rendered
	 */
	locationType: LocationType | null;
}

const handleSubmit = () => {
	console.log("SUBMIT");
};

export default ({ children, locationType }: SpaceAndPlaceFormProps) => {
	// Set this to context (need to reference field in current form not Capital And Investors form)
	const currencySymbol = useCurrencySymbol();
	return (
		<CapitalAndInvestorsFormContextProvider value={{ currencySymbol }}>
			<Form<any>
				initialValues={undefined}
				validate={undefined}
				onSubmit={handleSubmit}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						{children}
						{!!locationType && (
							<StyledAddButton onClick={handleSubmit}>Add</StyledAddButton>
						)}
					</form>
				)}
			/>
		</CapitalAndInvestorsFormContextProvider>
	);
};
