"use client";
import { Poppins } from "next/font/google";
import { css } from "styled-components";

export const poppins = Poppins({
	style: "normal",
	weight: ["400", "500", "600", "700", "800"],
	variable: "--font-poppins",
	subsets: ["latin"],
});

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
	font-family: "Poppins";
	font-style: normal !important;
`;

const fontFamilyC = css`
	font-family: "filson-pro", sans-serif !important;
	font-style: normal !important;
`;

export const semanticFonts = {
	logo: css`
		${fontFamilyC}
		font-weight: 900 !important;
		font-size: ${spacer40} !important;
		/* line-height: ${spacer48} !important; */
	`,
	displayLarge: css`
		${fontFamilyA}
		font-weight: 700 !important;
		font-size: ${spacer80} !important;
		/* line-height: ${spacer80} !important; */
	`,
	displayMedium: css`
		${fontFamilyA}
		font-weight: 250 !important;
		font-size: ${spacer64} !important;
		/* line-height: ${spacer72} !important; */
	`,
	displaySmall: css`
		${fontFamilyA}
		font-weight: 700 !important;
		font-size: ${spacer40} !important;
		/* line-height: ${spacer48} !important; */
	`,
	headlineLarge: css`
		${fontFamilyA}
		font-weight: 700 !important;
		font-size: ${spacer32} !important;
		/* line-height: ${spacer40} !important; */
	`,
	headlineMediumStrong: css`
		${fontFamilyB}
		font-weight: 700 !important;
		font-size: ${spacer24} !important;
		/* line-height: ${spacer32} !important; */
	`,
	headlineMedium: css`
		${fontFamilyB}
		font-weight: 400 !important;
		font-size: ${spacer24} !important;
		/* line-height: ${spacer32} !important; */
	`,
	headlineSmall: css`
		${fontFamilyB}
		font-weight: 700 !important;
		font-size: ${spacer20} !important;
		/* line-height: ${spacer28} !important; */
	`,
	labelLarge: css`
		${fontFamilyB}
		font-weight: 600 !important;
		font-size: ${spacer14} !important;
		/* line-height: ${spacer20} !important; */
	`,
	labelMedium: css`
		${fontFamilyB}
		font-weight: 500 !important;
		font-size: ${spacer12} !important;
		/* line-height: ${spacer16} !important; */
	`,
	labelSmall: css`
		${fontFamilyB}
		font-weight: 600 !important;
		font-size: ${spacer11} !important;
		line-height: ${spacer16} !important;
	`,
	labelExtraSmall: css`
		${fontFamilyB}
		font-weight: 500 !important;
		font-size: ${spacer9} !important;
		line-height: ${spacer12} !important;
	`,
	bodyLarge: css`
		${fontFamilyB}
		font-weight: 400 !important;
		font-size: ${spacer16} !important;
		/* line-height: ${spacer24} !important; */
	`,
	bodyMedium: css`
		${fontFamilyB}
		font-weight: 400 !important;
		font-size: ${spacer14} !important;
		/* line-height: ${spacer20} !important; */
	`,
	bodySmall: css`
		${fontFamilyB}
		font-weight: 400 !important;
		font-size: ${spacer12} !important;
		/* line-height: ${spacer16} !important; */
	`,
};
