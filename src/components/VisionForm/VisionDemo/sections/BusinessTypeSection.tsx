import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { useFormState } from "react-final-form";
import BusinessCurrencyField from "../../fields/BusinessOverview/BusinessCurrencyField";
import BusinessIndustryField from "../../fields/BusinessOverview/BusinessIndustryField";
import BusinessLocationField from "../../fields/BusinessOverview/BusinessLocationField";
import LegalStructureField from "../../fields/LegalAndTaxes/LegalStructureField";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const StyledDoubleDropdownContainer = styled.div`
	display: flex;
	gap: ${spacer8};
`;

export default () => {
	const formState = useFormState<VisionFormValues>();
	const formValues = formState.values;

	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Business Type</Type>
			<BusinessIndustryField />
			<StyledDoubleDropdownContainer>
				<BusinessLocationField />
				<BusinessCurrencyField />
			</StyledDoubleDropdownContainer>

			{/* Hidden if not USA */}
			{formValues.businessLocation === CountriesEnum.USA && (
				<LegalStructureField />
			)}
		</StyledContainer>
	);
};
