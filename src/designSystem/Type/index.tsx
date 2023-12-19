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
	semanticfont?: RuleSet<object>;
	/**
	 * Set the semantic color used by the button
	 * @default 'BASE'
	 **/
	colorset?: ColorSet;
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
	paddingbottom?: string;
};

export const TypeStyled = styled(
	React.forwardRef<HTMLElement, TypeProps>(function Button(
		{
			component: Component = "p",
			colorset,
			semanticfont,
			paddingbottom,
			...props
		},
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		let fontColor = props.color ? props.color : props.colorset?.text.default;

		if (props.disabled) {
			fontColor = props.colorset?.text.disabled;
		}

		if (props.error && !props.disabled) {
			fontColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;
		}

		return css`
			${props.semanticfont}
			color: ${fontColor};
			padding-bottom: ${props.paddingbottom};
			width: fit-content;
			margin-block-start: 0;
			margin-block-end: 0;
		`;
	}}
`;

const Type = React.forwardRef<HTMLEmbedElement, TypeProps>(
	function TypeComponent(
		{
			semanticfont = semanticFonts.bodyMedium,
			colorset = getColorSet(SemanticSetCores.BASE),
			paddingbottom,
			color,
			children,
			...props
		},
		ref
	) {
		return (
			<TypeStyled
				ref={ref}
				semanticfont={semanticfont}
				colorSet={colorset}
				color={color}
				paddingBottom={paddingbottom}
				{...props}
			>
				{children}
			</TypeStyled>
		);
	}
);

export default Type;
