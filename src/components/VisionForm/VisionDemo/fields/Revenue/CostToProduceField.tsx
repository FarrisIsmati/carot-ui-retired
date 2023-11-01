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
		revenueCostToProduceInputMode,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	} = useRevenueFields();

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
