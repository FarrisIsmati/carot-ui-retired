import {
	getDropdownIndex,
	getDropdownValue,
} from "@/components/VisionForm/utils/form";
import scrollToCursor from "@/designSystem/Dropdown/utils/scrollToCursor";
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
import { StyledContainer } from "./styles";
import { DropdownData } from "./types";

export type DropdownProps = Omit<
	StyledWrapperProps,
	"defaultValue" | "onChange"
> &
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
		dataset: DropdownData<any>[];
		/**
		 * Field input props
		 */
		input?: FieldInputProps<any, HTMLElement>;
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		dropdownSize?: Sizes;
		/**
		 * Default value params
		 */
		defaultValue?: DropdownData<any>;
		/**
		 * Action to perform on change
		 */
		onChange?: (selectedItemDataset: DropdownData<any>) => void;
	};

const Dropdown = ({
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	disabled,
	placeholder,
	dataset,
	input,
	dropdownSize = Sizes.LARGE,
	defaultValue,
	onChange,
}: DropdownProps) => {
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
	// State management
	//
	// If default value set it
	useEffect(() => {
		if (defaultValue && !selectedItem) {
			setSelectedItem(defaultValue); // Local display state

			// If form value isn't set to default value, update it also
			if (input?.value !== defaultValue.id) {
				input?.onChange?.(defaultValue.id); // Form state
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [defaultValue]);

	// Set selected item to anything onChange
	useEffect(() => {
		if (selectedItem?.id !== input?.value) {
			const newSelectedItem = getDropdownValue(dataset, input?.value) ?? null;
			setSelectedItem(newSelectedItem);
			setCursor(getDropdownIndex(dataset, newSelectedItem?.id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [input?.value]);

	//
	// Navigation
	//
	// Use keys to navigate dropdown
	const { cursor, setCursor, cursorRef } = useNavigateDropdown({
		isMenuOpen,
		dataset,
		parent: dropdownListRef.current,
		focusEl: dropdownTriggerRef.current,
		disabled: !!disabled,
	});

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
				setCursor(getDropdownIndex(dataset, selectedItem.id));
			} else {
				setCursor(0);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isMenuOpen]);

	//
	// Keyboard interaction
	//
	// On enter key press
	const onEnterPress = (e: React.KeyboardEvent<any>) => {
		if (!disabled && e.key === "Enter" && e.target === document.activeElement) {
			// Open menu if focused and hitting enter key
			if (!isMenuOpen) {
				setIsMenuOpen(true);
			}
			// Close menu if focused and hitting enter key to select item
			if (isMenuOpen) {
				onSelect(dataset[cursor], dataset[cursor].id);
			}
		}
	};

	//
	// Dropdown interaction
	//
	// Select item (updates local and form state if passed in)
	const onSelect = (selectedItemDataset: DropdownData<any>, value: string) => {
		setSelectedItem(selectedItemDataset); // Local display state
		input?.onChange?.(value); // Form state
		setIsMenuOpen(false);
		// Extra changes a user wants to execute
		onChange?.(selectedItemDataset);
	};

	// Close menu when clicking off
	useOffClick(dropdownRef, () => setIsMenuOpen(false));

	return (
		<StyledContainer ref={dropdownRef}>
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
											// Disabled entire dropdown disabled, e.disabled only row is disabled
											if (disabled || e.disabled) {
												return;
											}
											onSelect(e, e.id);
										}}
										active={
											e.id === selectedItem?.id ||
											e.id === hoveredItem?.id ||
											i === cursor
										}
										disabled={disabled || e.disabled}
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

export default Dropdown;
