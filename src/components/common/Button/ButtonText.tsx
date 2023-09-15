import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer10, spacer12 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";

export type ButtonTextProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
	};

export const StyledTextButton = styled(
	React.forwardRef<HTMLElement, ButtonTextProps>(function Button(
		{ component: Component = "button", colorSet, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.labelLarge}
			color: ${props.colorSet?.text.default};
			background-color: transparent;
			border: none;
			padding: ${spacer10} ${spacer12};

			&:disabled {
				color: ${props.colorSet?.text.disabled};
			}

			&:hover:not([disabled]) {
				cursor: pointer;
			}

			&:active:not([disabled]) {
				cursor: pointer;
			}
		`;
	}}
`;

export default React.forwardRef<HTMLElement, ButtonTextProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.BASE),
			component,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		return (
			<StyledTextButton
				ref={ref}
				component={!component && props.href ? "a" : component}
				onMouseDown={(e: React.MouseEvent<any, MouseEvent>) =>
					e.preventDefault()
				}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				onClick={(e: any) => {
					e.target.blur();
				}}
				{...props}
			>
				{children}
			</StyledTextButton>
		);
	}
);
