import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import { styled } from "styled-components";
import ButtonPrimary, { ButtonPrimaryProps } from "./ButtonPrimary";

const ButtonTertiaryStyled = styled(ButtonPrimary)`
	background-color: transparent;
`;

const ButtonTertiary = React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{ size, colorSet = getColorSet(SemanticSetCores.SECONDARY), ...props },
		ref
	) => {
		return (
			<ButtonTertiaryStyled
				{...props}
				size={size}
				colorSet={colorSet}
				ref={ref}
			/>
		);
	}
);

export default ButtonTertiary;
