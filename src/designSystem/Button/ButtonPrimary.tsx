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
	spacer16,
	spacer18,
	spacer2,
	spacer20,
	spacer24,
	spacer8,
} from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { IconPosition, IconWrapper, getIconPosition } from "../IconWrapper";

export type ButtonPrimaryProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'PRIMARY'
		 **/
		colorSet?: ColorSet;
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
		/**
		 * Chose one of three button sizes
		 * @default 'medium
		 **/
		size?: Sizes;
		/**
		 * Stretch full width of parent
		 **/
		fullWidth?: boolean;
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

export const iconButtonPaddingMap = {
	[Sizes.SMALL]: spacer8,
	[Sizes.MEDIUM]: spacer8,
	[Sizes.LARGE]: spacer8,
};

const buttonIconPadding = (size: Sizes, iconPosition: IconPosition) => {
	if (size === Sizes.LARGE || size === Sizes.MEDIUM) {
		if (iconPosition === IconPosition.LEADING)
			return `${spacer16} ${spacer20} ${spacer16} ${spacer24}`;
		if (iconPosition === IconPosition.TRAILING)
			return `${spacer16} ${spacer24} ${spacer16} ${spacer20}`;
		if (iconPosition === IconPosition.ONLY) return spacer16;
		if (iconPosition === IconPosition.NONE) return `${spacer18} ${spacer24}`;
	}
	if (size === Sizes.SMALL) {
		if (iconPosition === IconPosition.LEADING)
			return `${spacer8} ${spacer8} ${spacer8} ${spacer12}`;
		if (iconPosition === IconPosition.TRAILING)
			return `${spacer8} ${spacer12} ${spacer8} ${spacer8}`;
		if (iconPosition === IconPosition.ONLY) return spacer8;
		if (iconPosition === IconPosition.NONE) return `${spacer10} ${spacer16}`;
	}
};

export const ButtonStyled = styled(
	React.forwardRef<HTMLElement, ButtonPrimaryProps>(function Button(
		{ component: Component = "button", colorSet, size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.labelLarge}
			color: ${props.colorSet?.text.default};
			border: none;
			background-color: ${props.colorSet?.essential.default};
			padding: ${buttonIconPadding(
				props.size!,
				getIconPosition({
					iconLeading: props.iconLeading,
					iconTrailing: props.iconTrailing,
					iconOnly: props.iconOnly,
				})
			)};
			border-radius: ${spacer8};
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
				cursor: pointer;
			}

			&:focus:not([disabled]) {
				outline: ${spacer2} solid ${colorToHex(ColorBaseCore.BLACK)};
				background-color: ${props.colorSet?.essential.focus};
			}

			&:active:not([disabled]) {
				background-color: ${props.colorSet?.essential.active};
				cursor: pointer;
			}
		`;
	}}
`;

const ButtonPrimary = React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.PRIMARY),
			component,
			size = Sizes.LARGE,
			fullWidth,
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
					size={size}
					padding={iconButtonPaddingMap[size]}
				/>
			);

		return (
			<ButtonStyled
				ref={ref}
				component={!component && props.href ? "a" : component}
				onMouseDown={(e: React.MouseEvent<any, MouseEvent>) =>
					e.preventDefault()
				}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				size={size}
				iconLeading={iconLeading}
				iconTrailing={iconTrailing}
				iconOnly={iconOnly}
				fullWidth={fullWidth}
				onClick={(e: any) => {
					e.preventDefault();
					e.target.blur();
				}}
				{...props}
			>
				{renderIcon(IconPosition.TRAILING, iconTrailing)}
				{renderIcon(IconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(IconPosition.LEADING, iconLeading)}
			</ButtonStyled>
		);
	}
);

export default ButtonPrimary;
