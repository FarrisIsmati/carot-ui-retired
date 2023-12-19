import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { InvestorSection } from "@/types/VisionForm/capitalSection/InvestorSection";
import investorFormValidator from "@/validators/Capital/Investor/InvestorFormValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { Form, useForm } from "react-final-form";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { InvestorsFormInitialValues } from "../../../values/forms/Capital/InvestorFormInitialValues";
import { CapitalFormContextProvider } from "../CapitalFormContext";

export const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

const handleSubmitInvestors = ({
	form,
	values,
	visionForm,
}: {
	form: FormApi<InvestorSection, Partial<InvestorSection>>;
	values: InvestorSection;
	visionForm: FormApi<VisionFormValues, Partial<VisionFormValues>>;
}) => {
	// Get form values
	const formValues = visionForm.getState().values;
	// Get vision form investors
	const investorsValue = formValues.investors;
	// Clone object
	const investorsCloned = _.cloneDeep(investorsValue);
	// Add a UUID
	values.id = uuid();
	// Append submitted investor to investors cloned object
	investorsCloned?.push(values);
	// Update vision form state
	visionForm.change("investors", investorsCloned);
	// Reset initial values of loan investor form
	form.restart(InvestorsFormInitialValues);
};

const InvestorForm = ({
	children,
}: {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
}) => {
	const visionForm = useForm<VisionFormValues>();
	const currencySymbol = useCurrencySymbol();

	return (
		<CapitalFormContextProvider value={{ currencySymbol }}>
			<Form<InvestorSection>
				initialValues={InvestorsFormInitialValues}
				validate={(values) => investorFormValidator(values)}
				onSubmit={(values, form) =>
					handleSubmitInvestors({ form, values, visionForm })
				}
				render={({ handleSubmit }) => (
					<div>
						{children}
						<StyledAddButton onClick={handleSubmit}>Add</StyledAddButton>
					</div>
				)}
			/>
		</CapitalFormContextProvider>
	);
};

export default InvestorForm;
