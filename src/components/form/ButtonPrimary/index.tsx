import { SemanticEssentialColors, semanticColorToHex } from "@/styles/colors";
import { Sizes, minBlockSizeMap } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled from "styled-components";
import { ButtonIconPosition, IconButtonWrapper } from "./IconButtonWrapper";

export type ButtonPrimaryProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: SemanticEssentialColors;
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

const ButtonStyled = styled(
	React.forwardRef<HTMLElement, ButtonPrimaryProps>(function Button(
		{ component: Component = "button", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	min-block-size: ${(props) => minBlockSizeMap[props.size!]};
	border: none;
	background-color: ${(props) => semanticColorToHex(props.colorSet!)};
	display: flex;
	font-size: inherit;
	align-items: center;
	justify-content: center;

	& focus: {
		border: solid 1px black;
	}
`;

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	(
		{
			colorSet = SemanticEssentialColors.ESSENTIAL_BRIGHT_ACCENT,
			component,
			size = Sizes.MEDIUM,
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
				{...props}
			>
				{renderIcon(ButtonIconPosition.LEADING, iconLeading)}
				{renderIcon(ButtonIconPosition.ONLY, iconOnly)}
				{!iconOnly && children}
				{renderIcon(ButtonIconPosition.TRAILING, iconTrailing)}
			</ButtonStyled>
		);
	}
);
