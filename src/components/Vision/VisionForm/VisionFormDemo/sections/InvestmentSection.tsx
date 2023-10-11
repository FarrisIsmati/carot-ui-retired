import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import CapitalTypeField from "../../fields/CapitalTypeField";

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
			<Type semanticfont={semanticFonts.headlineSmall}>Investment</Type>
			<CapitalTypeField />
		</StyledContainer>
	);
};
