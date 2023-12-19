import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "./ButtonPrimary";

const ButtonPrimaryAlt = React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{ size, colorSet = getColorSet(SemanticSetCores.PRIMARY_ALT), ...props },
		ref
	) => {
		return (
			<ButtonPrimary {...props} size={size} colorSet={colorSet} ref={ref} />
		);
	}
);

export default ButtonPrimaryAlt;
