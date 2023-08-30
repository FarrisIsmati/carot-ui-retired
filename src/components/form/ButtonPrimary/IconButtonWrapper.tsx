import {
	Sizes,
	iconButtonPaddingMap,
	iconSizeMap,
	minBlockSizeMap,
} from "@/styles/sizes";
import { AsProp, pxToInt } from "@/utils/typeHelpers";
import { styled } from "styled-components";

interface IconWrapperProps {
	position?: ButtonIconPosition;
	size: Sizes;
	icon: AsProp;
}

const Wrapper = styled.span<
	Omit<IconWrapperProps, "icon"> & { iconSize: string }
>`
	${({ size, iconSize, position }) => {
		const iconPaddingPx = iconButtonPaddingMap[size];
		const iconOnlyPosition =
			(pxToInt(minBlockSizeMap[size]) - pxToInt(iconSize)) / 2;

		return `
            display: flex;
            position: absoulte;

            ${
							position === ButtonIconPosition.ONLY &&
							`
                top: ${iconOnlyPosition}px;
                left: ${iconOnlyPosition}px;
            `
						}

            ${
							position === ButtonIconPosition.LEADING &&
							`left: ${iconPaddingPx}`
						}
            ${
							position === ButtonIconPosition.TRAILING &&
							`right: ${iconPaddingPx}`
						}
        `;
	}}
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
			? "28px"
			: iconSizeMap[size];

	return (
		<Wrapper
			position={position}
			size={size}
			iconSize={iconSize}
			aria-hidden="true"
		>
			<Icon iconSize={iconSize} />
		</Wrapper>
	);
};
