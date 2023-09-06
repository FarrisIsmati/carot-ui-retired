import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import { styled } from "styled-components";
import { ButtonPrimaryProps, ButtonStyled } from "./ButtonPrimary";

const ButtonTertiaryStyled = styled(ButtonStyled)`
	background-color: transparent;
`;

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	({ colorSet = getColorSet(SemanticSetCores.SECONDARY), ...props }, ref) => {
		return <ButtonTertiaryStyled {...props} colorSet={colorSet} ref={ref} />;
	}
);
