import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { spacer8 } from "@/styles/sizes";
import { styled } from "styled-components";

import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useState } from "react";
import { useField } from "react-final-form";
import CostToProduceField from "../../fields/Revenue/CostToProduceField";
import ProfitAmountField from "../../fields/Revenue/ProfitAmountField";
import ProfitMarginField from "../../fields/Revenue/ProfitMarginField";
import RetailPriceField from "../../fields/Revenue/RetailPriceField";
import { CapitalAndInvestorsFormContextProvider } from "./GoodsAndServicesSectionContext";

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${spacer8};
`;

const StyledDoubleDropdownContainer = styled.div`
	display: flex;
	gap: ${spacer8};
`;

const useGetGoodsAndServicesSectionFields = ({
	revenueCostToProduceInputMode,
	revenueProfitMarginInputMode,
	revenueRetailPriceInputMode,
	revenueProfitAmountInputMode,
}: {
	revenueCostToProduceInputMode: InputModeEnum;
	revenueProfitMarginInputMode: InputModeEnum;
	revenueRetailPriceInputMode: InputModeEnum;
	revenueProfitAmountInputMode: InputModeEnum;
}) => {
	const revenueCostToProduceField = useField(
		`revenueCostToProduce${revenueCostToProduceInputMode}`
	);
	const revenueProfitMarginField = useField(
		`revenueProfitMargin${revenueProfitMarginInputMode}`
	);
	const revenueRetailPriceField = useField(
		`revenueRetailPrice${revenueRetailPriceInputMode}`
	);
	const revenueProfitAmountField = useField(
		`revenueProfitAmount${revenueProfitAmountInputMode}`
	);
	return {
		revenueCostToProduceField,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	};
};

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
	const revenueCostToProduceField = useField(
		`revenueCostToProduce${revenueCostToProduceInputMode}`
	);
	const revenueProfitMarginField = useField(
		`revenueProfitMargin${revenueProfitMarginInputMode}`
	);
	const revenueRetailPriceField = useField(
		`revenueRetailPrice${revenueRetailPriceInputMode}`
	);
	const revenueProfitAmountField = useField(
		`revenueProfitAmount${revenueProfitAmountInputMode}`
	);
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
