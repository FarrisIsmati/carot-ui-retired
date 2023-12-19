import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import Chip, { ChipProps } from ".";

const ChipAlt = React.forwardRef<HTMLElement, ChipProps>(
	(
		{ colorSet = getColorSet(SemanticSetCores.PRIMARY_ALT_2), ...props },
		ref
	) => {
		return <Chip colorSet={colorSet} {...props} ref={ref} />;
	}
);

export default ChipAlt;
