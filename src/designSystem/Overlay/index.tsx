import { spacer320, spacer8 } from "@/styles/sizes";
import { StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { css, styled } from "styled-components";
import { OverlayPortal } from "./OverlayPortal";

export enum OverlayDirections {
	BOTTOM = "BOTTOM",
}

export type OverlayTriggerProps = StyledWrapperProps & {
	/**
	 * Where overlay will appear in relation to its targer
	 */
	placement?: OverlayDirections;
	/**
	 * If true rendered in react portal
	 */
	withPortal?: boolean;
	/**
	 * Functionality to hide overlay content
	 */
	closeOverlay?: (e: Event) => void;
	/**
	 * Width
	 */
	width?: string;
};

const Trigger = styled.span`
	display: inline-flex;
	position: absolute;
`;

const OverlayStyled = styled.div<OverlayTriggerProps>`
	display: flex;
	pointer-events: none;
	position: absolute;
	width: ${(props) => (props.width ? props.width : spacer320)};

	${(props) =>
		props.placement === OverlayDirections.BOTTOM &&
		css`
			justify-content: center;
			/* left: 50%;
			top: 100%; */
			transform: translate(0%, ${spacer8});
		`}
`;

const Overlay = React.forwardRef<HTMLElement, OverlayTriggerProps>(
	function OverlayTriggerComponent(
		{ children, placement, withPortal, closeOverlay, width, ...props },
		ref
	) {
		return (
			<Trigger {...props} ref={ref}>
				{withPortal && typeof ref !== "function" && ref?.current ? (
					<OverlayPortal
						overlayPosition={ref.current.getBoundingClientRect()}
						closeOverlay={closeOverlay}
					>
						<OverlayStyled placement={placement} width={width}>
							{children}
						</OverlayStyled>
					</OverlayPortal>
				) : (
					<OverlayStyled placement={placement} width={width}>
						{children}
					</OverlayStyled>
				)}
			</Trigger>
		);
	}
);

export default Overlay;
