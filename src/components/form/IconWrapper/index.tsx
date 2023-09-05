import { Sizes, iconSizeMap, spacer24 } from "@/styles/sizes";
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
		cursor: pointer;
		${(props) =>
			((props.onClickIconLeft && props.position === IconPosition.TRAILING) ||
				(props.onClickIconRight && props.position === IconPosition.LEADING)) &&
			"cursor: pointer"}
	}
	border: none;
	padding: 0;
	background-color: inherit;
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
	if (iconLeading) return IconPosition.LEADING;
	if (iconTrailing) return IconPosition.TRAILING;
	if (iconOnly) return IconPosition.ONLY;
	return IconPosition.NONE;
};

export const IconWrapper = ({
	onClickIconLeft,
	onClickIconRight,
	component,
	position,
	padding,
	size,
	icon,
}: IconWrapperProps) => {
	const Icon = icon;
	const iconSize = iconSizeMap[size];

	return (
		<Wrapper
			onClick={(e: any) => {
				console.log("HERE");
				if (onClickIconLeft && position === IconPosition.TRAILING)
					onClickIconLeft(e);
				if (onClickIconRight && position === IconPosition.LEADING)
					onClickIconRight(e);
			}}
			component={onClickIconLeft || onClickIconRight ? "button" : component}
			position={position}
			size={size}
			padding={padding}
			aria-hidden="true"
		>
			<Icon style={{ fontSize: iconSize }} />
		</Wrapper>
	);
};
