import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import useRevenueFields from "../../Sections/RevenueSection/hooks/useRevenueFields";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import { marginFromProfitAmount, revenueFromProfitAmount } from "../util";

const ProfitAmountField = () => {
	// Context
	const formContext = useContext(RevenueFormContext);
	const prefix = formContext?.currencySymbol;

	const {
		revenueProfitAmountInputMode,
		revenueCostToProduceField,
		revenueProfitAmountField,
		revenueRetailPriceField,
		revenueProfitMarginField,
	} = useRevenueFields();

	return (
		<FormTextFieldNumericInputMode
			label={"Profit"}
			fieldNameBase={"revenueProfitAmount"}
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

export default ProfitAmountField;
