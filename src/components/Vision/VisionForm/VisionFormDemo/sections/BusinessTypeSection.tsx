import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import BusinessCurrencyField from "../../fields/BusinessCurrencyField";
import BusinessIndustryField from "../../fields/BusinessIndustryField";
import BusinessLocationField from "../../fields/BusinessLocationField";

const StyledDoubleDropdownContainer = styled.div`
	display: flex;
	gap: ${spacer8};
`;

export default () => {
	return (
		<div>
			<Type semanticfont={semanticFonts.headlineSmall}>Business Type</Type>
			<BusinessIndustryField />
			<StyledDoubleDropdownContainer>
				<BusinessLocationField />
				<BusinessCurrencyField />
			</StyledDoubleDropdownContainer>
		</div>
	);
};
