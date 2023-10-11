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
