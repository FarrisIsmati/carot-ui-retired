import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { useFormState } from "react-final-form";
import LegalStructureField from "../../fields/LegalAndTaxes/LegalStructureField";
import CountryOriginField from "../../fields/Overview/CountryOriginField";
import CurrencyField from "../../fields/Overview/CurrencyField";
import IndustryField from "../../fields/Overview/IndustryField";

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
			<IndustryField />
			<StyledDoubleDropdownContainer>
				<CountryOriginField />
				<CurrencyField />
			</StyledDoubleDropdownContainer>

			{/* Hidden if not USA */}
			{formValues.overviewCountryOrigin === CountriesEnum.USA && (
				<LegalStructureField />
			)}
		</StyledContainer>
	);
};
