import { ValidationErrors } from "final-form";

export const withCustomMessage = (
	validator: (value: string) => boolean,
	message: string
) => {
	return (value: string) => {
		if (validator(value)) {
			return undefined;
		} else {
			return message;
		}
	};
};

export const required = (value: string) => !!value;

export const fieldRequired = withCustomMessage(
	required,
	"This field is required."
);

// Loops through an error object and sees if any errors are activated
export const hasError = (errors: ValidationErrors) => {
	if (errors) {
		return !!Object.values(errors).find((value) => !!value);
	}
	return false;
};
