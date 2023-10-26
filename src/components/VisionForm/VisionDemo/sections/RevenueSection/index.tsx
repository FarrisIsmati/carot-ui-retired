import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer40, spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import { useVisionFormField } from "@/components/VisionForm/utils/form";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useState } from "react";
import CostToProduceField from "../../fields/Revenue/CostToProduceField";
import ProfitAmountField from "../../fields/Revenue/ProfitAmountField";
import ProfitMarginField from "../../fields/Revenue/ProfitMarginField";
import RetailPriceField from "../../fields/Revenue/RetailPriceField";
import { CapitalAndInvestorsFormContextProvider } from "./RevenueSectionContext";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: ${spacer40};
	gap: ${spacer8};
`;

const StyledDoubleDropdownContainer = styled.div`
	display: flex;
	gap: ${spacer8};
`;

export default () => {
	// Get all input modes
	const [revenueCostToProduceInputMode, setRevenueCostToProduceInputMode] =
		useState(InputModeEnum.Average);
	const [revenueProfitMarginInputMode, setRevenueProfitMarginInputMode] =
		useState(InputModeEnum.Average);
	const [revenueRetailPriceInputMode, setRevenueRetailPriceInputMode] =
		useState(InputModeEnum.Average);
	const [revenueProfitAmountInputMode, setRevenueProfitAmountInputMode] =
		useState(InputModeEnum.Average);
	// Get all fields
	const revenueCostToProduceField = useVisionFormField(
		`revenueCostToProduce${revenueCostToProduceInputMode}`
	);
	const revenueProfitMarginField = useVisionFormField(
		`revenueProfitMargin${revenueProfitMarginInputMode}`
	);
	const revenueRetailPriceField = useVisionFormField(
		`revenueRetailPrice${revenueRetailPriceInputMode}`
	);
	const revenueProfitAmountField = useVisionFormField(
		`revenueProfitAmount${revenueProfitAmountInputMode}`
	);

	// Context to pass in all fields/set fields values between all child components (all heavily depend on eachother)
	return (
		<CapitalAndInvestorsFormContextProvider
			value={{
				revenueCostToProduceInputMode,
				setRevenueCostToProduceInputMode,
				revenueProfitMarginInputMode,
				setRevenueProfitMarginInputMode,
				revenueRetailPriceInputMode,
				setRevenueRetailPriceInputMode,
				revenueProfitAmountInputMode,
				setRevenueProfitAmountInputMode,
				revenueCostToProduceField,
				revenueProfitMarginField,
				revenueRetailPriceField,
				revenueProfitAmountField,
			}}
		>
			<StyledContainer>
				<Type semanticfont={semanticFonts.headlineSmall}>Goods & Services</Type>
				<StyledDoubleDropdownContainer>
					<CostToProduceField />
					<ProfitMarginField />
				</StyledDoubleDropdownContainer>
				<StyledDoubleDropdownContainer>
					<RetailPriceField />
					<ProfitAmountField />
				</StyledDoubleDropdownContainer>
			</StyledContainer>
		</CapitalAndInvestorsFormContextProvider>
	);
};
