import FormTextfieldCurrency from "@/components/form/FormTextfieldCurrency";
import { useCurrencySymbol } from "@/utils/form";

export default () => {
	const prefix = useCurrencySymbol();
	return (
		<FormTextfieldCurrency
			label={"Cash"}
			fieldName={"investorStartingCash"}
			placeholder={"Starting cash"}
			defaultValue="0"
			prefix={"0"}
		/>
	);
};
