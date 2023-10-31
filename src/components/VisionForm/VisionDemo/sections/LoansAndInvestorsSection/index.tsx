import DropdownSelect from "@/components/common/Dropdown/DropdownSelect";
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { CapitalType } from "@/types/VisionForm/LoansAndInvestorsSection";
import { useState } from "react";
import LoansAndInvestorsForm from "../../forms/LoansAndInvestorsForm";
import { capitalTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";
import InvestorSection from "./InvestorsSection";

export default () => {
	const [capitalType, setCapitalType] = useState<CapitalType | null>(null);

	return (
		<FieldsContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Investment</Type>
			<DropdownSelect
				id={"capitalType"}
				name={"capitalType"}
				placeholder={"Add Capital"}
				dataset={capitalTypeDropdownValues}
				onselect={(value) => setCapitalType(value.id)}
			/>

			{/* Loans and Investors form */}
			<LoansAndInvestorsForm capitalType={capitalType}>
				{capitalType === CapitalType.INVESTOR && <InvestorSection />}
				{capitalType === CapitalType.LOAN && <p>loan locked</p>}
			</LoansAndInvestorsForm>
		</FieldsContainer>
	);
};
