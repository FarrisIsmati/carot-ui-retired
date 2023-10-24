import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useHasInputModeError } from "@/validators/utils";
import { useContext } from "react";
import { useCurrencySymbol } from "../../../utils/currency";
import RevenueSectionContext from "../../sections/RevenueSection/RevenueSectionContext";
import { marginFromProfitAmount, revenueFromProfitAmount } from "../util";

export default () => {
	const fieldName = "revenueProfitAmount";
	const prefix = useCurrencySymbol();
	const inputModeError = useHasInputModeError(fieldName);

	const formContext = useContext(RevenueSectionContext);

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
			fieldName={fieldName}
			defaultValue={0}
			placeholder={"Profit amount"}
			inputMode={revenueRetailPriceInputMode}
			inputModeError={inputModeError}
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
