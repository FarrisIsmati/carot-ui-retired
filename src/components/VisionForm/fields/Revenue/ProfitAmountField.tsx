import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useCurrencySymbol } from "../../utils/currency";

export default () => {
	const prefix = useCurrencySymbol();

	return (
		<FormTextFieldNumeric
			label={"Profit amount"}
			fieldName={"revenueProfitAmount"}
			defaultValue={0}
			placeholder={"Profit amount"}
			inputMode={InputModeEnum.Average}
			prefix={prefix}
			size={Sizes.SMALL}
		/>
	);
};
