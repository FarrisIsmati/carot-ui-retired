import { FieldMetaState } from "react-final-form";

export const hasVisibleErrors = <T>(meta?: FieldMetaState<T>) => {
	return !!meta?.touched && Boolean(meta?.error);
};
