import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import { KeyboardDetectionContext } from "@/utils/context";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React, { useContext, useEffect, useRef, useState } from "react";
import { CurrencyInputProps } from "react-currency-input-field";
import { FieldInputProps } from "react-final-form";
import Dot from "../Badge/Dot";
import { IconWrapper } from "../IconWrapper";
import CrossSmall from "../Icons/CrossSmall";
import Type from "../Type";
import {
	ClearButtonContainer,
	ContentContainer,
	IconWrapperContainer,
	MarginTopType,
	StyledInputContainer,
	StyledTextFieldNumeric,
} from "./styles";

export type TextFieldNumericProps = Omit<
	StyledWrapperProps,
	| "default"
	| "prefix"
	| "step"
	| "size"
	| "defaultValue"
	| "onChange"
	| "inputMode"
> &
	Pick<PseudoClassProps, "isHover" | "isFocus"> &
	Omit<CurrencyInputProps, "size" | "inputMode" | "onChange"> & {
		/**
		 * Ref
		 */
		ref?: React.ForwardedRef<HTMLElement>;
		/**
		 * Set the semantic color used by the button
		 * @default 'SECONDARY'
		 **/
		colorSet?: ColorSet;
		/**
		 * If 'true' adds markup to indicate input isn't valid
		 */
		error?: boolean;
		/**
		 * Placeholder text
		 */
		placeholder?: string;
		/**
		 * Icon placed at left hand side of input ofrm
		 */
		icon?: AsProp;
		/**
		 * Perform an action when clearing out the input text
		 * */
		onClear?: () => void;
		/**
		 * Field input props
		 */
		input?: FieldInputProps<any, HTMLElement>;
		/**
		 * Label title
		 */
		label?: string;
		/**
		 * Text to display for an error state
		 */
		errorText?: string;
		/**
		 * Prepend to input
		 */
		prefix?: string;
		/**
		 * Postpend to input
		 */
		suffix?: string;
		/**
		 * For currency input only transforms raw value removes prefix/suffix
		 */
		transformRawValue?: (value: string) => string;
		/**
		 * Step for key up/down
		 */
		step?: number;
		/**
		 * Size for width of TextField
		 */
		size?: Sizes;
		/**
		 * Action to perform on change
		 */
		onChange?: (val: number | undefined) => void;
	};

export type StyledTextFieldNumericProps = TextFieldNumericProps & {
	isUsingKeyboard: boolean;
	useBrowserDefaultFocusStyle: boolean;
};

const TextFieldNumeric = React.forwardRef<HTMLElement, TextFieldNumericProps>(
	function FormInput({
		error,
		disabled,
		placeholder,
		icon,
		step,
		onClear,
		input,
		label,
		errorText,
		defaultValue,
		prefix = "",
		suffix = "",
		allowNegativeValue,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		size = Sizes.LARGE,
		onChange,
		...props
	}) {
		const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [content, setContent] = useState<number | undefined>(0);

		// Add error state if error text included
		if (!error && errorText) {
			error = true;
		}

		const renderIcon = () =>
			icon && (
				<IconWrapperContainer>
					<IconWrapper
						icon={icon}
						padding={spacer2}
						size={Sizes.LARGE}
						disabled={disabled}
					/>
				</IconWrapperContainer>
			);

		// On enter key press
		const onEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
			if (e.key === "Enter" && e.target === document.activeElement) {
				// Unfocus TextField if hitting enter
				e.preventDefault();
				// @ts-ignore
				e.target.blur();
			}
		};

		// If default value set it to content, (not for form controlled components)
		useEffect(() => {
			if (defaultValue !== undefined) {
				setContent(defaultValue as number);
			}
		}, [defaultValue]);

		return (
			<StyledInputContainer
				colorSet={colorSet}
				disabled={disabled}
				error={error}
				size={size}
			>
				{renderIcon()}
				<ContentContainer>
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

					<StyledTextFieldNumeric
						allowNegativeValue={allowNegativeValue}
						ref={(el: HTMLInputElement) => {
							if (inputRef && !inputRef.current) {
								inputRef.current = el;
							}
						}}
						step={step}
						isUsingKeyboard={isUsingKeyboard}
						error={error}
						aria-invalid={error}
						colorSet={colorSet}
						disabled={disabled}
						placeholder={placeholder}
						value={input?.value ?? content}
						onValueChange={(value: number | undefined) => {
							setContent(value);
							input?.onChange(value);
							onChange?.(value);
						}}
						onBlur={(e: any) => {
							input?.onBlur(e);
						}}
						defaultValue={defaultValue}
						onKeyDown={onEnterPress}
						prefix={prefix}
						suffix={suffix}
						{...props}
					/>

					{errorText && !disabled && (
						<MarginTopType
							colorset={colorSet}
							error={error}
							semanticfont={semanticFonts.bodySmall}
						>
							{errorText}
						</MarginTopType>
					)}
				</ContentContainer>
				{error && !disabled && (
					<div>
						<Dot />
					</div>
				)}
				{onClear && (
					<ClearButtonContainer>
						<IconWrapper
							onClick={() => {
								if (content && !disabled) {
									if (inputRef.current && content) {
										inputRef.current.value = "";
										setContent(0);
										input?.onChange(0);
									}
									onClear();
								}
							}}
							icon={CrossSmall}
							padding={spacer2}
							size={Sizes.SMALL}
							disabled={!content || disabled}
						/>
					</ClearButtonContainer>
				)}
			</StyledInputContainer>
		);
	}
);

export default TextFieldNumeric;
