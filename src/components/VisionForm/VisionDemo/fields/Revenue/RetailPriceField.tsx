import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import useRevenueFields from "../../sections/RevenueSection/hooks/useRevenueFields";
import { marginCalculator, profitCalculator } from "../util";

export default () => {
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
		<FormTextFieldNumeric
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
