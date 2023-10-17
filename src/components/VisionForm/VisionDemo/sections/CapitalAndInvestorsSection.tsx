import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsForm";
import { useCurrencySymbol } from "@/utils/form";
import { useState } from "react";
import { styled } from "styled-components";
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

			{capitalType === CapitalType.INVESTOR && (
				<CapitalAndInvestorsForm>
					<InvestorSection />
				</CapitalAndInvestorsForm>
				// Need raihan to prompt how this is displayed
				// Continue to think about how this mechanism will work
			)}
			{/* Show that it's locked premium */}
			{capitalType === CapitalType.LOAN && (
				<CapitalAndInvestorsForm>
					<p>loan locked</p>
				</CapitalAndInvestorsForm>
			)}
		</StyledContainer>
	);
};
