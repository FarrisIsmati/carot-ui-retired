import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import { marginCalculator, profitCalculator } from "../util";

const RetailPriceField = () => {
	// Context
	const formContext = useContext(RevenueFormContext);
	const prefix = formContext?.currencySymbol;

	const {
		revenueRetailPriceInputMode,
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueProfitMarginField,
	} = useRevenueFields();

	return (
		<FormTextFieldNumericInputMode
			label={"Retail"}
			fieldNameBase={"revenueRetailPrice"}
			placeholder={"Physical Price"}
			inputMode={revenueRetailPriceInputMode}
			allowNegativeValue={false}
			prefix={prefix}
			onChange={(value) => {
				//
				// Margin
				//
				revenueProfitMarginField.input.onChange(
					marginCalculator(revenueCostToProduceField.input.value, value!)
				);
				//
				// Profit
				//
				revenueProfitAmountField.input.onChange(
					profitCalculator(revenueCostToProduceField.input.value, value!)
				);
			}}
			size={Sizes.SMALL}
		/>
	);
};

export default RetailPriceField;
