import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import { Add, Lock, Remove } from "@material-ui/icons";
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
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
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

const DropdownTriggerSelect = React.forwardRef<
	HTMLElement,
	DropdownTriggerProps
>(function DropdownTrigger(
	{
		onClickMenu,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		error,
		errorText,
		children,
		disabled,
		isMenuOpen,
		placeholder,
		islocked,
		dropdownSize = Sizes.LARGE,
		...props
	},
	ref
) {
	const Icon = () => {
		if (islocked) {
			return (
				<IconWrapper
					icon={Lock}
					colorSet={getColorSet(SemanticSetCores.PRIMARY)}
					padding={spacer2}
					size={Sizes.MEDIUM}
					disabled={disabled}
					hasBackground
				/>
			);
		}
		if (isMenuOpen) {
			return (
				<IconWrapper
					icon={Remove}
					padding={spacer2}
					size={Sizes.MEDIUM}
					disabled={disabled}
				/>
			);
		}
		return (
			<IconWrapper
				icon={Add}
				padding={spacer2}
				size={Sizes.MEDIUM}
				disabled={disabled}
			/>
		);
	};

	return (
		<StyledDropdownTrigger
			ref={ref}
			type="button"
			colorSet={colorSet}
			isMenuOpen={isMenuOpen}
			error={error}
			aria-haspopup="listbox"
			onMouseDown={onClickMenu}
			disabled={disabled || islocked}
			dropdownSize={dropdownSize}
			{...props}
		>
			{/* Content inside the dropdown */}
			<StyledDropdownTriggerContentContainer>
				{/* Text displaying inside the dropdown */}
				<StyledDropdownSelectTriggerText
					disabled={disabled || islocked}
					colorset={colorSet}
				>
					{placeholder}
				</StyledDropdownSelectTriggerText>

				{/* Icon + or - indicating dropdown open/closed */}
				<Icon />
			</StyledDropdownTriggerContentContainer>

			{/* Error text bottom of the dropdown */}
			{errorText && (
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
});

export default DropdownTriggerSelect;
