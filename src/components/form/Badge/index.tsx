import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import {
	Sizes,
	minBlockSizeMap,
	spacer2,
	spacer4,
	spacer6,
	spacer8,
} from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper, getIconPosition } from "../IconWrapper";

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
	 * Type of badge can be LABEL, COUNT, or DOT
	 * @default 'LABEL'
	 */
	badgeType?: BadgeType;
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

const badgePadding = (badgeType: BadgeType, iconPosition: IconPosition) => {
	if (badgeType === BadgeType.LABEL) {
		if (iconPosition === IconPosition.LEADING)
			return `${spacer2} ${spacer2} ${spacer2} ${spacer8}`;
		if (iconPosition === IconPosition.TRAILING)
			return `${spacer2} ${spacer8} ${spacer2} ${spacer2}`;
		if (iconPosition === IconPosition.ONLY) return spacer2;
		if (iconPosition === IconPosition.NONE) return `${spacer8} ${spacer6}`;
	}

	if (badgeType === BadgeType.COUNT || badgeType === BadgeType.DOT)
		return spacer2;
};

export const BadgeStyled = styled(
	React.forwardRef<HTMLElement, BadgeProps>(function Button(
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
			border-radius: ${spacer4};
			padding: ${badgePadding(
				props.badgeType!,
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
			colorSet = getColorSet(SemanticSetCores.PRIMARY),
			component,
			iconLeading,
			iconTrailing,
			iconOnly,
			badgeType,
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
			<BadgeStyled
				ref={ref}
				component={!component && props.href ? "a" : component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				badgeType={badgeType}
				iconLeading={iconLeading}
				iconTrailing={iconTrailing}
				iconOnly={iconOnly}
				onClick={(e: any) => {
					e.target.blur();
				}}
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
