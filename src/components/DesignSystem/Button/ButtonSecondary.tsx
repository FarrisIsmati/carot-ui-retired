import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import ButtonPrimary, { ButtonPrimaryProps } from "./ButtonPrimary";

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	({ colorSet = getColorSet(SemanticSetCores.SECONDARY), ...props }, ref) => {
		return <ButtonPrimary {...props} colorSet={colorSet} ref={ref} />;
	}
);
