import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "./ButtonPrimary";

const ButtonSecondary = React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{ size, colorSet = getColorSet(SemanticSetCores.SECONDARY), ...props },
		ref
	) => {
		return (
			<ButtonPrimary {...props} size={size} colorSet={colorSet} ref={ref} />
		);
	}
);

export default ButtonSecondary;
