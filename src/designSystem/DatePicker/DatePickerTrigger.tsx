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
	StyledDatePickerText,
	StyledDatePickerTrigger,
	StyledDatePickerTriggerContentContainer,
	StyledErrorTextDatePickerTrigger,
} from "./styles";

export type DatePickerTriggerProps = Omit<StyledWrapperProps, "size"> &
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
		 * Is calendar open
		 */
		isCalendarOpen?: boolean;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
		/**
		 * Calendar date
		 */
		calendarDate?: string;
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		size?: Sizes;
	};

const DatePickerTrigger = React.forwardRef<HTMLElement, DatePickerTriggerProps>(
	function DatePickerTrigger(
		{
			onClickMenu,
			label,
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			error,
			errorText,
			children,
			disabled,
			isCalendarOpen,
			placeholder,
			calendarDate,
			size,
			...props
		},
		ref
	) {
		return (
			<StyledDatePickerTrigger
				ref={ref}
				type="button"
				colorSet={colorSet}
				isCalendarOpen={isCalendarOpen}
				error={error}
				aria-haspopup="listbox"
				onMouseDown={onClickMenu}
				disabled={disabled}
				size={size}
				{...props}
			>
				{/* Top label to display */}
				{label && (
					<Type
						colorset={colorSet}
						disabled={disabled}
						error={error}
						semanticfont={semanticFonts.bodySmall}
					>
						{label}
					</Type>
				)}

				{/* Content inside the date picker */}
				<StyledDatePickerTriggerContentContainer>
					{/* Text displaying inside the date picker */}
					<StyledDatePickerText
						disabled={disabled}
						colorset={colorSet}
						calendarDate={calendarDate}
					>
						{!calendarDate && placeholder}
						{!!calendarDate && calendarDate}
					</StyledDatePickerText>

					{/* Icon arrow up or down indicating calendar open/closed */}
					{isCalendarOpen ? (
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
				</StyledDatePickerTriggerContentContainer>

				{/* Error text bottom of the date picker */}
				{errorText && !disabled && (
					<StyledErrorTextDatePickerTrigger
						colorset={colorSet}
						error={error}
						semanticfont={semanticFonts.bodySmall}
					>
						{errorText}
					</StyledErrorTextDatePickerTrigger>
				)}
			</StyledDatePickerTrigger>
		);
	}
);

export default DatePickerTrigger;
