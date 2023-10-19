import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useCurrencySymbol } from "../../utils/currency";

export default () => {
	const prefix = useCurrencySymbol();

	return (
		<FormTextFieldNumeric
			label={"Retail price"}
			fieldName={"revenueRetailPrice"}
			placeholder={"Retail Price"}
			inputMode={InputModeEnum.Average}
			prefix={prefix}
			size={Sizes.SMALL}
		/>
	);
};
