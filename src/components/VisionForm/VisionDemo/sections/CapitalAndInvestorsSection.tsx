import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsForm";
import { useState } from "react";
import { styled } from "styled-components";
import { useCurrencySymbol } from "../../utils/currency";
import { CapitalAndInvestorsFormContextProvider } from "../context";
import CapitalAndInvestorsForm from "../forms/CapitalAndInvestorsForm";
import { capitalTypeDropdownValues } from "../values/VisionFormDemoDropdownValues";
import InvestorSection from "./InvestorsSection";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

export default () => {
	const [capitalType, setCapitalType] = useState<CapitalType | null>(null);
	// Set this to context
	const currencySymbol = useCurrencySymbol();

	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Investment</Type>
			<DropdownSelect
				id={"capitalType"}
				name={"capitalType"}
				placeholder={"Add Capital"}
				dataset={capitalTypeDropdownValues}
				onselect={(value) => setCapitalType(value.id)}
			/>

			{/* Capital and Investors form */}

			<CapitalAndInvestorsFormContextProvider value={{ currencySymbol }}>
				<CapitalAndInvestorsForm capitalType={capitalType}>
					{capitalType === CapitalType.INVESTOR && <InvestorSection />}
					{capitalType === CapitalType.LOAN && <p>loan locked</p>}
				</CapitalAndInvestorsForm>
			</CapitalAndInvestorsFormContextProvider>
		</StyledContainer>
	);
};
