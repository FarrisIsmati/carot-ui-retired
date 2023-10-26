import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import { useCurrencySymbol } from "../../../utils/currency";
import RevenueSectionContext from "../../sections/RevenueSection/RevenueSectionContext";
import { marginFromProfitAmount, revenueFromProfitAmount } from "../util";

export default () => {
	// Context
	const formContext = useContext(RevenueSectionContext);
	const {
		revenueProfitAmountInputMode,
		revenueCostToProduceField,
		revenueRetailPriceField,
		revenueProfitMarginField,
		revenueProfitAmountField,
	} = formContext!;

	// Prefix
	const prefix = useCurrencySymbol();

	return (
		<FormTextFieldNumeric
			label={"Profit"}
			fieldNameBase={"revenueProfitAmount"}
			defaultValue={0}
			placeholder={"Profit amount"}
			inputMode={revenueProfitAmountInputMode}
			prefix={prefix}
			size={Sizes.SMALL}
			onChange={(value) => {
				let forcedValue = value!;

				//
				// Cannot go below -100
				//
				if (forcedValue < revenueCostToProduceField.input.value * -1) {
					forcedValue = revenueCostToProduceField.input.value * -1;
					revenueProfitAmountField.input.onChange(forcedValue);
				}

				//
				// Revenue from profit amount
				//
				revenueRetailPriceField.input.onChange(
					revenueFromProfitAmount(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);
				//
				// Margin from profit amount
				//
				revenueProfitMarginField.input.onChange(
					marginFromProfitAmount(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);
			}}
		/>
	);
};
