import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import {
	profitFromMarginCalculator,
	revenueFromMarginCalculator,
} from "../util";

const ProfitMarginField = () => {
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
		<FormTextFieldNumericInputMode
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

export default ProfitMarginField;
