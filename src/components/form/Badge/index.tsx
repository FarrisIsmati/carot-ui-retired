import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import {
	Sizes,
	minBlockSizeMap,
	spacer2,
	spacer4,
	spacer8,
} from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper } from "../IconWrapper";

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

export const badgePaddingMap = {
	[BadgeType.LABEL]: spacer8,
	[BadgeType.COUNT]: spacer2,
	[BadgeType.DOT]: spacer2,
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
			padding: ${badgePaddingMap[props.badgeType!]};
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
					padding={spacer8}
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
