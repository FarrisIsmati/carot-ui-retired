export enum SemanticBackgroundColors {
	BACKGROUND_BASE = "BACKGROUND_BASE",
	BACKGROUND_HIGHLIGHT = "BACKGROUND_HIGHLIGHT",
	BACKGROUND_PRESS = "BACKGROUND_PRESS",
}

export enum SemanticTextColors {
	TEXT_BASE = "TEXT_BASE",
	TEXT_SUBDUED = "TEXT_SUBDUED",
	TEXT_BRIGHT_ACCENT = "TEXT_BRIGHT_ACCENT",
	TEXT_NEGATIVE = "TEXT_NEGATIVE",
	TEXT_WARNING = "TEXT_WARNING",
	TEXT_POSITIVE = "TEXT_POSITIVE",
	TEXT_ANNOUNCEMENT = "TEXT_ANNOUNCEMNT",
}

export enum SemanticEssentialColors {
	ESSENTIAL_BASE = "ESSENTIAL_BASE",
	ESSENTIAL_SUBDUED = "ESSENTIAL_SUBDUED",
	ESSENTIAL_BRIGHT_ACCENT = "ESSENTIAL_BRIGHT_ACCENT",
	ESSENTIAL_NEGATIVE = "ESSENTIAL_NEGATIVE",
	ESSENTIAL_WARNING = "ESSENTIAL_WARNING",
	ESSENTIAL_POSITIVE = "ESSENTIAL_POSITIVE",
	ESSENTIAL_ANNOUNCEMENT = "ESSENTIAL_ANNOUNCEMNT",
}

export type SemanticColors =
	| SemanticBackgroundColors
	| SemanticTextColors
	| SemanticEssentialColors;

export enum ColorBaseCore {
	WHITE = "WHITE",
	BLACK = "BLACK",
	NEUTRAL_2 = "NEUTRAL_2",
	NEUTRAL_3 = "NEUTRAL_3",
	NEUTRAL_5 = "NEUTRAL_5",
	NEUTRAL_6 = "NEUTRAL_6",
	NEUTRAL_7 = "NEUTRAL_7",
	NEUTRAL_9 = "NEUTRAL_9",
	RED_1 = "RED_1",
	RED_3 = "RED_3",
	RED_5 = "RED_5",
	RED_7 = "RED_7",
	ORANGE_1 = "ORANGE_1",
	ORANGE_3 = "ORANGE_3",
	ORANGE_5 = "ORANGE_5",
	ORANGE_7 = "ORANGE_7",
	GREEN_1 = "GREEN_1",
	GREEN_3 = "GREEN_3",
	GREEN_4 = "GREEN_4",
	GREEN_5 = "GREEN_5",
	GREEN_7 = "GREEN_7",
	ERROR_2 = "ERROR_2",
	ERROR_3 = "ERROR_3",
	ERROR_4 = "ERROR_4",
	ERROR_5 = "ERROR_5",
	ERROR_6 = "ERROR_6",
	ERROR_7 = "ERROR_7",
}

const colorBaseMap = {
	[ColorBaseCore.WHITE]: "#FFFFFF",
	[ColorBaseCore.BLACK]: "#141414",
	[ColorBaseCore.NEUTRAL_2]: "#525252",
	[ColorBaseCore.NEUTRAL_3]: "#808080",
	[ColorBaseCore.NEUTRAL_5]: "#9D9D9D",
	[ColorBaseCore.NEUTRAL_6]: "#B8B8B8",
	[ColorBaseCore.NEUTRAL_7]: "#D7D7D7",
	[ColorBaseCore.NEUTRAL_9]: "#F5F5F5",
	[ColorBaseCore.RED_1]: "#8F350E",
	[ColorBaseCore.RED_3]: "#DF6842",
	[ColorBaseCore.RED_5]: "#F29679",
	[ColorBaseCore.RED_7]: "#FFEAE3",
	[ColorBaseCore.ORANGE_1]: "#C86C00",
	[ColorBaseCore.ORANGE_3]: "#F2982D",
	[ColorBaseCore.ORANGE_5]: "#F9D0A1",
	[ColorBaseCore.ORANGE_7]: "#FFEDD9",
	[ColorBaseCore.GREEN_1]: "#226527",
	[ColorBaseCore.GREEN_3]: "#539157",
	[ColorBaseCore.GREEN_4]: "#49A972",
	[ColorBaseCore.GREEN_5]: "#B8D4B0",
	[ColorBaseCore.GREEN_7]: "#F1F8E9",
	[ColorBaseCore.ERROR_2]: "#601410",
	[ColorBaseCore.ERROR_3]: "#8C1D18",
	[ColorBaseCore.ERROR_4]: "#B3261E",
	[ColorBaseCore.ERROR_5]: "#DC362E",
	[ColorBaseCore.ERROR_6]: "#E46962",
	[ColorBaseCore.ERROR_7]: "#EC928E",
};

const semanticColorMap = {
	[SemanticBackgroundColors.BACKGROUND_BASE]: ColorBaseCore.WHITE,
	[SemanticBackgroundColors.BACKGROUND_HIGHLIGHT]: ColorBaseCore.NEUTRAL_9,
	[SemanticBackgroundColors.BACKGROUND_PRESS]: ColorBaseCore.NEUTRAL_7,
	[SemanticTextColors.TEXT_ANNOUNCEMENT]: ColorBaseCore.WHITE,
	[SemanticTextColors.TEXT_BASE]: ColorBaseCore.BLACK,
	[SemanticTextColors.TEXT_BRIGHT_ACCENT]: ColorBaseCore.GREEN_4,
	[SemanticTextColors.TEXT_NEGATIVE]: ColorBaseCore.ERROR_5,
	[SemanticTextColors.TEXT_POSITIVE]: ColorBaseCore.GREEN_3,
	[SemanticTextColors.TEXT_SUBDUED]: ColorBaseCore.NEUTRAL_2,
	[SemanticTextColors.TEXT_WARNING]: ColorBaseCore.ERROR_6,
	[SemanticEssentialColors.ESSENTIAL_ANNOUNCEMENT]: ColorBaseCore.WHITE,
	[SemanticEssentialColors.ESSENTIAL_BASE]: ColorBaseCore.ORANGE_5,
	[SemanticEssentialColors.ESSENTIAL_BRIGHT_ACCENT]: ColorBaseCore.ORANGE_5,
	[SemanticEssentialColors.ESSENTIAL_NEGATIVE]: ColorBaseCore.ERROR_5,
	[SemanticEssentialColors.ESSENTIAL_POSITIVE]: ColorBaseCore.GREEN_5,
	[SemanticEssentialColors.ESSENTIAL_SUBDUED]: ColorBaseCore.ORANGE_3,
	[SemanticEssentialColors.ESSENTIAL_WARNING]: ColorBaseCore.ERROR_6,
};

// Convert base color names to HEX
export const colorToHex = (colorBase: ColorBaseCore) => colorBaseMap[colorBase];

// Convert semantic colors to HEX
export const semanticColorToHex = (semanticColor: SemanticColors) =>
	colorToHex(semanticColorMap[semanticColor]);
