import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { InvestorSection } from "@/types/VisionForm/LoansAndInvestorsSection";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import investorFormValidator from "@/validators/LoansAndInvestors/InvestorFormValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { useContext } from "react";
import { Form } from "react-final-form";
import styled from "styled-components";
import { InvestorsFormInitialValues } from "../../values/forms/LoansAndInvestorsFormInitialValues";
import LoansAndInvestorsFormContext from "./LoansAndInvestorsFormContext";

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
	// Append submitted investor to investors cloned object
	investorsCloned?.push(values);
	// Update vision form state
	visionForm.change("investors", investorsCloned);
	// Reset initial values of loan investor form
	form.restart(InvestorsFormInitialValues);
};

export default ({
	children,
}: {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
}) => {
	const formContext = useContext(LoansAndInvestorsFormContext);
	const { visionForm } = formContext!;

	return (
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
	);
};
