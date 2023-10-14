import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { Sizes, spacer2 } from "@/styles/sizes";
import { KeyboardDetectionContext } from "@/utils/context";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React, { useContext, useRef, useState } from "react";
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
	StyledTextFieldCurrency,
} from "./styles";

export type TextFieldCurrencyProps = Omit<
	StyledWrapperProps,
	"default" | "prefix" | "step"
> &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
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
	};

export type StyledTextFieldCurrencyProps = TextFieldCurrencyProps & {
	isUsingKeyboard: boolean;
	useBrowserDefaultFocusStyle: boolean;
};

export default React.forwardRef<HTMLElement, TextFieldCurrencyProps>(
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
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		...props
	}) {
		const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
		const inputRef = useRef<HTMLInputElement | null>(null);
		const [content, setContent] = useState("");

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
				// Unfocus textfield if hitting enter
				e.preventDefault();
				// @ts-ignore
				e.target.blur();
			}
		};

		return (
			<StyledInputContainer
				colorSet={colorSet}
				disabled={disabled}
				error={error}
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

					<StyledTextFieldCurrency
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
						onValueChange={(value: string | undefined) => {
							setContent(value ?? "");
							input?.onChange(value);
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
										setContent("");
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
