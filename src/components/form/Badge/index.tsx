import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import {
	Sizes,
	badgeLabelIconPaddingMap,
	minBlockSizeMap,
	spacer8,
} from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper } from "../ButtonPrimary/IconWrapper";

export enum BadgeType {
	LABEL = "LABEL",
	COUNT = "COUNT",
	DOT = "DOT",
}

export type BadgeProps = StyledWrapperProps & {
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

interface BadgeStyledProps extends BadgeProps {
	padding: string;
}

export const BadgeStyled = styled(
	React.forwardRef<HTMLElement, BadgeStyledProps>(function Button(
		{ component: Component = "button", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.labelSmall}
			color: ${props.colorSet?.text.default};
			min-block-size: ${minBlockSizeMap[Sizes.SMALL]};
			border: none;
			background-color: ${props.colorSet?.essential.default};
			padding: ${props.padding};
			border-radius: ${spacer8};
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
				<IconWrapper icon={icon} position={position} size={Sizes.LARGE} />
			);

		let padding = "";
		if (iconTrailing) padding = badgeLabelIconPaddingMap.TRAILING;
		if (iconLeading) padding = badgeLabelIconPaddingMap.LEADING;
		if (iconOnly) padding = badgeLabelIconPaddingMap.ONLY;

		return (
			<BadgeStyled
				ref={ref}
				component={!component && props.href ? "a" : component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				onClick={(e: any) => {
					e.target.blur();
				}}
				padding={padding}
				{...props}
			>
				{renderIcon(IconPosition.TRAILING, iconTrailing)}
				{renderIcon(IconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</BadgeStyled>
		);
	}
);
