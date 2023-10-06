import Type from "@/components/common/Type";
import { ColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import React from "react";
import { RuleSet } from "styled-components";

export const elementOrStringToTypeComponent = ({
	el,
	font,
	colorSet,
}: {
	el: JSX.Element | React.ReactNode | string | number | undefined | null;
	font?: RuleSet<object>;
	colorSet?: ColorSet;
}) => {
	if (el !== undefined && el !== null) {
		if (React.isValidElement(el)) {
			// children is an element
			return el as JSX.Element;
		} else {
			// children is a string
			return (
				<Type
					semanticfont={font ?? semanticFonts.bodyMedium}
					colorset={colorSet}
				>
					{el}
				</Type>
			);
		}
	}

	return null;
};
