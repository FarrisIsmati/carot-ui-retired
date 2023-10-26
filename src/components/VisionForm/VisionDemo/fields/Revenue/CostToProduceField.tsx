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
		revenueCostToProduceInputMode,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	} = formContext!;

	// Prefix
	const prefix = useCurrencySymbol();

	return (
		<FormTextFieldNumeric
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
