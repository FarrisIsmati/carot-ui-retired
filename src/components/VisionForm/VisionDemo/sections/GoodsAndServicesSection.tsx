import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import BusinessCurrencyField from "../../fields/BusinessOverview/BusinessCurrencyField";
import BusinessLocationField from "../../fields/BusinessOverview/BusinessLocationField";
import ProductPriceField from "../../fields/Revenue/ProductPriceField";

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
	// const formState = useFormState<VisionFormValues>();
	// const formValues = formState.values;

	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Goods & Services</Type>
			<StyledDoubleDropdownContainer>
				<ProductPriceField />
				<BusinessCurrencyField />
			</StyledDoubleDropdownContainer>
			<StyledDoubleDropdownContainer>
				<BusinessLocationField />
				<BusinessCurrencyField />
			</StyledDoubleDropdownContainer>
		</StyledContainer>
	);
};
