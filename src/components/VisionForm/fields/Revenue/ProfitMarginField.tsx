import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useHasInputModeError } from "@/validators/utils";
import { useContext } from "react";
import GoodsAndServicesSectionContext from "../../VisionDemo/sections/GoodsAndServicesSectionContext";

export default () => {
	const fieldName = "revenueProfitMargin";
	const inputModeError = useHasInputModeError(fieldName);

	const formContext = useContext(GoodsAndServicesSectionContext);
	const inputMode = formContext?.revenueProfitMarginInputMode;
	return (
		<FormTextFieldNumeric
			label={"Margin"}
			fieldName={fieldName}
			defaultValue={0}
			placeholder={"Profit margin"}
			inputMode={inputMode}
			inputModeError={inputModeError}
			suffix={"%"}
			size={Sizes.SMALL}
		/>
	);
};
