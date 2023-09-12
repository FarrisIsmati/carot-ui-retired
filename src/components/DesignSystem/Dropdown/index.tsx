import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { spacer320 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useEffect, useRef, useState } from "react";
import Overlay, { OverlayDirections } from "../Overlay";
import DropdownItem from "./DropdownItem";
import { DropdownList } from "./DropdownList";
import DropdownTrigger from "./DropdownTrigger";
import useKeyPress from "./hooks/useKeyPress";
import useOffClick from "./hooks/useOffClick";

export interface DropdownData {
	value: string;
	id: string;
}

export type DropdownProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * If true adds styling to indicate error state
		 */
		error?: boolean;
		/**
		 * Label title
		 */
		label?: string;
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
		/**
		 * Text to display for an error state
		 */
		errorText?: string;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
		/**
		 * Dropdown data
		 */
		dataset: DropdownData[];
	};

export default ({
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	disabled,
	placeholder,
	dataset,
}: DropdownProps) => {
	const dropdownRef = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<DropdownData | null>(null);

	// Handle event when clicking off ref
	useOffClick(dropdownRef, () => setIsMenuOpen(false));

	// Add error state if error text included
	if (!error && errorText) {
		error = true;
	}

	// Accessibility keyboard
	const downPress = useKeyPress("ArrowDown");
	const upPress = useKeyPress("ArrowUp");
	const enterPress = useKeyPress("Enter");
	const [cursor, setCursor] = useState(0);
	const [hovered, setHovered] = useState(undefined);

	useEffect(() => {
		if (dataset.length && downPress) {
			setCursor((prevState) =>
				prevState < dataset.length - 1 ? prevState + 1 : prevState
			);
		}
	}, [downPress]);
	useEffect(() => {
		if (dataset.length && upPress) {
			setCursor((prevState) => (prevState > 0 ? prevState - 1 : prevState));
		}
	}, [upPress]);
	useEffect(() => {
		if (dataset.length && enterPress) {
			setSelectedItem(dataset[cursor]);
		}
	}, [cursor, enterPress]);
	useEffect(() => {
		if (dataset.length && hovered) {
			setCursor(dataset.indexOf(hovered));
		}
	}, [hovered]);

	return (
		<div ref={dropdownRef}>
			<DropdownTrigger
				label={label}
				colorSet={colorSet}
				error={error}
				errorText={errorText}
				disabled={disabled}
				isMenuOpen={isMenuOpen}
				onClickMenu={() => {
					if (disabled) {
						return;
					}
					setIsMenuOpen(!isMenuOpen);
				}}
				selectedItem={selectedItem}
				placeholder={placeholder}
			/>

			{isMenuOpen && (
				<Overlay placement={OverlayDirections.BOTTOM} width={spacer320}>
					{
						<DropdownList>
							{dataset.map((e) => (
								<DropdownItem
									key={e.id}
									onClick={() => {
										if (disabled) {
											return;
										}
										setSelectedItem(e);
										setIsMenuOpen(false);
									}}
								>
									{e.value}
								</DropdownItem>
							))}
						</DropdownList>
					}
				</Overlay>
			)}
		</div>
	);
};
