import Type from "@/designSystem/Type";
import { semanticFonts } from "@/styles/fonts";

import TaxRateGeneric from "../../fields/Taxes/TaxRateGeneric";
import { FieldsContainer } from "../styles";

const Taxes = () => {
	return (
		<FieldsContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Taxes</Type>
			<TaxRateGeneric />
		</FieldsContainer>
	);
};

export default Taxes;
