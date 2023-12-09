import { StyledWrapperProps } from "@/utils/typeHelpers";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import { styled } from "styled-components";

export type OverlayPosition = {
	width: number;
	height: number;
	top: number;
	left: number;
};

export type OverlayPortalProps = StyledWrapperProps & {
	/**
	 * Close the overlay
	 */
	closeOverlay?: (e: Event) => void;
	/**
	 * Position of the content inside of the overlay portal
	 */
	overlayPosition: OverlayPosition;
};

const OverlayPortalContainer = styled.div<{ overlayPosition: OverlayPosition }>`
	position: fixed;
	top: ${(props) => props.overlayPosition.top}px;
	left: ${(props) => props.overlayPosition.left}px;
	width: ${(props) => props.overlayPosition.width}px;
	height: ${(props) => props.overlayPosition.height}px;
	pointer-events: none;
	z-index: 1060;
`;

export const OverlayPortal = ({
	overlayPosition = { width: 0, height: 0, top: 0, left: 0 },
	closeOverlay,
	...props
}: OverlayPortalProps) => {
	useEffect(() => {
		if (!closeOverlay) {
			return () => {};
		}
		window.addEventListener("scroll", closeOverlay, true);

		return () => {
			window.removeEventListener("scroll", closeOverlay, true);
		};
	}, [closeOverlay]);

	return ReactDOM.createPortal(
		<OverlayPortalContainer overlayPosition={overlayPosition} {...props} />,
		document.body
	);
};
