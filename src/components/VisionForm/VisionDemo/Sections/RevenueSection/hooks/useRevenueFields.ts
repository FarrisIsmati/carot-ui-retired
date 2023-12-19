import { useVisionFormField } from "@/components/VisionForm/utils/form";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useState } from "react";

const useRevenueFields = () => {
	// Get all input modes
	const [revenueCostToProduceInputMode, setRevenueCostToProduceInputMode] =
		useState(InputModeEnum.Average);
	const [revenueProfitMarginInputMode, setRevenueProfitMarginInputMode] =
		useState(InputModeEnum.Average);
	const [revenueRetailPriceInputMode, setRevenuePhysicalPriceInputMode] =
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

	return {
		revenueCostToProduceInputMode,
		setRevenueCostToProduceInputMode,
		revenueProfitMarginInputMode,
		setRevenueProfitMarginInputMode,
		revenueRetailPriceInputMode,
		setRevenuePhysicalPriceInputMode,
		revenueProfitAmountInputMode,
		setRevenueProfitAmountInputMode,
		revenueCostToProduceField,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	};
};

export default useRevenueFields;
