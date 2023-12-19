import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer40 } from "@/styles/sizes";
import React from "react";
import { css, styled } from "styled-components";
import ButtonPrimary, { ButtonPrimaryProps } from "../Button/ButtonPrimary";

export type ButtonSegmentedControlProps = ButtonPrimaryProps & {
	/**
	 * Sets if value is active or not
	 */
	isActive?: boolean;
	/**
	 * Expand to fit width of container
	 */
	isFixed?: boolean;
};

export const ButtonSegmentedControlStyled = styled(
	React.forwardRef<HTMLElement, ButtonSegmentedControlProps>(function Button(
		{ isActive, ...props },
		ref
	) {
		return <ButtonPrimary {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			color: ${props.isActive
				? colorBaseMap[ColorBaseCore.BLACK]
				: colorBaseMap[ColorBaseCore.NEUTRAL_3]};
			background-color: ${props.isActive
				? colorBaseMap[ColorBaseCore.WHITE]
				: "transparent"};
			height: ${spacer40};
			width: ${props.width ? props.width + "px" : "inherit"};

			&:hover:not([disabled]) {
				color: ${colorBaseMap[ColorBaseCore.BLACK]};
				background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
			}

			&:disabled {
				background-color: transparent;
				color: ${colorBaseMap[ColorBaseCore.NEUTRAL_3]};
			}
		`;
	}}
`;

const ButtonSegmentedControl = React.forwardRef<
	HTMLElement,
	ButtonSegmentedControlProps
>(({ ...props }, ref) => {
	return <ButtonSegmentedControlStyled {...props} ref={ref} />;
});

export default ButtonSegmentedControl;
