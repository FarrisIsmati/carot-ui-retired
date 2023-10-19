import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { useFormState } from "react-final-form";
import CostToProduceField from "../../fields/Revenue/CostToProduceField";

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
	const formState = useFormState<VisionFormValues>();
	const formValues = formState.values;
	console.log(formValues);
	return (
		<StyledContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Goods & Services</Type>
			<StyledDoubleDropdownContainer>
				<CostToProduceField />
				{/* <ProfitMarginField /> */}
			</StyledDoubleDropdownContainer>
			{/* <StyledDoubleDropdownContainer>
				<RetailPriceField />
				<ProfitAmountField />
			</StyledDoubleDropdownContainer> */}
		</StyledContainer>
	);
};
