import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes, iconSizeMap, spacer24, spacer4 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import { styled } from "styled-components";

export type IconWrapperProps = Omit<StyledWrapperProps, "size"> &
	Pick<PseudoClassProps, "hover" | "active" | "focus"> & {
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
		 **/
		size: Sizes;
		/**
		 * Icon
		 **/
		icon: AsProp;
		/**
		 * Padding
		 **/
		padding?: string;
		/**
		 * Position trailing or leading
		 **/
		position?: IconPosition;
		/**
		 * Clicking on left icon
		 */
		onClickIconLeft?: (e: any) => void;
		/*
		 * Clicking on right icon
		 */
		onClickIconRight?: (e: any) => void;
		/*
		 * Disabled prevents onclick actions and pointer
		 */
		disabled?: boolean;
		/**
		 * Enables a background color per color set
		 */
		hasBackground?: boolean;
	};

export const Wrapper = styled(
	React.forwardRef<HTMLElement, Omit<IconWrapperProps, "icon">>(function Span(
		{ component: Component = "span", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	&:hover {
		cursor: ${(props) =>
			!props.disabled &&
			(props.onClick ||
				(props.onClickIconLeft && props.position === IconPosition.TRAILING) ||
				(props.onClickIconRight && props.position === IconPosition.LEADING))
				? "pointer"
				: "inherit"};
	}
	color: ${(props) =>
		props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
	background-color: ${(props) =>
		props.hasBackground ? props.colorSet?.essential.default : "transparent"};
	border-radius: ${spacer4};
	border: none;
	padding: 0;
	display: flex;
	justify-content: center;
	align-items: center;
	height: ${spacer24};
	width: ${spacer24};
	${(props) =>
		props.position === IconPosition.LEADING && `padding-left: ${props.padding}`}
	${(props) =>
		props.position === IconPosition.TRAILING &&
		`padding-right: ${props.padding}`}
`;

export enum IconPosition {
	BOTH = "BOTH",
	LEADING = "LEADING",
	TRAILING = "TRAILING",
	ONLY = "ONLY",
	NONE = "NONE",
}

export const getIconPosition = ({
	iconLeading,
	iconTrailing,
	iconOnly,
}: {
	iconLeading?: AsProp;
	iconTrailing?: AsProp;
	iconOnly?: AsProp;
}) => {
	if (iconLeading && iconTrailing) return IconPosition.BOTH;
	if (iconLeading) return IconPosition.LEADING;
	if (iconTrailing) return IconPosition.TRAILING;
	if (iconOnly) return IconPosition.ONLY;
	return IconPosition.NONE;
};

export const IconWrapper = ({
	onClickIconLeft,
	onClickIconRight,
	onClick: iconOnlyClick,
	colorSet = getColorSet(SemanticSetCores.BASE),
	component,
	position,
	padding,
	size,
	icon,
	disabled,
	hasBackground,
	onMouseDown,
}: IconWrapperProps) => {
	const Icon = icon;
	const iconSize = iconSizeMap[size];

	const onClick =
		iconOnlyClick ||
		(onClickIconLeft && position === IconPosition.TRAILING) ||
		(onClickIconRight && position === IconPosition.LEADING)
			? (e: any) => {
					if (onClickIconLeft && position === IconPosition.TRAILING)
						onClickIconLeft(e);
					if (onClickIconRight && position === IconPosition.LEADING)
						onClickIconRight(e);
					if (iconOnlyClick) iconOnlyClick(e);
			  }
			: undefined;

	return (
		<Wrapper
			colorSet={colorSet}
			onClick={onClick}
			onClickIconLeft={onClickIconLeft}
			onClickIconRight={onClickIconRight}
			component={component}
			position={position}
			size={size}
			padding={padding}
			aria-hidden="true"
			disabled={disabled}
			onMouseDown={onMouseDown}
			hasBackground={hasBackground}
		>
			<Icon
				style={{ fontSize: iconSize }}
				colorSet={colorSet}
				disabled={disabled}
			/>
		</Wrapper>
	);
};
