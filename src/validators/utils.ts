import { useVisionFormField } from "@/components/VisionForm/utils/form";
import { AllFormValuesInputModeLess } from "@/types/VisionForm";
import { InputModeEnum } from "@/types/VisionForm/common/values";

// Checks if a field with an input mode of (low, average, high) has an error on any of the three
export const useHasInputModeError = (
	fieldName: keyof AllFormValuesInputModeLess
) => {
	const lowField = useVisionFormField(`${fieldName}${InputModeEnum.Low}`);
	const averageField = useVisionFormField(
		`${fieldName}${InputModeEnum.Average}`
	);
	const highField = useVisionFormField(`${fieldName}${InputModeEnum.High}`);
	const lowFieldError = lowField.meta.error as string | undefined;
	const averageFieldError = averageField.meta.error as string | undefined;
	const highFieldError = highField.meta.error as string | undefined;

	return [lowFieldError, averageFieldError, highFieldError].find(
		(error) => !!error
	);
};
