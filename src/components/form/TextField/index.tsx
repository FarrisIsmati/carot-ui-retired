import { formControlBase } from "@/styles/mixins";
import { spacer14, spacer2, spacer4, spacer48 } from "@/styles/sizes";
import { PseudoClassProps, StyledWrapperProps } from "@/utils/typeHelpers";
import { styled } from "styled-components";

export type FormInputProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isHover" | "isFocus"> & {
		/**
		 * If 'true' adds markup to indicate input isn't valid
		 */
		error?: boolean;
	};

type StyledInputProps = FormInputProps & {
	isUsingKeyboard: boolean;
	useBrowserDefaultFocusStyle: boolean;
};
export const StyledInput = styled.input<StyledInputProps>`
	${(props) => formControlBase(props.useBrowserDefaultFocusStyle)}

	/* Remove default margin for Safari */
    margin-block-start: 0;
	margin-block-end: 0;
	border-radius: ${spacer4};
	padding-inline-start: ${spacer14};
	padding-inline-end: ${spacer14};
	padding-block-start: -${spacer2};
	padding-block-end: -${spacer2};
	min-block-size: ${spacer48};
`;
