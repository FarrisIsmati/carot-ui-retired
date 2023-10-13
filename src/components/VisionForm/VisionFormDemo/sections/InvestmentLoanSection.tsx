import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import InvestorEquity from "../../fields/InvestorEquity";
import InvestorName from "../../fields/InvestorName";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

// NOTE wrap this in it's own form component, so submit can validate a different set of error rules
export default () => {
	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.bodyMedium}>Add Investor</Type>
			<InvestorName />
			<InvestorEquity />
		</StyledContainer>
	);
};
