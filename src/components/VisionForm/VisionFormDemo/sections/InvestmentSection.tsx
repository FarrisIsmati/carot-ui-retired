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

export default () => {
	const [capitalType, setCapitalType] = useState<CapitalType | null>(null);
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
				<div>
					<p>Name</p>
					{/* Locked stuck to 100% */}
					<p>Equity</p>
					<p>Starting investment</p>
					{/* Note after one is added cannot add anymore */}
					<p>Add</p>
				</div>
				// Need raihan to prompt how this is displayed
				// Continue to think about how this mechanism will work
			)}
			{/* Show that it's locked premium */}
			{capitalType === CapitalType.LOAN && <p>Loan</p>}
		</StyledContainer>
	);
};
