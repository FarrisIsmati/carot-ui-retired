import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer10, spacer12 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import Link from "next/link";
import React from "react";
import styled, { RuleSet, css } from "styled-components";

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
		/**
		 * Set the custom font type
		 * @default 'labelLarge'
		 **/
		semanticFont?: RuleSet<object>;
		/**
		 * Set if clicking button will navigate you to a page
		 **/
		navigate?: string;
		/**
		 * Override color state with a generic color
		 * 	@default 'colorSet?.text.default'
		 **/
		color?: string;
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
			${props.semanticFont}
			color: ${props.color};
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
			navigate,
			color = colorSet.text.default,
			semanticFont = semanticFonts.labelLarge,
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
				color={color}
				semanticFont={semanticFont}
				{...props}
			>
				{navigate ? (
					<Link
						href={navigate}
						style={{ textDecoration: "none", color: "inherit" }}
					>
						{children}
					</Link>
				) : (
					children
				)}
			</StyledTextButton>
		);
	}
);
