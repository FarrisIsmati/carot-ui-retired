// Spacers
export const spacer2 = "2px";
export const spacer4 = "4px";
export const spacer6 = "6px";
export const spacer8 = "8px";
export const spacer9 = "9px";
export const spacer10 = "10px";
export const spacer11 = "11px";
export const spacer12 = "12px";
export const spacer14 = "14px";
export const spacer16 = "16px";
export const spacer18 = "18px";
export const spacer20 = "20px";
export const spacer24 = "24px";
export const spacer28 = "28px";
export const spacer32 = "32px";
export const spacer40 = "40px";
export const spacer48 = "48px";
export const spacer56 = "56px";
export const spacer64 = "64px";
export const spacer72 = "72px";
export const spacer80 = "80px";
export const spacer88 = "88px";
export const spacer100 = "100px";
export const spacer156 = "156px";
export const spacer200 = "200px";
export const spacer320 = "320px";

/**
 * Converts a string with px in the end to a number
 * @param size
 * @returns number
 */
export const pxStringToNum = (size: string): number => {
	return parseInt(size.slice(0, -2));
};

export enum Sizes {
	SMALL = "SMALL",
	MEDIUM = "MEDIUM",
	LARGE = "LARGE",
}

// Icon
export const iconSizeMap = {
	[Sizes.SMALL]: spacer16,
	[Sizes.MEDIUM]: spacer18,
	[Sizes.LARGE]: spacer24,
};

// Control
export const controlPaddingBlock = { sm: spacer4, md: spacer8, lg: spacer12 };
