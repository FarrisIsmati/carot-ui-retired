import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2, spacer4, spacer6, spacer8 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper, getIconPosition } from "../IconWrapper";
import Type from "../Type";

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
	/**
	 * Place icon start of button text
	 **/
	iconLeading?: AsProp;
	/**
	 * Place icon trailing buton text
	 **/
	iconTrailing?: AsProp;
	/**
	 * Only an icon for a button
	 */
	iconOnly?: AsProp;
};

const labelPadding = (iconPosition: IconPosition) => {
	if (iconPosition === IconPosition.LEADING)
		return `${spacer2} ${spacer2} ${spacer2} ${spacer8}`;
	if (iconPosition === IconPosition.TRAILING)
		return `${spacer2} ${spacer8} ${spacer2} ${spacer2}`;
	if (iconPosition === IconPosition.ONLY) return spacer2;
	if (iconPosition === IconPosition.NONE) return `${spacer8} ${spacer6}`;
};

export const LabelStyled = styled(
	React.forwardRef<HTMLElement, BadgeProps>(function Button(
		{ component: Component = "div", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.labelSmall}
			width: fit-content;
			color: ${props.colorSet?.text.default};
			border: none;
			background-color: ${props.colorSet?.essential.default};
			border-radius: ${spacer4};
			padding: ${labelPadding(
				getIconPosition({
					iconLeading: props.iconLeading,
					iconTrailing: props.iconTrailing,
					iconOnly: props.iconOnly,
				})
			)};
			display: flex;
			font-size: inherit;
			align-items: center;
			justify-content: center;
		`;
	}}
`;

const Label = React.forwardRef<HTMLElement, BadgeProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.PRIMARY),
			component,
			iconLeading,
			iconTrailing,
			iconOnly,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const renderIcon = (position: IconPosition, icon?: AsProp) =>
			icon && (
				<IconWrapper
					colorSet={colorSet}
					icon={icon}
					position={position}
					padding={spacer2}
					size={Sizes.SMALL}
				/>
			);

		let content: React.ReactNode | null = null;
		try {
			React.Children.only(children);
			// If react node set content to children
			content = children;
		} catch (e) {
			// If string only set content to string wrapped in Type component
			content = (
				<Type semanticfont={semanticFonts.labelSmall} colorset={colorSet}>
					{children}
				</Type>
			);
		}

		return (
			<LabelStyled
				ref={ref}
				component={component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				iconLeading={iconLeading}
				iconTrailing={iconTrailing}
				iconOnly={iconOnly}
				{...props}
			>
				{renderIcon(IconPosition.TRAILING, iconTrailing)}
				{renderIcon(IconPosition.ONLY, iconOnly)}
				{!iconOnly && content}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</LabelStyled>
		);
	}
);

export default Label;
