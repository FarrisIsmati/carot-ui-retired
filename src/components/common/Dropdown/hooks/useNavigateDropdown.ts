import scrollToCursor from "@/components/common/Dropdown/utils/scrollToCursor";
import { useEffect, useRef, useState } from "react";
import useKeyPress from "../../hooks/useKeyPress";
import { DropdownData, PressType } from "../types";

export default ({
	isMenuOpen,
	dataset,
	parent,
	focusEl,
}: {
	isMenuOpen: boolean;
	dataset: DropdownData[];
	parent: HTMLElement | null;
	focusEl: HTMLElement | null; // element you want to perform enter action on while in focus
}) => {
	// State/ref
	const [cursor, setCursor] = useState(0);
	const cursorRef = useRef<Array<HTMLElement | null>>([]);
	// Key press state
	const downPress = useKeyPress("ArrowDown", isMenuOpen);
	const upPress = useKeyPress("ArrowUp", isMenuOpen);
	const enterPress = useKeyPress("Enter", isMenuOpen);

	// Key down press
	useEffect(() => {
		if (
			dataset.length &&
			focusEl === document.activeElement &&
			isMenuOpen &&
			downPress
		) {
			// Navigate cursor down
			setCursor((prevState) =>
				prevState < dataset.length - 1 ? prevState + 1 : prevState
			);
			// Scroll to current cursor
			scrollToCursor({
				parent,
				cursor,
				cursorRef,
				press: PressType.DOWN,
			});
		}
	}, [downPress, isMenuOpen]);

	// Key up press
	useEffect(() => {
		if (
			dataset.length &&
			focusEl === document.activeElement &&
			isMenuOpen &&
			upPress
		) {
			// Navigate cursor up
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
			// Scroll to current cursor
			scrollToCursor({ parent, cursor, cursorRef, press: PressType.UP });
		}
	}, [upPress, isMenuOpen]);

	// Returned functionality needed to interact with state
	return { cursor, setCursor, cursorRef };
};
