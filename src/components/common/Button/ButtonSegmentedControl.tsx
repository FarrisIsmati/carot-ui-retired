import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import React from "react";
import { css, styled } from "styled-components";
import ButtonPrimary, { ButtonPrimaryProps } from "./ButtonPrimary";

export type ButtonSegmentedControlProps = ButtonPrimaryProps & {
	/**
	 * Sets if value is active or not
	 */
	isActive?: boolean;
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

			&:hover:not([disabled]) {
				color: ${colorBaseMap[ColorBaseCore.BLACK]};
				background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
			}
		`;
	}}
`;

export default React.forwardRef<HTMLElement, ButtonSegmentedControlProps>(
	({ ...props }, ref) => {
		return <ButtonSegmentedControlStyled {...props} ref={ref} />;
	}
);
