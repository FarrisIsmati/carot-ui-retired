import scrollToCursor from "@/designSystem/Dropdown/utils/scrollToCursor";
import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes, spacer156, spacer320 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useEffect, useRef, useState } from "react";
import Overlay, { OverlayDirections } from "../Overlay";
import DropdownItem from "./DropdownItem";
import { DropdownList } from "./DropdownList";
import DropdownTriggerSelect from "./DropdownTriggerSelect";
import useNavigateDropdown from "./hooks/useNavigateDropdown";
import useOffClick from "./hooks/useOffClick";
import { StyledContainer } from "./styles";
import { DropdownData } from "./types";

export type DropdownSelectProps = Omit<StyledWrapperProps, "label"> &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default SECONDARY
		 **/
		colorSet?: ColorSet;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
		/**
		 * Dropdown data
		 */
		dataset: DropdownData<any>[];
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		dropdownSize?: Sizes;
		/**
		 * On select
		 */
		onselect?: (value: DropdownData<any>) => void;
		/**
		 * Is feature completely locked (demo purposes)
		 */
		islocked?: boolean;
		/**
		 * If true adds styling to indicate error state
		 */
		error?: boolean;
		/**
		 * Text to display for an error state
		 */
		errorText?: string;
	};

const DropdownSelect = ({
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	disabled,
	placeholder,
	dataset,
	onselect,
	islocked,
	dropdownSize = Sizes.LARGE,
	error,
	errorText,
}: DropdownSelectProps) => {
	// Dropdown
	const dropdownRef = useRef(null);

	// Dropdown trigger
	const dropdownTriggerRef = useRef(null);

	// Dropdown menu
	const dropdownListRef = useRef(null);

	// State
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Open/close menu
	const [selectedItem, setSelectedItem] = useState<DropdownData<any> | null>(
		null
	); // Actively used
	const [hoveredItem, setHoveredItem] = useState<DropdownData<any> | null>(
		null
	); // Mouse hover state (not key cursor state)

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
		disabled: disabled || islocked,
		parent: dropdownListRef.current,
		focusEl: dropdownTriggerRef.current,
	});

	// Close menu when clicking off
	useOffClick(dropdownRef, () => setIsMenuOpen(false));

	// Select item (updates local and form state if passed in)
	const onSelect = (selectedItemDataset: DropdownData<any>, value: string) => {
		onselect?.(selectedItemDataset);
		setSelectedItem(selectedItemDataset); // Local display state
		setIsMenuOpen(false);
	};

	useEffect(() => {
		// Scroll to selected item if menu is open
		if (isMenuOpen && dataset.length) {
			scrollToCursor({
				parent: dropdownListRef.current,
				cursor,
				cursorRef,
			});
		} else {
			// Reset cursor when menu closed
			if (dataset.length && selectedItem) {
				setCursor(dataset.findIndex((item) => item.id === selectedItem?.id));
			} else {
				setCursor(0);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuOpen]);

	// On enter key press
	const onEnterPress = (e: React.KeyboardEvent<any>) => {
		if (
			!disabled &&
			!islocked &&
			e.key === "Enter" &&
			e.target === document.activeElement
		) {
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
		<StyledContainer ref={dropdownRef}>
			{/* Button triggers dropdown to open */}
			<DropdownTriggerSelect
				ref={dropdownTriggerRef}
				colorSet={colorSet}
				disabled={disabled || islocked || !dataset.length}
				isMenuOpen={isMenuOpen}
				onClickMenu={() => {
					if (disabled || islocked || !dataset.length) {
						return;
					}
					setIsMenuOpen(!isMenuOpen);
				}}
				onKeyDown={onEnterPress}
				placeholder={placeholder}
				dropdownSize={dropdownSize}
				islocked={islocked}
				error={error}
				errorText={errorText}
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
											// Disabled entire dropdown disabled, e.disabled only row is disabled
											if (
												islocked ||
												disabled ||
												e.disabled ||
												!dataset.length
											) {
												return;
											}
											onSelect(e, e.value);
										}}
										active={
											e.id === selectedItem?.id ||
											e.id === hoveredItem?.id ||
											i === cursor
										}
										disabled={
											islocked || disabled || e.disabled || !dataset.length
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
		</StyledContainer>
	);
};

export default DropdownSelect;
