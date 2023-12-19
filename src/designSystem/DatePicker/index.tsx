import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { Sizes, spacer320 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { useRef, useState } from "react";

import moment from "moment";
import { FieldInputProps } from "react-final-form";
import useOffClick from "../Dropdown/hooks/useOffClick";
import Overlay, { OverlayDirections } from "../Overlay";
import Calendar from "./Calendar";
import DatePickerTrigger from "./DatePickerTrigger";
import { StyledContainer } from "./styles";
import { DateFormatEnum, Value } from "./types";

export const dateFormatMapper = {
	[DateFormatEnum.DDMMYYYY]: "DD/MM/YYYY",
	[DateFormatEnum.MMDDYYYY]: "MM/DD/YYYY",
	[DateFormatEnum.YYYYMMDD]: "YYYY/MM/DD",
};

export type DatePickerProps = Omit<
	StyledWrapperProps,
	"defaultValue" | "onChange" | "size"
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
		 * @default Secondary
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
		 * Field input props
		 */
		input?: FieldInputProps<any, HTMLElement>;
		/**
		 * Default date value
		 */
		defaultValue?: Value;
		/**
		 * Date format
		 */
		dateFormat?: DateFormatEnum;
		/**
		 * Size of the field (width)
		 * @default LARGE
		 */
		size?: Sizes;
		/**
		 * Action to perform on change
		 */
		onChange?: (selectedItemDataset: any) => void;
	};

const DatePicker = ({
	label,
	colorSet = getColorSet(SemanticSetCores.SECONDARY),
	error,
	errorText,
	disabled,
	placeholder,
	input,
	defaultValue,
	dateFormat,
	size,
	onChange,
}: DatePickerProps) => {
	// Datepicker
	const datePickerRef = useRef(null);

	// Datepicker trigger
	const datePickerTriggerRef = useRef(null);

	// State
	const [calendarDate, setCalendarDate] = useState<Value | null>(
		defaultValue ?? null
	);
	const calendarDateFormatted = calendarDate
		? moment(calendarDate as Date).format(
				dateFormat ? dateFormatMapper[dateFormat] : "MM/DD/YYYY"
		  )
		: undefined;
	const [isCalendarOpen, setIsCalendarOpen] = useState<boolean>(false); // Open/close calendar

	// Add error state if error text included
	if (!error && errorText) {
		error = true;
	}

	//
	// Keyboard interaction
	//
	// On enter key press
	const onEnterPress = (e: React.KeyboardEvent<any>) => {
		if (!disabled && e.key === "Enter" && e.target === document.activeElement) {
			// Open menu if focused and hitting enter key
			if (!isCalendarOpen) {
				setIsCalendarOpen(true);
			}
		}
	};

	//
	// DatePicker interaction
	//
	// Changing the date (not range)
	const onChangeDateSingle = (selectedDate: Value) => {
		if (selectedDate) {
			setCalendarDate(selectedDate); // Component state
			input?.onChange?.(selectedDate.toString()); // Form state
			// Extra changes a user wants to execute
			onChange?.(selectedDate);
		}
	};

	// Close menu when clicking off
	useOffClick(datePickerRef, () => setIsCalendarOpen(false));

	return (
		<StyledContainer ref={datePickerRef}>
			{/* Button triggers date picker to open */}
			<DatePickerTrigger
				ref={datePickerTriggerRef}
				label={label}
				colorSet={colorSet}
				error={error}
				errorText={errorText}
				disabled={disabled}
				isCalendarOpen={isCalendarOpen}
				onClickMenu={() => {
					if (disabled) {
						return;
					}
					setIsCalendarOpen(!isCalendarOpen);
				}}
				onBlur={(e) => {
					input?.onBlur(e);
				}}
				onKeyDown={onEnterPress}
				calendarDate={calendarDateFormatted ? calendarDateFormatted : undefined}
				placeholder={placeholder}
				size={size}
			/>

			{/* Calendar */}
			{isCalendarOpen && (
				<Overlay placement={OverlayDirections.BOTTOM} width={spacer320}>
					<Calendar onChange={onChangeDateSingle} value={calendarDate} />
				</Overlay>
			)}
		</StyledContainer>
	);
};

export default DatePicker;
