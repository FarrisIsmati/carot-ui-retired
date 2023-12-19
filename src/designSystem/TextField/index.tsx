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
	StyledInput,
	StyledInputContainer,
} from "./styles";

export type FormInputProps = Omit<
	StyledWrapperProps,
	"default" | "prefix" | "step" | "size"
> &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
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
		 * Default value to start with
		 */
		defaultValue?: string;
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'input'
		 **/
		component?: AsProp;
		/**
		 * Size for width of TextField
		 */
		size?: Sizes;
	};

export type StyledInputProps = FormInputProps & {
	isUsingKeyboard: boolean;
	useBrowserDefaultFocusStyle: boolean;
};

const TextField = React.forwardRef<HTMLElement, FormInputProps>(
	function FormInput({
		error,
		disabled,
		placeholder,
		icon,
		onClear,
		input,
		label,
		errorText,
		defaultValue,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		size = Sizes.LARGE,
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
				// Unfocus TextField if hitting enter
				e.preventDefault();
				// @ts-ignore
				e.target.blur();
			}
		};

		// If default value set it
		useEffect(() => {
			// If form value isn't set to default value, update it also
			if (defaultValue) {
				setContent(defaultValue);
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
					<StyledInput
						ref={(el: HTMLInputElement) => {
							if (inputRef && !inputRef.current) {
								inputRef.current = el;
							}
						}}
						isUsingKeyboard={isUsingKeyboard}
						error={error}
						aria-invalid={error}
						colorSet={colorSet}
						disabled={disabled}
						placeholder={placeholder}
						onChange={(e: any) => {
							setContent(e.target.value);
							input?.onChange(e.target.value);
						}}
						value={input?.value ?? content}
						onBlur={(e: any) => {
							input?.onBlur(e);
						}}
						onKeyDown={onEnterPress}
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
										input?.onChange("");
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

export default TextField;
