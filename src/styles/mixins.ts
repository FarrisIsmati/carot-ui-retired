import { css } from "styled-components";

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
