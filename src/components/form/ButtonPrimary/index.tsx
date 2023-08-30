import { SemanticEssentialColors } from "@/styles/colors";
import { Sizes } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled from "styled-components";

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
	};

const ButtonStyled = styled(
	React.forwardRef<
		HTMLElement,
		ButtonPrimaryProps & { buttonSize: Sizes; fullWidth?: boolean }
	>(function Button({ component: Component = "button", ...props }, ref) {
		return <Component {...props} ref={ref} />;
	})
)``;

export default React.forwardRef<HTMLElement, ButtonPrimaryProps>(
	({
		colorSet = SemanticEssentialColors.ESSENTIAL_BRIGHT_ACCENT,
		component,
		size = Sizes.MEDIUM,
		fullWidth,
		iconLeading,
		iconTrailing,
		"aria-label": ariaLabel,
		"aria-labelledby": ariaLabelledBy,
		...props
	}) => {
		return <ButtonStyled {...props}></ButtonStyled>;
	}
);
