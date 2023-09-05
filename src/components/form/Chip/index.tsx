import {
	ColorBaseCore,
	ColorSet,
	SemanticSetCores,
	colorToHex,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import {
	Sizes,
	spacer10,
	spacer12,
	spacer2,
	spacer4,
	spacer6,
} from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper, getIconPosition } from "../IconWrapper";

export type ChipProps = StyledWrapperProps & {
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
	 * Chose one of three button sizes
	 * @default 'medium
	 **/
	size?: Sizes;
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
	/**
	 * Clicking on left icon
	 */
	onClickIconLeft?: (e: any) => void;
	/*
	 * Clicking on right icon
	 */
	onClickIconRight?: (e: any) => void;
};

const chipPadding = (size: Sizes, iconPosition: IconPosition) => {
	if (size === Sizes.LARGE || size === Sizes.MEDIUM) {
		if (iconPosition === IconPosition.LEADING)
			return `${spacer6} ${spacer6} ${spacer6} ${spacer12}`;
		if (iconPosition === IconPosition.TRAILING)
			return `${spacer6} ${spacer12} ${spacer6} ${spacer6}`;
		if (iconPosition === IconPosition.ONLY) return spacer6;
		if (iconPosition === IconPosition.NONE) return `${spacer10} ${spacer12}`;
	}

	if (size === Sizes.SMALL) {
		if (iconPosition === IconPosition.LEADING)
			return `${spacer2} ${spacer4} ${spacer2} ${spacer12}`;
		if (iconPosition === IconPosition.TRAILING)
			return `${spacer2} ${spacer12} ${spacer2} ${spacer4}`;
		if (iconPosition === IconPosition.ONLY) return spacer4;
		if (iconPosition === IconPosition.NONE) return `${spacer6} ${spacer12}`;
	}
};

export const ChipStyled = styled(
	React.forwardRef<HTMLElement, ChipProps>(function Chip(
		{ component: Component = "span", ...props },
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
			padding: ${chipPadding(
				props.size!,
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

			&:disabled {
				background-color: ${props.colorSet?.essential.disabled};
				color: ${props.colorSet?.text.disabled};
			}

			&:hover:not([disabled]) {
				background-color: ${props.colorSet?.essential.hover};
			}

			&:focus:not([disabled]) {
				outline: ${spacer2} solid ${colorToHex(ColorBaseCore.BLACK)};
				background-color: ${props.colorSet?.essential.focus};
			}

			&:active:not([disabled]) {
				background-color: ${props.colorSet?.essential.active};
			}
		`;
	}}
`;

export default React.forwardRef<HTMLElement, ChipProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			component,
			iconLeading,
			iconTrailing,
			iconOnly,
			children,
			onClickIconLeft,
			onClickIconRight,
			size = Sizes.LARGE,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		const renderIcon = (position: IconPosition, icon?: AsProp) =>
			icon && (
				<IconWrapper
					onClickIconLeft={onClickIconLeft}
					onClickIconRight={onClickIconRight}
					icon={icon}
					position={position}
					padding={spacer2}
					size={Sizes.SMALL}
				/>
			);

		return (
			<ChipStyled
				ref={ref}
				component={component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				size={size}
				iconLeading={iconLeading}
				iconTrailing={iconTrailing}
				iconOnly={iconOnly}
				{...props}
			>
				{renderIcon(IconPosition.TRAILING, iconTrailing)}
				{renderIcon(IconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</ChipStyled>
		);
	}
);
