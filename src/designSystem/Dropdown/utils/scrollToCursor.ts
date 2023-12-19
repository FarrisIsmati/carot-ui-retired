import { MutableRefObject } from "react";
import { PressType } from "../types";

const scrollToCursor = ({
	parent,
	cursor,
	cursorRef,
	press,
}: {
	parent: HTMLElement | null; // Parent element that has scroll event
	cursor: number; // Index of targeted element
	cursorRef: MutableRefObject<(HTMLElement | null)[]>; // Ref of targeted element
	press?: PressType; // Up or down press
}) => {
	if (parent && cursorRef && cursorRef.current) {
		const target = cursorRef.current[cursor];

		// Get bounds of parent element
		const parentTop = parent?.scrollTop;
		const parentBottom = parent?.scrollTop + parent?.offsetHeight;

		// Get bounds of target element
		const targetTop = target!.offsetTop;
		const targetBottom = targetTop + target!.offsetHeight;

		// Find if target in view of parent (on down/up press)
		let inView = false;
		if (press === PressType.DOWN || !press) {
			inView = targetTop > parentTop && targetBottom + 48 < parentBottom;
		}
		if (press === PressType.UP) {
			inView = targetTop > parentTop + 48 + 12 && targetBottom < parentBottom;
		}

		// If target is not in view perform scroll action
		if (!inView) {
			let top = 0;
			if (press === PressType.DOWN) {
				top = target!.offsetTop - parent.offsetHeight + 96 + 12;
			}
			if (press === PressType.UP) {
				top = target!.offsetTop - 12 - 96;
			}

			if (press) {
				// Scroll on press up/down
				parent.scrollTo({
					top,
					behavior: "smooth",
				});
			} else {
				// Scroll when opening the menu and cursor is out of view
				parent.scrollTo({ top: target?.offsetTop });
			}
		}
	}
};

export default scrollToCursor;
