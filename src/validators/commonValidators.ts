import { ValidationErrors } from "final-form";

export const withCustomMessage = <T>(
	validator: (value: T) => boolean,
	message: string
) => {
	return (value: T) => {
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

// The validation method for both strings and values
export const requiredArray = (value: any[]) =>
	value !== undefined && value.length > 0 && value !== null;

export const fieldRequired = withCustomMessage<string | number>(
	required,
	"This field is required."
);

export const fieldRequiredArray = withCustomMessage<any[]>(
	requiredArray,
	"This field is requires at least one value."
);

// Loops through an error object and sees if any errors are activated
export const hasError = (errors: ValidationErrors) => {
	if (errors) {
		return !!Object.values(errors).find((value) => !!value);
	}
	return false;
};

// Combines multiple calculated validators and returns the first hit
export const combineValidators = <T>(
	validators: (string | undefined)[]
): string | undefined => {
	const validator = validators.find((validator) => {
		return !!validator;
	});
	return validator ? validator : undefined;
};
