// This section is a subform
// The values do not impact the main form's validations only the sub form
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import InvestorEquity from "../../fields/CapitalAndInvestment/InvestorEquity";
import InvestorName from "../../fields/CapitalAndInvestment/InvestorName";
import InvestorStartingCash from "../../fields/CapitalAndInvestment/InvestorStartingCash";

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
			<InvestorEquity />
		</StyledContainer>
	);
};
