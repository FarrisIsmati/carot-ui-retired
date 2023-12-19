// This section is a subform
// The values do not impact the main form's validations only the sub form
import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";
import InvestorEquity from "../../../fields/Capital/Investor/InvestorEquity";
import InvestorName from "../../../fields/Capital/Investor/InvestorName";
import InvestorStartingCash from "../../../fields/Capital/Investor/InvestorStartingCash";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const InvestorSection = () => {
	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.bodyMedium}>Add Investor</Type>
			<InvestorName />
			<InvestorStartingCash />
			<InvestorEquity />
		</StyledContainer>
	);
};

export default InvestorSection;
