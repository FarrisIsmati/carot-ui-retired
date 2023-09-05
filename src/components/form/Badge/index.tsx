import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import {
	Sizes,
	spacer16,
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
	 * @default 'div'
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

export const CountStyled = styled(
	React.forwardRef<
		HTMLElement,
		Omit<BadgeProps, "iconLeading" | "iconTrailing" | "iconOnly">
	>(function Button(
		{ component: Component = "div", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.labelExtraSmall}
			color: ${props.colorSet?.text.default};
			width: ${spacer16};
			height: ${spacer16};
			border-radius: 50%;
			background-color: ${props.colorSet?.essential.default};
			padding: ${spacer2};
			display: flex;
			font-size: inherit;
			align-items: center;
			justify-content: center;
		`;
	}}
`;

export const DotStyled = styled(
	React.forwardRef<
		HTMLElement,
		Omit<BadgeProps, "iconLeading" | "iconTrailing" | "iconOnly">
	>(function Button(
		{ component: Component = "div", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			width: ${spacer8};
			height: ${spacer8};
			border-radius: 50%;
			background-color: ${props.colorSet?.essential.default};
			padding: ${spacer2};
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
			<>
				{badgeType === BadgeType.LABEL && (
					<LabelStyled
						ref={ref}
						component={component}
						aria-label={ariaLabel}
						aria-labelledby={ariaLabelledBy}
						colorSet={colorSet}
						badgeType={badgeType}
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
				)}
				{badgeType === BadgeType.COUNT && (
					<CountStyled
						ref={ref}
						component={component}
						aria-label={ariaLabel}
						aria-labelledby={ariaLabelledBy}
						colorSet={colorSet}
						badgeType={badgeType}
						{...props}
					>
						{children}
					</CountStyled>
				)}
				{badgeType === BadgeType.DOT && (
					<DotStyled
						ref={ref}
						component={component}
						aria-label={ariaLabel}
						aria-labelledby={ariaLabelledBy}
						colorSet={getColorSet(SemanticSetCores.NEGATIVE)}
						badgeType={badgeType}
						{...props}
					/>
				)}
			</>
		);
	}
);
