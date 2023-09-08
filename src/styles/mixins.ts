import { css } from "styled-components";
import { controlPaddingBlock, spacer14, spacer4, spacer40 } from "./sizes";

// Shared styles for input, textarea, select
export const formControlBase = (useBrowserDefualtFocusStyle?: boolean) => css`
	/* Prevent inset box-shadow on ios */
	-webkit-apperance: none;
	/* Reset unusual firefox on android default style */
	background-image: none;
	border: 0;
	display: block;
	transition: box-shadow ease-in-out 0.1s, color ease-in-out 0.1s;
	inline-size: 100%;

	/* Override firefox unusual default opacity */
	&::placeholder {
		opacity: 1;
	}

	${!useBrowserDefualtFocusStyle &&
	css`
		&:focus,
		&:hover:focus {
			outline: 0;
		}
	`}

	&:disabled {
		cursor: not-allowed;
		opacity: 1;
	}
`;

// Baseline styles for most components
export const rootStyle = () => css`
	box-sizing: border-box;
	-webkit-tap-highlight-color: transparent;
`;

// For selects
export const formControlBaseSelect = () => css`
	${rootStyle()};

	/* Default margin removal */
	margin-block-start: 0;
	margin-block-end: 0;

	apperance: none;
	box-shadow: none;

	/* Unstyle the caret on select in firefox */
	text-indent: 0.01px;
	text-overflow: "";

	/* Unstyle the caret on select in IE10 */
	&::-ms-expand {
		display: none;
	}

	border-radius: ${spacer4};
	padding-block-start: ${controlPaddingBlock.md};
	padding-block-end: ${controlPaddingBlock.md};
	padding-inline-start: ${spacer14};
	padding-inline-end: ${spacer40};
`;
