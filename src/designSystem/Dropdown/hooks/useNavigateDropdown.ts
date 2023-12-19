import scrollToCursor from "@/designSystem/Dropdown/utils/scrollToCursor";
import { useEffect, useRef, useState } from "react";
import useKeyPress from "../../hooks/useKeyPress";
import { DropdownData, PressType } from "../types";

const useNavigateDropdown = ({
	isMenuOpen,
	dataset,
	parent,
	focusEl,
	disabled,
}: {
	isMenuOpen: boolean;
	dataset: DropdownData<any>[];
	parent: HTMLElement | null;
	focusEl: HTMLElement | null; // element you want to perform enter action on while in focus
	disabled?: boolean;
}) => {
	// State/ref
	const [cursor, setCursor] = useState(0);
	const cursorRef = useRef<Array<HTMLElement | null>>([]);
	// Key press state
	const downPress = useKeyPress("ArrowDown", isMenuOpen);
	const upPress = useKeyPress("ArrowUp", isMenuOpen);

	// Key down press
	useEffect(() => {
		if (
			dataset.length &&
			focusEl === document.activeElement &&
			isMenuOpen &&
			downPress &&
			!disabled
		) {
			let skip = false;
			// Navigate cursor down
			setCursor((prevCursor) => {
				// TODO IMPLEMENT SCAN TO LOOK AHEAD AT ALL OPTIONS
				const nextCursor =
					prevCursor < dataset.length - 1 ? prevCursor + 1 : prevCursor;
				if (dataset[nextCursor].disabled) {
					skip = true;
					return prevCursor;
				}
				return nextCursor;
			});
			if (!skip) {
				// Scroll to current cursor
				scrollToCursor({
					parent,
					cursor,
					cursorRef,
					press: PressType.DOWN,
				});
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [downPress, isMenuOpen]);

	// Key up press
	useEffect(() => {
		if (
			dataset.length &&
			focusEl === document.activeElement &&
			isMenuOpen &&
			upPress &&
			!disabled
		) {
			let skip = false;

			// Navigate cursor up
			setCursor((prevCursor) => {
				// TODO IMPLEMENT SCAN TO LOOK AHEAD AT ALL OPTIONS
				const nextCursor = prevCursor > 0 ? prevCursor - 1 : prevCursor;
				if (dataset[nextCursor].disabled) {
					skip = true;
					return prevCursor;
				}
				return nextCursor;
			});
			if (!skip) {
				// Scroll to current cursor
				scrollToCursor({ parent, cursor, cursorRef, press: PressType.UP });
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [upPress, isMenuOpen]);

	// Returned functionality needed to interact with state
	return { cursor, setCursor, cursorRef };
};

export default useNavigateDropdown;
