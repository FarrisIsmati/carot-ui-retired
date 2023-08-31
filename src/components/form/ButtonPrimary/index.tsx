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
	buttonPaddingMap,
	minBlockSizeMap,
	spacer2,
	spacer8,
} from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import { ButtonIconPosition, IconButtonWrapper } from "./IconButtonWrapper";

export type ButtonPrimaryProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
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
			min-block-size: ${minBlockSizeMap[props.size!]};
			border: none;
			background-color: ${props.colorSet?.essential.default};
			padding: ${buttonPaddingMap[props.size!]};
			border-radius: ${spacer8};
			display: flex;
			font-size: inherit;
			align-items: center;
			justify-content: center;

			&:disabled {
				background-color: ${props.colorSet?.essential.disabled};
			}

			&:hover:not([disabled]) {
				background-color: ${props.colorSet?.essential.hover};
				cursor: pointer;
			}

			&:focus:not([disabled]) {
				outline: ${spacer2} solid ${colorToHex(ColorBaseCore.BLACK)};
			}

			&:active:not([disabled]) {
				background-color: ${props.colorSet?.essential.active};
				cursor: pointer;
			}
		`;
	}}
`;

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
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
		const renderIcon = (position: ButtonIconPosition, icon?: AsProp) =>
			icon && <IconButtonWrapper icon={icon} position={position} size={size} />;

		return (
			<ButtonStyled
				ref={ref}
				component={!component && props.href ? "a" : component}
				aria-label={ariaLabel}
				aria-labelledby={ariaLabelledBy}
				colorSet={colorSet}
				size={size}
				fullWidth={fullWidth}
				onClick={(e: any) => {
					e.target.blur();
				}}
				{...props}
			>
				{renderIcon(ButtonIconPosition.TRAILING, iconTrailing)}
				{renderIcon(ButtonIconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(ButtonIconPosition.LEADING, iconLeading)}
			</ButtonStyled>
		);
	}
);
