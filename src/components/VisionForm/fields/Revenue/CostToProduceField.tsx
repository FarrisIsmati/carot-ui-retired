import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useField } from "react-final-form";
import { useCurrencySymbol } from "../../utils/currency";

export default () => {
	const fieldName = "revenueCostToProduce";
	const prefix = useCurrencySymbol();

	// Todo make util func
	const lowField = useField(`${fieldName}${InputModeEnum.Low}`);
	const averageField = useField(`${fieldName}${InputModeEnum.Average}`);
	const highField = useField(`${fieldName}${InputModeEnum.High}`);
	const lowFieldError = lowField.meta.error as string | undefined;
	const averageFieldError = averageField.meta.error as string | undefined;
	const highFieldError = highField.meta.error as string | undefined;
	const inputModeError = [
		lowFieldError,
		averageFieldError,
		highFieldError,
	].find((error) => !!error);

	return (
		<FormTextFieldNumeric
			label={"Cost to make"}
			fieldName={fieldName}
			inputMode={InputModeEnum.Average}
			inputModeError={inputModeError}
			placeholder={"Cost to make"}
			prefix={prefix}
			size={Sizes.SMALL}
		/>
	);
};
