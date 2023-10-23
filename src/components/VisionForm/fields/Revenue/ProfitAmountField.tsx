import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import GoodsAndServicesSectionContext from "../../VisionDemo/sections/GoodsAndServicesSectionContext";
import { useCurrencySymbol } from "../../utils/currency";
import { marginFromProfitAmount, revenueFromProfitAmount } from "../util";

export default () => {
	const prefix = useCurrencySymbol();

	const formContext = useContext(GoodsAndServicesSectionContext);

	const {
		revenueRetailPriceInputMode,
		revenueCostToProduceField,
		revenueRetailPriceField,
		revenueProfitMarginField,
		revenueProfitAmountField,
	} = formContext!;
	return (
		<FormTextFieldNumeric
			label={"Profit"}
			fieldName={"revenueProfitAmount"}
			defaultValue={0}
			placeholder={"Profit amount"}
			inputMode={revenueRetailPriceInputMode}
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
