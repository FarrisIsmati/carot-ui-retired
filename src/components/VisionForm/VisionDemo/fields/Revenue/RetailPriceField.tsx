import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useHasInputModeError } from "@/validators/utils";
import { useContext } from "react";
import { useCurrencySymbol } from "../../../utils/currency";
import RevenueSectionContext from "../../sections/RevenueSection/RevenueSectionContext";
import { marginCalculator, profitCalculator } from "../util";

export default () => {
	const fieldName = "revenueRetailPrice";
	const prefix = useCurrencySymbol();
	const inputModeError = useHasInputModeError(fieldName);

	const formContext = useContext(RevenueSectionContext);
	const {
		revenueRetailPriceInputMode,
		revenueCostToProduceField,
		revenueProfitMarginField,
		revenueProfitAmountField,
	} = formContext!;

	return (
		<FormTextFieldNumeric
			label={"Retail"}
			fieldName={fieldName}
			placeholder={"Retail Price"}
			inputMode={revenueRetailPriceInputMode}
			inputModeError={inputModeError}
			allowNegativeValue={false}
			prefix={prefix}
			onChange={(value) => {
				//
				// Margin
				//
				revenueProfitMarginField.input.onChange(
					marginCalculator(revenueCostToProduceField.input.value, value!)
				);
				//
				// Profit
				//
				revenueProfitAmountField.input.onChange(
					profitCalculator(revenueCostToProduceField.input.value, value!)
				);
			}}
			size={Sizes.SMALL}
		/>
	);
};
