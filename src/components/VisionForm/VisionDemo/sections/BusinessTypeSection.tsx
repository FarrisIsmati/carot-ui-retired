import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import BusinessCurrencyField from "../../fields/BusinessCurrencyField";
import BusinessIndustryField from "../../fields/BusinessIndustryField";
import BusinessLocationField from "../../fields/BusinessLocationField";
import LegalStructureField from "../../fields/LegalStructureField";

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
	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Business Type</Type>
			<BusinessIndustryField />
			<StyledDoubleDropdownContainer>
				<BusinessLocationField />
				<BusinessCurrencyField />
			</StyledDoubleDropdownContainer>

			{/* Hidden if not USA */}
			<LegalStructureField />
		</StyledContainer>
	);
};
