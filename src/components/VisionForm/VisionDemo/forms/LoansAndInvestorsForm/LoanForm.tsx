import { LoanSection } from "@/types/VisionForm/LoansAndInvestorsSection";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import loanFormValidator from "@/validators/LoansAndInvestors/LoanFormValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { useContext } from "react";
import { Form } from "react-final-form";
import { StyledAddButton } from ".";
import { LoanFormInitialValues } from "../../values/forms/LoansAndInvestorsFormInitialValues";
import LoansAndInvestorsFormContext from "./LoansAndInvestorsFormContext";

export const handleSubmitLoan = ({
	form,
	values,
	visionForm,
}: {
	form: FormApi<LoanSection, Partial<LoanSection>>;
	values: LoanSection;
	visionForm: FormApi<VisionFormValues, Partial<VisionFormValues>>;
}) => {
	// Get form values
	const formValues = visionForm.getState().values;
	// Get vision form loans
	const loansValue = formValues.loans;
	// Clone object
	const loansCloned = _.cloneDeep(loansValue);
	// Append submitted investor to investors cloned object
	loansCloned?.push(values);
	// Update vision form state
	visionForm.change("loans", loansCloned);
	// Reset initial values of loan investor form
	form.restart(LoanFormInitialValues);
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
		<Form<LoanSection>
			initialValues={LoanFormInitialValues}
			validate={(values) => loanFormValidator(values)}
			onSubmit={(values, form) =>
				handleSubmitLoan({ form, values, visionForm })
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
