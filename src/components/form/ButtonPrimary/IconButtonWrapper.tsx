import {
	Sizes,
	iconButtonPaddingMap,
	iconSizeMap,
	spacer24,
} from "@/styles/sizes";
import { AsProp } from "@/utils/typeHelpers";
import { styled } from "styled-components";

interface IconWrapperProps {
	position?: ButtonIconPosition;
	size: Sizes;
	icon: AsProp;
}

const Wrapper = styled.span<Omit<IconWrapperProps, "icon">>`
	display: flex;

	${(props) =>
		props.position === ButtonIconPosition.LEADING &&
		`padding-left: ${iconButtonPaddingMap[props.size]}`}
	${(props) =>
		props.position === ButtonIconPosition.TRAILING &&
		`padding-right: ${iconButtonPaddingMap[props.size]}`}
`;

export enum ButtonIconPosition {
	LEADING = "LEADING",
	TRAILING = "TRAILING",
	ONLY = "ONLY",
}

export const IconButtonWrapper = ({
	position,
	size,
	icon,
}: IconWrapperProps) => {
	const Icon = icon;
	const iconSize =
		position === ButtonIconPosition.ONLY && size === Sizes.LARGE
			? spacer24
			: iconSizeMap[size];

	console.log(position);
	return (
		<Wrapper position={position} size={size} aria-hidden="true">
			<Icon style={{ fontSize: iconSize }} />
		</Wrapper>
	);
};
