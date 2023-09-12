import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { DropdownData } from "..";
import useKeyPressOnDropdown from "./useKeyPressOnDropdown";

export default ({
	isMenuOpen,
	dataset,
	selectedItem,
	parent,
	setSelectedItem,
	onEnter,
}: {
	isMenuOpen: boolean;
	dataset: DropdownData[];
	selectedItem: DropdownData | null;
	parent: HTMLElement | null;
	setSelectedItem: Dispatch<SetStateAction<DropdownData | null>>;
	onEnter?: () => void;
}) => {
	// Accessibility keyboard
	const downPress = useKeyPressOnDropdown("ArrowDown", isMenuOpen);
	const upPress = useKeyPressOnDropdown("ArrowUp", isMenuOpen);
	const enterPress = useKeyPressOnDropdown("Enter", isMenuOpen);
	const [cursor, setCursor] = useState(0);
	const cursorRef = useRef<Array<HTMLElement | null>>([]);

	useEffect(() => {
		if (dataset.length && downPress) {
			setCursor((prevState) =>
				prevState < dataset.length - 1 ? prevState + 1 : prevState
			);

			if (parent && cursorRef && cursorRef.current) {
				const target = cursorRef.current[cursor];

				// 12 is padding height
				// 48 is line item height
				if (target!.offsetTop > parent.offsetHeight - 48 - 48) {
					parent.scrollTo({
						top: target!.offsetTop - parent.offsetHeight + 48 + 48 + 12,
					});
				}
			}
		}
	}, [downPress]);
	useEffect(() => {
		if (dataset.length && upPress) {
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));

			// if (parent && cursorRef && cursorRef.current) {
			// 	const target = cursorRef.current[cursor];

			// 	// 12 is padding height
			// 	// 48 is line item height
			// 	if (target!.offsetTop > parent.offsetHeight - 48) {
			// 		parent.scrollTo({
			// 			top: target!.offsetTop - parent.offsetHeight + 48 + 12,
			// 		});
			// 	} else {
			// 		// console.log("LOL", target.offsetTop, parent.offsetHeight);
			// 	}
			// }
		}
	}, [upPress]);
	useEffect(() => {
		if (dataset.length && enterPress) {
			setSelectedItem(dataset[cursor]);

			if (onEnter) {
				onEnter();
			}
		}
	}, [cursor, enterPress]);
	useEffect(() => {
		if (dataset.length && selectedItem) {
			setCursor(dataset.indexOf(selectedItem));
		}
	}, [selectedItem]);

	// Returned functionality needed to interact with state
	return { cursor, cursorRef };
};
