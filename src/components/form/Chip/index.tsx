import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer12, spacer2, spacer4, spacer6 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper, getIconPosition } from "../IconWrapper";

export type BadgeProps = StyledWrapperProps & {
	/**
	 * Set the semantic color used by the button
	 * @default 'brightAccent
	 **/
	colorSet?: ColorSet;
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'span'
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
		return `${spacer2} ${spacer4} ${spacer2} ${spacer12}`;
	if (iconPosition === IconPosition.TRAILING)
		return `${spacer2} ${spacer12} ${spacer2} ${spacer4}`;
	if (iconPosition === IconPosition.ONLY) return spacer2;
	if (iconPosition === IconPosition.NONE) return `${spacer6} ${spacer12}`;
};

export const LabelStyled = styled(
	React.forwardRef<HTMLElement, BadgeProps>(function Button(
		{ component: Component = "span", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.bodySmall}
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

export default React.forwardRef<HTMLElement, BadgeProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
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
					icon={icon}
					position={position}
					padding={spacer2}
					size={Sizes.SMALL}
				/>
			);

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
				{!iconOnly && children}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</LabelStyled>
		);
	}
);
