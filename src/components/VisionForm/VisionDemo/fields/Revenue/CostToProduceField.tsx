import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import { marginCalculator, profitCalculator } from "../util";

const CostToProduceField = () => {
	// Context
	const formContext = useContext(RevenueFormContext);
	const prefix = formContext?.currencySymbol;

	const {
		revenueCostToProduceInputMode,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	} = useRevenueFields();

	return (
		<FormTextFieldNumericInputMode
			label={"Cost"}
			fieldNameBase={"revenueCostToProduce"}
			inputMode={revenueCostToProduceInputMode}
			placeholder={"Cost to make"}
			prefix={prefix}
			size={Sizes.SMALL}
			allowNegativeValue={false}
			onChange={(value) => {
				//
				// Margin
				//
				revenueProfitMarginField.input.onChange(
					marginCalculator(value!, revenueRetailPriceField.input.value)
				);
				//
				// Profit
				//
				revenueProfitAmountField.input.onChange(
					profitCalculator(value!, revenueRetailPriceField.input.value)
				);
			}}
		/>
	);
};

export default CostToProduceField;
