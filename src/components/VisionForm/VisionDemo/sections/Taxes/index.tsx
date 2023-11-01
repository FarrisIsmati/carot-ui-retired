import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";

import TaxRateGeneric from "../../fields/Taxes/TaxRateGeneric";
import { FieldsContainer } from "../styles";

export default () => {
	return (
		<FieldsContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Taxes</Type>
			<TaxRateGeneric />
		</FieldsContainer>
	);
};
