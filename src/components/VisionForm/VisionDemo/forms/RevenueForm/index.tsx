// This section is a subform
// The values do not impact the main form's validations only the sub form
import { useCurrencySymbol } from "@/components/VisionForm/utils/currency";
import { useVisionFormField } from "@/components/VisionForm/utils/form";
import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { RevenueSection } from "@/types/VisionForm/revenueSection";
import { revenueValidator } from "@/validators/Revenue/RevenueValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { Form, useForm, useFormState } from "react-final-form";
import { styled } from "styled-components";
import { v4 as uuid } from "uuid";
import { revenueFormInitialValues } from "../../values/forms/Revenue/RevenueFormInitialValues";
import { RevenueFormContextProvider } from "./RevenueFormContext";

// Add Button

const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

// Space and place form

interface LeaseFormProps {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
}

export const handleSubmitLease = ({
	form,
	values,
	visionForm,
}: {
	form: FormApi<RevenueSection, Partial<RevenueSection>>;
	values: RevenueSection;
	visionForm: FormApi<VisionFormValues, Partial<VisionFormValues>>;
}) => {
	// Get form values
	const formValues = visionForm.getState().values;
	// Get vision form products
	const productsValue = formValues.products;
	// Clone object
	const productsCloned = _.cloneDeep(productsValue);
	// Add an UUID
	values.id = uuid();
	// Append submitted investor to investors cloned object
	productsCloned?.push(values);
	// Update vision form state
	visionForm.change("products", productsCloned);
	// Reset initial values of loan investor form
	form.restart(revenueFormInitialValues);
};

const RevenueForm = ({ children }: LeaseFormProps) => {
	// Vision form for reference in handle submit lease
	const visionForm = useForm<VisionFormValues>();
	const visionFormState = useFormState<VisionFormValues>();

	// Get values from vision form store in context in leases form
	const currencySymbol = useCurrencySymbol();
	const countryOrigin = useVisionFormField("overviewCountryOrigin").input.value;
	// Get all locations // Todo add more locations when added (own/online/etc)
	const leases = useVisionFormField("leases").input.value;
	const locations = [...leases];

	return (
		<RevenueFormContextProvider
			value={{ currencySymbol, countryOrigin, locations }}
		>
			<Form<RevenueSection>
				initialValues={revenueFormInitialValues}
				validate={(values) =>
					revenueValidator({
						revenueFormValues: values,
						visionFormValues: visionFormState.values,
					})
				}
				onSubmit={(values, form) =>
					handleSubmitLease({ form, values, visionForm })
				}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit}>
						{children}
						<StyledAddButton onClick={handleSubmit}>Add</StyledAddButton>
					</form>
				)}
			/>
		</RevenueFormContextProvider>
	);
};

export default RevenueForm;
