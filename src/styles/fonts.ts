import { css } from "styled-components";
import {
	spacer11,
	spacer12,
	spacer14,
	spacer16,
	spacer20,
	spacer24,
	spacer28,
	spacer32,
	spacer40,
	spacer48,
	spacer64,
	spacer72,
	spacer80,
	spacer9,
} from "./sizes";

const fontFamilyA = css`
	font-family: "basic-sans", sans-serif !important;
	font-style: normal !important;
`;

const fontFamilyB = css`
	font-family: "poppins", sans-serif;
	font-style: normal;
`;

export const semanticFonts = {
	displayLarge: css`
		${fontFamilyA}
		font-weight: 700;
		font-size: ${spacer80};
		line-height: ${spacer80};
	`,
	displayMedium: css`
		${fontFamilyA}
		font-weight: 250;
		font-size: ${spacer64};
		line-height: ${spacer72};
	`,
	displaySmall: css`
		${fontFamilyA}
		font-weight: 700;
		font-size: ${spacer40};
		line-height: ${spacer48};
	`,
	headlineLarge: css`
		${fontFamilyA}
		font-weight: 700;
		font-size: ${spacer32};
		line-height: ${spacer40};
	`,
	headlineMedium: css`
		${fontFamilyB}
		font-weight: 400;
		font-size: ${spacer24};
		line-height: ${spacer32};
	`,
	headlineSmall: css`
		${fontFamilyB}
		font-weight: 700;
		font-size: ${spacer20};
		line-height: ${spacer28};
	`,
	labelLarge: css`
		${fontFamilyB}
		font-weight: 600 !important;
		font-size: ${spacer14} !important;
		line-height: ${spacer20} !important;
	`,
	labelMedium: css`
		${fontFamilyB}
		font-weight: 500;
		font-size: ${spacer12};
		line-height: ${spacer16};
	`,
	labelSmall: css`
		${fontFamilyB}
		font-weight: 600;
		font-size: ${spacer11};
		line-height: ${spacer16};
	`,
	labelExtraSmall: css`
		${fontFamilyB}
		font-weight: 500;
		font-size: ${spacer9};
		line-height: ${spacer12};
	`,
	bodyLarge: css`
		${fontFamilyB}
		font-weight: 400;
		font-size: ${spacer16};
		line-height: ${spacer24};
	`,
	bodyMedium: css`
		${fontFamilyB}
		font-weight: 400;
		font-size: ${spacer14};
		line-height: ${spacer20};
	`,
	bodySmall: css`
		${fontFamilyB}
		font-weight: 400;
		font-size: ${spacer12};
		line-height: ${spacer16};
	`,
};
