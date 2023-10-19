import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useCurrencySymbol } from "../../utils/currency";

export default () => {
	const prefix = useCurrencySymbol();

	return (
		<FormTextFieldNumeric
			label={"Price"}
			fieldName={"revenueProductPrice"}
			placeholder={"Product Price"}
			prefix={prefix}
			size={Sizes.SMALL}
		/>
	);
};
