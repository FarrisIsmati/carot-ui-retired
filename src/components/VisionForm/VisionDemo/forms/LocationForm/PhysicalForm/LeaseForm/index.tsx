// This section is a subform
// The values do not impact the main form's validations only the sub form
import { useVisionFormField } from "@/components/VisionForm/utils/form";
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import { PhysicalLeaseLocationSection } from "@/types/VisionForm/LocationSection";
import { physicalLeaseLocationValidator } from "@/validators/Location/Physical/PhysicalLocationValidator";
import { FormApi } from "final-form";
import _ from "lodash";
import { Form, useForm } from "react-final-form";
import { styled } from "styled-components";
import { v4 as uuid } from "uuid";
import { useCurrencySymbol } from "../../../../../utils/currency";
import { LeaseFormInitialValues } from "../../../../values/forms/Capital/LeaseFormInitialValues";
import { LocationFormContextProvider } from "../../LocationFormContext";

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
	form: FormApi<
		PhysicalLeaseLocationSection,
		Partial<PhysicalLeaseLocationSection>
	>;
	values: PhysicalLeaseLocationSection;
	visionForm: FormApi<VisionFormValues, Partial<VisionFormValues>>;
}) => {
	// Get form values
	const formValues = visionForm.getState().values;
	// Get vision form leases
	const leasesValue = formValues.leases;
	// Clone object
	const leasesCloned = _.cloneDeep(leasesValue);
	// Add an UUID
	values.id = uuid();
	// Append submitted investor to investors cloned object
	leasesCloned?.push(values);
	// Update vision form state
	visionForm.change("leases", leasesCloned);
	// Reset initial values of loan investor form
	form.restart(LeaseFormInitialValues);
};

export default ({ children }: LeaseFormProps) => {
	// Vision form for reference in handle submit lease
	const visionForm = useForm<VisionFormValues>();

	// Get values from vision form store in context in leases form
	const currencySymbol = useCurrencySymbol();
	const countryOrigin = useVisionFormField("overviewCountryOrigin").input.value;

	return (
		<LocationFormContextProvider value={{ currencySymbol, countryOrigin }}>
			<Form<PhysicalLeaseLocationSection>
				initialValues={LeaseFormInitialValues}
				validate={(values) => physicalLeaseLocationValidator(values)}
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
		</LocationFormContextProvider>
	);
};
