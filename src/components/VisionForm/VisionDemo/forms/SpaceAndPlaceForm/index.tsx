// This section is a subform
// The values do not impact the main form's validations only the sub form
import { useVisionFormField } from "@/components/VisionForm/utils/form";
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { LocationType } from "@/types/VisionForm/SpaceAndPlaceSection";
import SpaceAndPlaceFormValidator from "@/validators/SpaceAndPlace/Validator";
import { Form } from "react-final-form";
import { styled } from "styled-components";
import { useCurrencySymbol } from "../../../utils/currency";
import { SpaceAndPlaceFormInitialValues } from "../../values/forms/SpaceAndPlaceFormInitialValues";
import { SpaceAndPlaceFormContextProvider } from "./SpaceAndPlaceFormContext";

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

	// Get country origin
	const countryOrigin = useVisionFormField("overviewCountryOrigin").input.value;

	return (
		<SpaceAndPlaceFormContextProvider value={{ currencySymbol, countryOrigin }}>
			<Form<any>
				initialValues={SpaceAndPlaceFormInitialValues}
				validate={(values) => SpaceAndPlaceFormValidator(values)}
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
		</SpaceAndPlaceFormContextProvider>
	);
};
