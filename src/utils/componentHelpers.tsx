import Type from "@/components/common/Type";
import React from "react";

export const elementOrStringToTypeComponent = (
	el: JSX.Element | React.ReactNode | string | number | undefined | null
) => {
	if (el !== undefined && el !== null) {
		if (React.isValidElement(el)) {
			// children is an element
			return el as JSX.Element;
		} else {
			// children is a string
			return <Type>{el}</Type>;
		}
	}

	return null;
};
