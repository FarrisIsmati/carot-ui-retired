import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import { VisionFormValues } from "@/types/VisionForm";
import { LoanSection } from "@/types/VisionForm/capitalSection/LoanSection";
import loanFormValidator from "@/validators/Capital/Loan/LoanFormValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { Form, useForm } from "react-final-form";
import { v4 as uuid } from "uuid";
import { LoanFormInitialValues } from "../../../values/forms/Capital/LoanFormInitialValues";
import { CapitalFormContextProvider } from "../CapitalFormContext";
import { StyledAddButton } from "../InvestorForm";

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
	// Add an UUID
	values.id = uuid();
	// Append submitted investor to investors cloned object
	loansCloned?.push(values);
	// Update vision form state
	visionForm.change("loans", loansCloned);
	// Reset initial values of loan investor form
	form.restart(LoanFormInitialValues);
};

const LoanForm = ({
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
		</CapitalFormContextProvider>
	);
};

export default LoanForm;
