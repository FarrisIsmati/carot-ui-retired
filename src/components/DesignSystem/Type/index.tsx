import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { RuleSet, css, styled } from "styled-components";

export type TypeProps = StyledWrapperProps & {
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'p'
	 **/
	component?: AsProp;
	/**
	 * @default 'bodyMedium'
	 */
	font?: RuleSet<object>;
	/**
	 * Set the semantic color used by the button
	 * @default '?
	 **/
	colorSet?: ColorSet;
	/**
	 * If the text is to show an error state
	 */
	error?: boolean;
	/**
	 * Override color state with a generic color
	 **/
	color?: string;
	/**
	 * Padding bottom
	 */
	paddingBottom?: string;
};

export const TypeStyled = styled(
	React.forwardRef<HTMLElement, TypeProps>(function Button(
		{ component: Component = "p", colorSet, font, paddingBottom, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		let fontColor = props.color ? props.color : props.colorSet?.text.default;

		if (props.disabled) {
			fontColor = props.colorSet?.text.disabled;
		}

		if (props.error && !props.disabled) {
			fontColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;
		}

		return css`
			${props.font}
			color: ${fontColor};
			padding-bottom: ${props.paddingBottom};
			margin-block-start: 0;
			margin-block-end: 0;
		`;
	}}
`;

export default React.forwardRef<HTMLEmbedElement, TypeProps>(
	function TypeComponent(
		{
			font = semanticFonts.bodyMedium,
			colorSet = getColorSet(SemanticSetCores.BASE),
			paddingBottom,
			color,
			children,
			...props
		},
		ref
	) {
		return (
			<TypeStyled
				ref={ref}
				font={font}
				colorSet={colorSet}
				color={color}
				paddingBottom={paddingBottom}
				{...props}
			>
				{children}
			</TypeStyled>
		);
	}
);
