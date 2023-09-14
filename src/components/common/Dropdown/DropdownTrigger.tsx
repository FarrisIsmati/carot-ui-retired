import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import { KeyboardArrowDown, KeyboardArrowUp } from "@material-ui/icons";
import React from "react";
import { IconWrapper } from "../IconWrapper";
import Type from "../Type";
import {
	StyledDropdownTrigger,
	StyledDropdownTriggerContentContainer,
	StyledDropdownTriggerText,
	StyledErrorTextDropdownTrigger,
} from "./styles";
import { DropdownData } from "./types";

export type DropdownTriggerProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'button'
		 **/
		component?: AsProp;
		/**
		 * Click menu
		 */
		onClickMenu: () => void;
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
		 * isMenuOpen
		 */
		isMenuOpen?: boolean;
		/**
		 * Selected value
		 */
		selectedItem: DropdownData | null;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
	};

export default React.forwardRef<HTMLElement, DropdownTriggerProps>(
	function DropdownTrigger(
		{
			onClickMenu,
			label,
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			error,
			errorText,
			children,
			disabled,
			isMenuOpen,
			placeholder,
			selectedItem,
			...props
		},
		ref
	) {
		return (
			<StyledDropdownTrigger
				ref={ref}
				type="button"
				colorSet={colorSet}
				isMenuOpen={isMenuOpen}
				error={error}
				aria-haspopup="listbox"
				onMouseDown={onClickMenu}
				disabled={disabled}
				{...props}
			>
				{/* Top label to display */}
				{label && (
					<Type
						colorSet={colorSet}
						disabled={disabled}
						error={error}
						font={semanticFonts.bodySmall}
					>
						{label}
					</Type>
				)}

				{/* Content inside the dropdown */}
				<StyledDropdownTriggerContentContainer>
					{/* Text displaying inside the dropdown */}
					<StyledDropdownTriggerText disabled={disabled} colorSet={colorSet}>
						{!selectedItem && placeholder}
						{selectedItem && selectedItem.value}
					</StyledDropdownTriggerText>

					{/* Icon arrow up or down indicating dropdown open/closed */}
					{isMenuOpen ? (
						<IconWrapper
							icon={KeyboardArrowUp}
							padding={spacer2}
							size={Sizes.MEDIUM}
							disabled={disabled}
						/>
					) : (
						<IconWrapper
							icon={KeyboardArrowDown}
							padding={spacer2}
							size={Sizes.MEDIUM}
							disabled={disabled}
						/>
					)}
				</StyledDropdownTriggerContentContainer>

				{/* Error text bottom of the dropdown */}
				{errorText && !disabled && (
					<StyledErrorTextDropdownTrigger
						colorSet={colorSet}
						error={error}
						font={semanticFonts.bodySmall}
					>
						{errorText}
					</StyledErrorTextDropdownTrigger>
				)}
			</StyledDropdownTrigger>
		);
	}
);
