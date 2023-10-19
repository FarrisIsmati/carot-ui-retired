import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";

export default () => {
	return (
		<FormTextFieldNumeric
			label={"Profit margin"}
			fieldName={"revenueProfitMargin"}
			defaultValue={0}
			placeholder={"Profit margin"}
			inputMode={InputModeEnum.Average}
			suffix={"%"}
			size={Sizes.SMALL}
		/>
	);
};
