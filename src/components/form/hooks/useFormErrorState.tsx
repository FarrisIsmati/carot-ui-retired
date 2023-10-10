// NOT IN USE
import { hasVisibleErrors } from "@/utils/form";
import { get } from "lodash";
import { useFormState } from "react-final-form";

type ValidatingFormGroupProps = {
	validateFields: [string, ...string[]];
};

export default ({ validateFields }: ValidatingFormGroupProps) => {
	const { touched, errors } = useFormState({
		subscription: { touched: true, errors: true },
	});

	const erroredFieldName = validateFields.find((field) =>
		hasVisibleErrors({ touched: touched?.[field], error: get(errors, field) })
	);

	return { erroredFieldName };
};
