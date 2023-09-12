import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useEffect,
	useRef,
	useState,
} from "react";
import { DropdownData } from "..";
import useKeyPressOnDropdown from "./useKeyPressOnDropdown";

enum PressType {
	DOWN = "DOWN",
	UP = "UP",
}

export const scrollToTarget = ({
	parent,
	cursor,
	cursorRef,
	press,
}: {
	parent: HTMLElement | null;
	cursor: number;
	cursorRef: MutableRefObject<(HTMLElement | null)[]>;
	press?: PressType;
}) => {
	if (parent && cursorRef && cursorRef.current) {
		const target = cursorRef.current[cursor];

		const parentTop = parent?.scrollTop;
		const parentBottom = parent?.scrollTop + parent?.offsetHeight;

		const targetTop = target!.offsetTop;
		const targetBottom = targetTop + target!.offsetHeight;

		let inView = false;
		if (press === PressType.DOWN || !press) {
			inView = targetTop > parentTop && targetBottom + 48 < parentBottom;
		}
		if (press === PressType.UP) {
			inView = targetTop > parentTop + 48 + 12 && targetBottom < parentBottom;
		}

		if (!inView) {
			let top = 0;
			if (press === PressType.DOWN) {
				top = target!.offsetTop - parent.offsetHeight + 96 + 12;
			}
			if (press === PressType.UP) {
				top = target!.offsetTop - 12 - 96;
			}

			if (press) {
				parent.scrollTo({
					top,
					behavior: "smooth",
				});
			} else {
				parent.scrollTo({ top: target?.offsetTop });
			}
		}
	}
};

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
			scrollToTarget({ parent, cursor, cursorRef, press: PressType.DOWN });
		}
	}, [downPress]);
	useEffect(() => {
		if (dataset.length && upPress) {
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
			scrollToTarget({ parent, cursor, cursorRef, press: PressType.UP });
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
