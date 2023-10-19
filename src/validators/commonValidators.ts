import { ValidationErrors } from "final-form";

export const withCustomMessage = (
	validator: (value: string | number) => boolean,
	message: string
) => {
	return (value: string | number) => {
		if (validator(value)) {
			return undefined;
		} else {
			return message;
		}
	};
};

// The validation method for both strings and values
export const required = (value: string | number) =>
	value !== undefined && value !== "" && value !== null;

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
