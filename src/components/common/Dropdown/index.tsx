import scrollToCursor from "@/components/common/Dropdown/utils/scrollToCursor";
import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes, spacer156, spacer320 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useEffect, useRef, useState } from "react";
import { FieldInputProps } from "react-final-form";
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
		 * @default SECONDARY
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
		/**
		 * Field input props
		 */
		input?: FieldInputProps<any, HTMLElement>;
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		dropdownSize?: Sizes;
	};

export default ({
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	disabled,
	placeholder,
	dataset,
	input,
	dropdownSize = Sizes.LARGE,
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

	// Select item (updates local and form state if passed in)
	const onSelect = (selectedItemDataset: DropdownData, value: string) => {
		setSelectedItem(selectedItemDataset); // Local display state
		input?.onChange?.(value); // Form state
		setIsMenuOpen(false);
	};

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
				onSelect(dataset[cursor], dataset[cursor].value);
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
				onBlur={(e) => {
					input?.onBlur(e);
				}}
				onKeyDown={onEnterPress}
				selectedItem={selectedItem}
				placeholder={placeholder}
				dropdownSize={dropdownSize}
			/>

			{/* Dropdown menu */}
			{isMenuOpen && (
				<Overlay
					placement={OverlayDirections.BOTTOM}
					width={dropdownSize === Sizes.LARGE ? spacer320 : spacer156}
				>
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
											onSelect(e, e.value);
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
