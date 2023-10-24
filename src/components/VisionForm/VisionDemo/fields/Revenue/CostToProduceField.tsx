import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useHasInputModeError } from "@/validators/utils";
import { useContext } from "react";
import { useCurrencySymbol } from "../../../utils/currency";
import RevenueSectionContext from "../../sections/RevenueSection/RevenueSectionContext";
import { marginCalculator, profitCalculator } from "../util";

export default () => {
	const fieldName = "revenueCostToProduce";
	const inputModeError = useHasInputModeError(fieldName);
	const prefix = useCurrencySymbol();

	const formContext = useContext(RevenueSectionContext);
	const {
		revenueCostToProduceInputMode,
		revenueProfitMarginField,
		revenueRetailPriceField,
		revenueProfitAmountField,
	} = formContext!;

	return (
		<FormTextFieldNumeric
			label={"Cost"}
			fieldName={fieldName}
			inputMode={revenueCostToProduceInputMode}
			inputModeError={inputModeError}
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
