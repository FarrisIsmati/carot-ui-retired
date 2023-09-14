import scrollToCursor from "@/components/common/Dropdown/utils/scrollToCursor";
import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { spacer320 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useEffect, useRef, useState } from "react";
import Overlay, { OverlayDirections } from "../Overlay";
import DropdownItem from "./DropdownItem";
import { DropdownList } from "./DropdownList";
import DropdownTrigger from "./DropdownTrigger";
import useNavigateDropdown from "./hooks/useNavigateDropdown";
import useOffClick from "./hooks/useOffClick";
import { DropdownData } from "./types";

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
		 * @default 'SECONDARY
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
	// Dropdown
	const dropdownRef = useRef(null);
	// Dropdown trigger
	const dropdownTriggerRef = useRef(null);
	// Dropdown menu
	const dropdownListRef = useRef(null);
	// State
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Open/close menu
	const [selectedItem, setSelectedItem] = useState<DropdownData | null>(null); // Actively used
	const [hoveredItem, setHoveredItem] = useState<DropdownData | null>(null); // Mouse hover state (not key cursor state)
	// Add error state if error text included
	if (!error && errorText) {
		error = true;
	}

	//
	// Hooks
	//

	// Use keys to navigate dropdown
	const { cursor, setCursor, cursorRef } = useNavigateDropdown({
		isMenuOpen,
		dataset,
		parent: dropdownListRef.current,
		focusEl: dropdownTriggerRef.current,
	});

	// Close menu when clicking off
	useOffClick(dropdownRef, () => setIsMenuOpen(false));

	useEffect(() => {
		// Scroll to selected item if menu is open
		if (isMenuOpen) {
			scrollToCursor({
				parent: dropdownListRef.current,
				cursor,
				cursorRef,
			});
		} else {
			// Reset cursor when menu closed
			if (selectedItem) {
				setCursor(dataset.findIndex((item) => item.id === selectedItem?.id));
			} else {
				setCursor(0);
			}
		}
	}, [isMenuOpen]);

	// On enter key press
	const onEnterPress = (e: React.KeyboardEvent<any>) => {
		if (e.key === "Enter" && e.target === document.activeElement) {
			// Open menu if focused and hitting enter key
			if (!isMenuOpen) {
				setIsMenuOpen(true);
			}
			// Close menu if focused and hitting enter key to select item
			if (isMenuOpen) {
				setSelectedItem(dataset[cursor]);
				setIsMenuOpen(false);
			}
		}
	};

	return (
		<div ref={dropdownRef}>
			{/* Button triggers dropdown to open */}
			<DropdownTrigger
				ref={dropdownTriggerRef}
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
				onKeyDown={onEnterPress}
				selectedItem={selectedItem}
				placeholder={placeholder}
			/>

			{/* Dropdown menu */}
			{isMenuOpen && (
				<Overlay placement={OverlayDirections.BOTTOM} width={spacer320}>
					{
						<DropdownList ref={dropdownListRef}>
							{dataset.map((e, i) => {
								return (
									<DropdownItem
										ref={(el) => (cursorRef.current[i] = el)}
										key={e.id}
										onClick={() => {
											if (disabled) {
												return;
											}
											setSelectedItem(e);
											setIsMenuOpen(false);
										}}
										active={
											e.id === selectedItem?.id ||
											e.id === hoveredItem?.id ||
											i === cursor
										}
										colorSet={colorSet}
										onMouseEnter={() => setHoveredItem(e)}
										onMouseLeave={() => setHoveredItem(null)}
									>
										{e.value}
									</DropdownItem>
								);
							})}
						</DropdownList>
					}
				</Overlay>
			)}
		</div>
	);
};
