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
		colorset?: ColorSet;
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
		/**
		 * Set the custom font type
		 * @default 'labelLarge'
		 **/
		semanticfont?: RuleSet<object>;
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
		{ component: Component = "button", colorset, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${props.semanticfont}
			color: ${props.color};
			background-color: transparent;
			border: none;
			padding: ${spacer10} ${spacer12};

			&:disabled {
				color: ${props.colorset?.text.disabled};
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

const ButtonText = React.forwardRef<HTMLElement, ButtonTextProps>(
	(
		{
			colorset = getColorSet(SemanticSetCores.BASE),
			component,
			children,
			navigate,
			color = colorset.text.default,
			semanticfont = semanticFonts.labelLarge,
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
				colorset={colorset}
				onClick={(e: any) => {
					e.target.blur();
				}}
				color={color}
				semanticfont={semanticfont}
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

export default ButtonText;
