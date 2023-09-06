import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { formControlBase } from "@/styles/mixins";
import {
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
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import React, { useContext } from "react";
import { css, styled } from "styled-components";

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

export const StyledLabel = styled.span<
	Pick<StyledInputProps, "colorSet" | "disabled">
>`
	${(props) => css`
		${semanticFonts.bodySmall}
		color: ${props.disabled
			? props.colorSet?.text.disabled
			: props.colorSet?.text.default};
	`}
`;

export const StyledInputContainer = styled.div<
	Pick<StyledInputProps, "colorSet" | "disabled">
>`
	${(props) => css`
		/* Carot styles */
		width: ${spacer320};
		background-color: ${props.colorSet?.essential.default};
		border-radius: ${spacer4};
		padding: ${spacer10} ${spacer12} ${spacer12} ${spacer12};

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
			box-shadow: 0 -${spacer2} 0 0 black inset;
		}
	`}
`;

export default React.forwardRef<HTMLElement, FormInputProps>(function FormInput(
	{
		error,
		disabled,
		placeholder,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		...props
	},
	ref
) {
	const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
	return (
		<StyledInputContainer colorSet={colorSet} disabled={disabled}>
			<StyledLabel colorSet={colorSet} disabled={disabled}>
				Label
			</StyledLabel>
			<StyledInput
				ref={ref}
				isUsingKeyboard={isUsingKeyboard}
				error={error}
				aria-invalid={error}
				colorSet={colorSet}
				disabled={disabled}
				placeholder={placeholder}
				{...props}
			/>
		</StyledInputContainer>
	);
});
