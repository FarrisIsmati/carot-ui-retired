import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import useRevenueFields from "../../sections/RevenueSection/hooks/useRevenueFields";
import {
	profitFromMarginCalculator,
	revenueFromMarginCalculator,
} from "../util";

export default () => {
	// Context
	const formContext = useContext(RevenueFormContext);
	const prefix = formContext?.currencySymbol;

	const {
		revenueProfitMarginInputMode,
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueRetailPriceField,
		revenueProfitMarginField,
	} = useRevenueFields();

	return (
		<FormTextFieldNumeric
			label={"Margin"}
			fieldNameBase={"revenueProfitMargin"}
			placeholder={"Profit margin"}
			inputMode={revenueProfitMarginInputMode}
			suffix={"%"}
			size={Sizes.SMALL}
			onChange={(value) => {
				let forcedValue = value!;

				//
				// Cannot go below -100
				//
				if (value! < -100) {
					forcedValue = -100;
					revenueProfitMarginField.input.onChange(forcedValue);
				}

				//
				// Profit amount
				//
				revenueProfitAmountField.input.onChange(
					profitFromMarginCalculator(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);

				//
				// Physical price
				//
				revenueRetailPriceField.input.onChange(
					revenueFromMarginCalculator(
						revenueCostToProduceField.input.value,
						forcedValue
					)
				);
			}}
		/>
	);
};
