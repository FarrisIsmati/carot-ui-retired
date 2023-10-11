import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsSection";
import { useState } from "react";
import { styled } from "styled-components";
import { capitalTypeDropdownValues } from "../../values/visionFormDropdownValues";

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
	const [capitalType, setCapitalType] = useState<CapitalType | null>(null);
	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Investment</Type>
			<DropdownSelect
				id={"capitalType"}
				name={"Capital Type"}
				placeholder={"Add Capital"}
				dataset={capitalTypeDropdownValues}
				onselect={(value) => setCapitalType(value.id)}
			/>

			{capitalType === CapitalType.INVESTOR && <p>Investor</p>}
			{capitalType === CapitalType.LOAN && <p>Loan</p>}
		</StyledContainer>
	);
};
