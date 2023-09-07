import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { formControlBase } from "@/styles/mixins";
import {
	Sizes,
	spacer10,
	spacer12,
	spacer14,
	spacer2,
	spacer24,
	spacer320,
	spacer4,
	spacer8,
} from "@/styles/sizes";
import { KeyboardDetectionContext } from "@/utils/context";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import { Close } from "@material-ui/icons";
import React, { useContext, useRef } from "react";
import { css, styled } from "styled-components";
import Dot from "../Badge/Dot";
import { IconWrapper } from "../IconWrapper";
import Type from "../Type";

export type FormInputProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
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
		 * Show clear button
		 */
		showClear?: boolean;
		/**
		 * Perform an action when clearing out the input text
		 * */
		onClear?: () => void;
		/**
		 * Label title
		 */
		label?: string;
		/**
		 * Text to display for an error state
		 */
		errorText?: string;
	};

type StyledInputProps = FormInputProps & {
	isUsingKeyboard: boolean;
	useBrowserDefaultFocusStyle: boolean;
};
export const StyledInput = styled.input<StyledInputProps>`
	${(props) => css`
		${formControlBase(props.useBrowserDefaultFocusStyle)}

		/* Remove default margin for Safari */
        margin-block-start: 0;
		margin-block-end: 0;
		border-radius: ${spacer4};
		padding-inline-start: ${spacer14};
		padding-inline-end: ${spacer14};
		padding-block-start: -${spacer2};
		padding-block-end: -${spacer2};
		padding: 0;

		/* Carot */
		background-color: transparent;
		${semanticFonts.bodyLarge}
		margin-top: ${spacer8};
		height: ${spacer24};
		&:disabled {
			color: ${props.colorSet?.text.disabled};

			&::placeholder {
				color: ${props.colorSet?.text.disabled};
			}
		}
	`}
`;

export const StyledErrorText = styled.span`
	${semanticFonts.bodySmall}
	color: ${getColorSet(SemanticSetCores.NEGATIVE).essential.default};
`;

export const StyledInputContainer = styled.div<
	Pick<StyledInputProps, "colorSet" | "disabled" | "error">
>`
	${(props) => {
		const highlightColor = getColorSet(SemanticSetCores.PRIMARY_ALT).essential
			.default;
		const errorColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;

		return css`
			/* Carot styles */
			display: flex;
			align-items: center;
			width: ${spacer320};
			background-color: ${props.colorSet?.essential.default};
			border-radius: ${spacer4};
			padding: ${spacer10} ${spacer12} ${spacer12} ${spacer12};
			box-shadow: ${!props.disabled
				? `0 -${spacer2} 0 0 ${props.error ? errorColor : highlightColor} inset`
				: "none"};

			&:disabled {
				background-color: ${props.colorSet?.essential.disabled};
				color: ${props.colorSet?.text.disabled};
			}

			&:hover:not([disabled]) {
				background-color: ${props.colorSet?.essential.hover};
				color: ${props.colorSet?.text.hover};
			}

			&:focus-within {
				background-color: ${props.colorSet?.essential.focus};
				box-shadow: ${!props.disabled
					? `0 -${spacer2} 0 0 ${
							props.error ? errorColor : highlightColor
					  } inset`
					: "none"};
			}
		`;
	}}
`;

const IconWrapperContainer = styled.div`
	margin-right: ${spacer12};
`;

const ClearButtonContainer = styled.div`
	margin-left: ${spacer12};
`;

const ContentContainer = styled.div`
	width: 100%;
`;

const BadgeDotContainer = styled.div`
	margin-left: ${spacer12};
`;

const MarginTopType = styled(Type)`
	margin-top: ${spacer8};
`;

export default React.forwardRef<HTMLElement, FormInputProps>(
	function FormInput({
		error,
		disabled,
		placeholder,
		icon,
		onClear,
		label,
		showClear,
		errorText,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		...props
	}) {
		const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
		const inputRef = useRef<HTMLInputElement | null>(null);

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
							colorSet={colorSet}
							disabled={disabled}
							error={error}
							font={semanticFonts.bodySmall}
						>
							Label
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
						{...props}
					/>
					{errorText && !disabled && (
						<MarginTopType
							colorSet={colorSet}
							error={error}
							font={semanticFonts.bodySmall}
						>
							{errorText}
						</MarginTopType>
					)}
				</ContentContainer>
				{error && !disabled && (
					<BadgeDotContainer>
						<Dot />
					</BadgeDotContainer>
				)}
				{showClear && (
					<ClearButtonContainer>
						<IconWrapper
							onClick={() => {
								if (inputRef.current) {
									inputRef.current.value = "";
								}
								if (onClear) onClear();
							}}
							icon={Close}
							padding={spacer2}
							size={Sizes.SMALL}
							disabled={disabled}
						/>
					</ClearButtonContainer>
				)}
			</StyledInputContainer>
		);
	}
);
