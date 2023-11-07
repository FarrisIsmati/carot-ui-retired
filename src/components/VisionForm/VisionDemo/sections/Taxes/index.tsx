import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";

import { Store } from "@reduxjs/toolkit";
import { useStore } from "react-redux";
import TaxRateGeneric from "../../fields/Taxes/TaxRateGeneric";
import { FieldsContainer } from "../styles";

export default () => {
	const store: Store = useStore();

	console.log("le state", store.getState());

	return (
		<FieldsContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Taxes</Type>
			<TaxRateGeneric />
		</FieldsContainer>
	);
};
