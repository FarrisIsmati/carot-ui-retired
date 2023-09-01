import { Sizes, iconSizeMap, spacer28 } from "@/styles/sizes";
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

export const IconWrapper = ({
	position,
	padding,
	size,
	icon,
}: IconWrapperProps) => {
	const Icon = icon;
	const iconSize =
		position === IconPosition.ONLY && size === Sizes.LARGE
			? spacer28
			: iconSizeMap[size];

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
