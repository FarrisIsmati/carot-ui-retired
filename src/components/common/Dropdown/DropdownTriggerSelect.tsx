import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import { Add, Remove } from "@material-ui/icons";
import React from "react";
import { IconWrapper } from "../IconWrapper";
import {
	StyledDropdownSelectTriggerText,
	StyledDropdownTrigger,
	StyledDropdownTriggerContentContainer,
	StyledErrorTextDropdownTrigger,
} from "./styles";

export type DropdownTriggerProps = Omit<StyledWrapperProps, "label"> &
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
		 * Placeholder text
		 */
		placeholder?: string;
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		dropdownSize?: Sizes;
	};

export default React.forwardRef<HTMLElement, DropdownTriggerProps>(
	function DropdownTrigger(
		{
			onClickMenu,
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			error,
			errorText,
			children,
			disabled,
			isMenuOpen,
			placeholder,
			dropdownSize = Sizes.LARGE,
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
				dropdownSize={dropdownSize}
				{...props}
			>
				{/* Content inside the dropdown */}
				<StyledDropdownTriggerContentContainer>
					{/* Text displaying inside the dropdown */}
					<StyledDropdownSelectTriggerText
						disabled={disabled}
						colorset={colorSet}
					>
						{placeholder}
					</StyledDropdownSelectTriggerText>

					{/* Icon arrow up or down indicating dropdown open/closed */}
					{isMenuOpen ? (
						<IconWrapper
							icon={Remove}
							padding={spacer2}
							size={Sizes.MEDIUM}
							disabled={disabled}
						/>
					) : (
						<IconWrapper
							icon={Add}
							padding={spacer2}
							size={Sizes.MEDIUM}
							disabled={disabled}
						/>
					)}
				</StyledDropdownTriggerContentContainer>

				{/* Error text bottom of the dropdown */}
				{errorText && !disabled && (
					<StyledErrorTextDropdownTrigger
						colorset={colorSet}
						error={error}
						semanticfont={semanticFonts.bodySmall}
					>
						{errorText}
					</StyledErrorTextDropdownTrigger>
				)}
			</StyledDropdownTrigger>
		);
	}
);
