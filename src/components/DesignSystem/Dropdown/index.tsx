import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { spacer320 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useEffect, useRef, useState } from "react";
import Overlay, { OverlayDirections } from "../Overlay";
import DropdownItem from "./DropdownItem";
import { DropdownList } from "./DropdownList";
import DropdownTrigger from "./DropdownTrigger";
import useKeyOnDropdown, { scrollToTarget } from "./hooks/useKeyOnDropdown";
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
	const dropdownRef = useRef(null);
	const dropdownListRef = useRef(null);
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
	const [selectedItem, setSelectedItem] = useState<DropdownData | null>(null);

	// Handle event when clicking off ref
	useOffClick(dropdownRef, () => setIsMenuOpen(false));

	// Allow keyboard to navigate list
	const { cursor, cursorRef } = useKeyOnDropdown({
		isMenuOpen,
		dataset,
		selectedItem,
		parent: dropdownListRef.current,
		setSelectedItem,
		onEnter: () => {
			if (isMenuOpen) {
				setIsMenuOpen(false);
			}
		},
	});

	// Get active dropdown item
	const [hoveredItem, setHoveredItem] = useState<DropdownData | null>(null);

	// Scroll to target if menu is open
	useEffect(() => {
		if (isMenuOpen) {
			scrollToTarget({
				parent: dropdownListRef.current,
				cursor,
				cursorRef,
			});
		}
	}, [isMenuOpen]);

	// Add error state if error text included
	if (!error && errorText) {
		error = true;
	}

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
