import { Sizes, iconSizeMap, spacer24 } from "@/styles/sizes";
import { AsProp } from "@/utils/typeHelpers";
import { styled } from "styled-components";

interface IconWrapperProps {
	size: Sizes;
	icon: AsProp;
	padding?: string;
	position?: IconPosition;
}

const Wrapper = styled.span<Omit<IconWrapperProps, "icon">>`
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
	position,
	padding,
	size,
	icon,
}: IconWrapperProps) => {
	const Icon = icon;
	const iconSize = iconSizeMap[size];

	return (
		<Wrapper
			position={position}
			size={size}
			padding={padding}
			aria-hidden="true"
		>
			<Icon style={{ fontSize: iconSize }} />
		</Wrapper>
	);
};
