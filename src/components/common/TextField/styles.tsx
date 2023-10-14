import { SemanticSetCores, getColorSet } from "@/styles/colors";
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
import { css, styled } from "styled-components";
import { StyledInputProps } from ".";
import Type from "../Type";

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

		&::after {
			content: "nigger";
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
			box-shadow: ${!props.disabled && props.error
				? `0 -${spacer2} 0 0 ${errorColor} inset`
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

export const IconWrapperContainer = styled.div`
	margin-right: ${spacer12};
`;

export const ClearButtonContainer = styled.div`
	margin-left: ${spacer12};
`;

export const ContentContainer = styled.div`
	width: 100%;
`;

export const MarginTopType = styled(Type)`
	margin-top: ${spacer8};
`;
