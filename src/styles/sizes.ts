// Spacers
export const spacer2 = "2px";
export const spacer4 = "4px";
export const spacer8 = "8px";
export const spacer10 = "10px";
export const spacer12 = "12px";
export const spacer16 = "16px";
export const spacer18 = "18px";
export const spacer20 = "20px";
export const spacer24 = "24px";
export const spacer32 = "32px";
export const spacer40 = "40px";
export const spacer48 = "48px";
export const spacer56 = "56px";
export const spacer64 = "64px";
export const spacer72 = "72px";
export const spacer80 = "80px";

export enum Sizes {
	SMALL = "SMALL",
	MEDIUM = "MEDIUM",
	LARGE = "LARGE",
}

// Button
export const minBlockSizeMap = {
	[Sizes.SMALL]: spacer32,
	[Sizes.MEDIUM]: spacer48,
	[Sizes.LARGE]: spacer56,
};

export const buttonPaddingMap = {
	[Sizes.SMALL]: `${spacer10} ${spacer16}`,
	[Sizes.MEDIUM]: `${spacer18} ${spacer24}`,
	[Sizes.LARGE]: `${spacer18} ${spacer24}`,
};

// Icon
export const iconSizeMap = {
	[Sizes.SMALL]: spacer16,
	[Sizes.MEDIUM]: spacer16,
	[Sizes.LARGE]: spacer16,
};

export const iconButtonPaddingMap = {
	[Sizes.SMALL]: spacer8,
	[Sizes.MEDIUM]: spacer8,
	[Sizes.LARGE]: spacer12,
};
