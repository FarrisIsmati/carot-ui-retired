import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useField } from "react-final-form";

// Checks if a field with an input mode of (low, average, high) has an error on any of the three
export const useHasInputModeError = (fieldName: string) => {
	const lowField = useField(`${fieldName}${InputModeEnum.Low}`);
	const averageField = useField(`${fieldName}${InputModeEnum.Average}`);
	const highField = useField(`${fieldName}${InputModeEnum.High}`);
	const lowFieldError = lowField.meta.error as string | undefined;
	const averageFieldError = averageField.meta.error as string | undefined;
	const highFieldError = highField.meta.error as string | undefined;
	return [lowFieldError, averageFieldError, highFieldError].find(
		(error) => !!error
	);
};
