import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useHasInputModeError } from "@/validators/utils";
import { useContext } from "react";
import RevenueSectionContext from "../../sections/RevenueSection/RevenueSectionContext";
import {
	profitFromMarginCalculator,
	revenueFromMarginCalculator,
} from "../util";

export default () => {
	const fieldName = "revenueProfitMargin";
	const inputModeError = useHasInputModeError(fieldName);

	const formContext = useContext(RevenueSectionContext);
	const {
		revenueProfitMarginInputMode,
		revenueProfitMarginField,
		revenueProfitAmountField,
		revenueCostToProduceField,
		revenueRetailPriceField,
	} = formContext!;
	return (
		<FormTextFieldNumeric
			label={"Margin"}
			fieldName={fieldName}
			defaultValue={0}
			placeholder={"Profit margin"}
			inputMode={revenueProfitMarginInputMode}
			inputModeError={inputModeError}
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
				// Retail price
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
