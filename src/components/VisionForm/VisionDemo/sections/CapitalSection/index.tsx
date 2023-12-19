import DropdownSelect from "@/designSystem/Dropdown/DropdownSelect";
import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";
import { CapitalType } from "@/types/VisionForm/capitalSection";
import { useState } from "react";
import InvestorForm from "../../forms/CapitalForm/InvestorForm";
import LoanForm from "../../forms/CapitalForm/LoanForm";
import { capitalTypeDropdownValues } from "../../values/fields/dropdownValues";
import { FieldsContainer } from "../styles";
import InvestorSection from "./InvestorSection";

const CapitalSection = () => {
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

			{/* Capital form */}
			{capitalType === CapitalType.INVESTOR && (
				<InvestorForm>
					<InvestorSection />
				</InvestorForm>
			)}
			{capitalType === CapitalType.LOAN && (
				<LoanForm>
					<p>loan locked</p>
				</LoanForm>
			)}
		</FieldsContainer>
	);
};

export default CapitalSection;
