import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer16, spacer2 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";

export type BadgeProps = StyledWrapperProps & {
	/**
	 * Set the semantic color used by the button
	 * @default 'brightAccent
	 **/
	colorSet?: ColorSet;
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'div'
	 **/
	component?: AsProp;
};

export const CountStyled = styled(
	React.forwardRef<
		HTMLElement,
		Omit<BadgeProps, "iconLeading" | "iconTrailing" | "iconOnly">
	>(function Button(
		{ component: Component = "div", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.labelExtraSmall}
			color: ${props.colorSet?.text.default};
			width: ${spacer16};
			height: ${spacer16};
			border-radius: 50%;
			background-color: ${props.colorSet?.essential.default};
			padding: ${spacer2};
			display: flex;
			font-size: inherit;
			align-items: center;
			justify-content: center;
		`;
	}}
`;

const Count = React.forwardRef<HTMLElement, BadgeProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.PRIMARY),
			component,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		return (
			<CountStyled
				ref={ref}
				component={component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				{...props}
			>
				{children}
			</CountStyled>
		);
	}
);

export default Count;
