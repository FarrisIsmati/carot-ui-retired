// This section is a subform
// The values do not impact the main form's validations only the sub form
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import InvestorName from "../../fields/InvestorName";
import InvestorStartingCash from "../../fields/InvestorStartingCash";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

export default () => {
	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.bodyMedium}>Add Investor</Type>
			<InvestorName />
			<InvestorStartingCash />
			{/* <InvestorEquity /> */}
		</StyledContainer>
	);
};
