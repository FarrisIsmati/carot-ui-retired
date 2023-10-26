import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import { useCurrencySymbol } from "../../../utils/currency";
import RevenueSectionContext from "../../sections/RevenueSection/RevenueSectionContext";
import { marginCalculator, profitCalculator } from "../util";

export default () => {
	// Context
	const formContext = useContext(RevenueSectionContext);
	const {
		revenueRetailPriceInputMode,
		revenueCostToProduceField,
		revenueProfitMarginField,
		revenueProfitAmountField,
	} = formContext!;

	// Prefix
	const prefix = useCurrencySymbol();

	return (
		<FormTextFieldNumeric
			label={"Retail"}
			fieldNameBase={"revenueRetailPrice"}
			placeholder={"Retail Price"}
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
