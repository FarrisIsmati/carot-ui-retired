export enum SemanticSetCores {
	BASE = "BASE",
	BASE_INVERTED = "BASE_INVERTED",
	PRIMARY = "PRIMARY",
	PRIMARY_ALT = "PRIMARY_ALT",
	PRIMARY_ALT_2 = "PRIMARY_ALT_2",
	SECONDARY = "SECONDARY",
	NEGATIVE = "NEGATIVE",
	DARK = "DARK",
	PRIMARY_SOFT = "PRIMARY_SOFT",
}

export enum SemanticTextColors {
	TEXT_BASE = "TEXT_BASE",
	TEXT_BASE_INVERTED = "TEXT_BASE_INVERTED",
	TEXT_PRIMARY = "TEXT_PRIMARY",
	TEXT_PRIMARY_ALT = "TEXT_PRIMARY_ALT",
	TEXT_PRIMARY_ALT_2 = "TEXT_PRIMARY_ALT_2",
	TEXT_SECONDARY = "TEXT_SECONDARY",
	TEXT_NEGATIVE = "TEXT_NEGATIVE",
	TEXT_DARK = "TEXT_DARK",
	TEXT_PRIMARY_SOFT = "PRIMARY_SOFT",
}

export enum SemanticTextColorsState {
	// Default
	TEXT_BASE_DEFAULT = "TEXT_BASE_DEFAULT",
	TEXT_BASE_INVERTED_DEFAULT = "TEXT_BASE_INVERTED_DEFAULT",
	TEXT_PRIMARY_DEFAULT = "TEXT_PRIMARY_DEFAULT",
	TEXT_PRIMARY_ALT_DEFAULT = "TEXT_PRIMARY_ALT_DEFAULT",
	TEXT_PRIMARY_ALT_2_DEFAULT = "TEXT_PRIMARY_ALT_2_DEFAULT",
	TEXT_SECONDARY_DEFAULT = "TEXT_SECONDARY_DEFAULT",
	TEXT_NEGATIVE_DEFAULT = "TEXT_NEGATIVE_DEFAULT",
	TEXT_DARK_DEFAULT = "TEXT_DARK_DEFAULT",
	TEXT_PRIMARY_SOFT_DEFAULT = "TEXT_PRIMARY_SOFT_DEFAULT",
	// Hover
	TEXT_BASE_HOVER = "TEXT_BASE_HOVER",
	TEXT_BASE_INVERTED_HOVER = "TEXT_BASE_INVERTED_HOVER",
	TEXT_PRIMARY_INVERTED = "TEXT_PRIMARY_INVERTED",
	TEXT_PRIMARY_HOVER = "TEXT_PRIMARY_HOVER",
	TEXT_PRIMARY_ALT_HOVER = "TEXT_PRIMARY_ALT_HOVER",
	TEXT_PRIMARY_ALT_2_HOVER = "TEXT_PRIMARY_ALT_2_HOVER",
	TEXT_SECONDARY_HOVER = "TEXT_SECONDARY_HOVER",
	TEXT_NEGATIVE_HOVER = "TEXT_NEGATIVE_HOVER",
	TEXT_DARK_HOVER = "TEXT_DARK_HOVER",
	TEXT_PRIMARY_SOFT_HOVER = "TEXT_PRIMARY_SOFT_HOVER",
	// Focus
	TEXT_BASE_FOCUS = "TEXT_BASE_FOCUS",
	TEXT_BASE_INVERTED_FOCUS = "TEXT_BASE_INVERTED_FOCUS",
	TEXT_PRIMARY_FOCUS = "TEXT_PRIMARY_FOCUS",
	TEXT_PRIMARY_ALT_FOCUS = "TEXT_PRIMARY_ALT_FOCUS",
	TEXT_PRIMARY_ALT_2_FOCUS = "TEXT_PRIMARY_ALT_2_FOCUS",
	TEXT_SECONDARY_FOCUS = "TEXT_SECONDARY_FOCUS",
	TEXT_NEGATIVE_FOCUS = "TEXT_NEGATIVE_FOCUS",
	TEXT_DARK_FOCUS = "TEXT_DARK_FOCUS",
	TEXT_PRIMARY_SOFT_FOCUS = "TEXT_PRIMARY_SOFT_FOCUS",

	// Active
	TEXT_BASE_ACTIVE = "TEXT_BASE_ACTIVE",
	TEXT_BASE_INVERTED_ACTIVE = "TEXT_BASE_INVERTED_ACTIVE",
	TEXT_PRIMARY_ACTIVE = "TEXT_PRIMARY_ACTIVE",
	TEXT_PRIMARY_ALT_ACTIVE = "TEXT_PRIMARY_ALT_ACTIVE",
	TEXT_PRIMARY_ALT_2_ACTIVE = "TEXT_PRIMARY_ALT_2_ACTIVE",
	TEXT_SECONDARY_ACTIVE = "TEXT_SECONDARY_ACTIVE",
	TEXT_NEGATIVE_ACTIVE = "TEXT_NEGATIVE_ACTIVE",
	TEXT_DARK_ACTIVE = "TEXT_DARK_ACTIVE",
	TEXT_PRIMARY_SOFT_ACTIVE = "TEXT_PRIMARY_SOFT_ACTIVE",

	// Disabled
	TEXT_BASE_DISABLED = "TEXT_BASE_DISABLED",
	TEXT_BASE_INVERTED_DISABLED = "TEXT_BASE_INVERTED_DISABLED",
	TEXT_PRIMARY_DISABLED = "TEXT_PRIMARY_DISABLED",
	TEXT_PRIMARY_ALT_DISABLED = "TEXT_PRIMARY_ALT_DISABLED",
	TEXT_PRIMARY_ALT_2_DISABLED = "TEXT_PRIMARY_ALT_2_DISABLED",
	TEXT_SECONDARY_DISABLED = "TEXT_SECONDARY_DISABLED",
	TEXT_NEGATIVE_DISABLED = "TEXT_NEGATIVE_DISABLED",
	TEXT_DARK_DISABLED = "TEXT_DARK_DISABLED",
	TEXT_PRIMARY_SOFT_DISABLED = "TEXT_PRIMARY_SOFT_DISABLED",
}

export enum SemanticEssentialColors {
	ESSENTIAL_BASE = "ESSENTIAL_BASE",
	ESSENTIAL_BASE_INVERTED = "ESSENTIAL_BASE_INVERTED",
	ESSENTIAL_PRIMARY = "ESSENTIAL_PRIMARY",
	ESSENTIAL_PRIMARY_ALT = "ESSENTIAL_PRIMARY_ALT",
	ESSENTIAL_PRIMARY_ALT_2 = "ESSENTIAL_PRIMARY_ALT_2",
	ESSENTIAL_SECONDARY = "ESSENTIAL_SECONDARY",
	ESSENTIAL_NEGATIVE = "ESSENTIAL_NEGATIVE",
	ESSENTIAL_DARK = "ESSENTIAL_DARK",
	ESSENTIAL_PRIMARY_SOFT = "ESSENTIAL_PRIMARY_SOFT",
}

export enum SemanticEssentialColorsState {
	// Default
	ESSENTIAL_BASE_DEFAULT = "ESSENTIAL_BASE_DEFAULT",
	ESSENTIAL_BASE_INVERTED_DEFAULT = "ESSENTIAL_BASE_INVERTED_DEFAULT",
	ESSENTIAL_PRIMARY_DEFAULT = "ESSENTIAL_PRIMARY_DEFAULT",
	ESSENTIAL_PRIMARY_ALT_DEFAULT = "ESSENTIAL_PRIMARY_ALT_DEFAULT",
	ESSENTIAL_PRIMARY_ALT_2_DEFAULT = "ESSENTIAL_PRIMARY_ALT_2_DEFAULT",
	ESSENTIAL_SECONDARY_DEFAULT = "ESSENTIAL_SECONDARY_DEFAULT",
	ESSENTIAL_NEGATIVE_DEFAULT = "ESSENTIAL_NEGATIVE_DEFAULT",
	ESSENTIAL_DARK_DEFAULT = "ESSENTIAL_DARK_DEFAULT",
	ESSENTIAL_PRIMARY_SOFT_DEFAULT = "ESSENTIAL_PRIMARY_SOFT_DEFAULT",
	// Hover
	ESSENTIAL_BASE_HOVER = "ESSENTIAL_BASE_HOVER",
	ESSENTIAL_BASE_INVERTED_HOVER = "ESSENTIAL_BASE_INVERTED_HOVER",
	ESSENTIAL_PRIMARY_HOVER = "ESSENTIAL_PRIMARY_HOVER",
	ESSENTIAL_PRIMARY_ALT_HOVER = "ESSENTIAL_PRIMARY_ALT_HOVER",
	ESSENTIAL_PRIMARY_ALT_2_HOVER = "ESSENTIAL_PRIMARY_ALT_2_HOVER",
	ESSENTIAL_SECONDARY_HOVER = "ESSENTIAL_SECONDARY_HOVER",
	ESSENTIAL_NEGATIVE_HOVER = "ESSENTIAL_NEGATIVE_HOVER",
	ESSENTIAL_DARK_HOVER = "ESSENTIAL_DARK_HOVER",
	ESSENTIAL_PRIMARY_SOFT_HOVER = "ESSENTIAL_PRIMARY_SOFT_HOVER",
	// Focus
	ESSENTIAL_BASE_FOCUS = "ESSENTIAL_BASE_FOCUS",
	ESSENTIAL_PRIMARY_FOCUS = "ESSENTIAL_PRIMARY_FOCUS",
	ESSENTIAL_PRIMARY_ALT_FOCUS = "ESSENTIAL_PRIMARY_ALT_FOCUS",
	ESSENTIAL_PRIMARY_ALT_2_FOCUS = "ESSENTIAL_PRIMARY_ALT_2_FOCUS",
	ESSENTIAL_SECONDARY_FOCUS = "ESSENTIAL_SECONDARY_FOCUS",
	ESSENTIAL_NEGATIVE_FOCUS = "ESSENTIAL_NEGATIVE_FOCUS",
	ESSENTIAL_DARK_FOCUS = "ESSENTIAL_DARK_FOCUS",
	ESSENTIAL_PRIMARY_SOFT_FOCUS = "ESSENTIAL_PRIMARY_SOFT_FOCUS",
	// Active
	ESSENTIAL_BASE_ACTIVE = "ESSENTIAL_BASE_ACTIVE",
	ESSENTIAL_BASE_INVERTED_ACTIVE = "ESSENTIAL_BASE_INVERTED_ACTIVE",
	ESSENTIAL_PRIMARY_ACTIVE = "ESSENTIAL_PRIMARY_ACTIVE",
	ESSENTIAL_PRIMARY_ALT_ACTIVE = "ESSENTIAL_PRIMARY_ALT_ACTIVE",
	ESSENTIAL_PRIMARY_ALT_2_ACTIVE = "ESSENTIAL_PRIMARY_ALT_2_ACTIVE",
	ESSENTIAL_SECONDARY_ACTIVE = "ESSENTIAL_SECONDARY_ACTIVE",
	ESSENTIAL_NEGATIVE_ACTIVE = "ESSENTIAL_NEGATIVE_ACTIVE",
	ESSENTIAL_DARK_ACTIVE = "ESSENTIAL_DARK_ACTIVE",
	ESSENTIAL_PRIMARY_SOFT_ACTIVE = "ESSENTIAL_PRIMARY_SOFT_ACTIVE",
	// Disabled
	ESSENTIAL_BASE_DISABLED = "ESSENTIAL_BASE_DISABLED",
	ESSENTIAL_BASE_INVERTED_DISABLED = "ESSENTIAL_BASE_INVERTED_DISABLED",
	ESSENTIAL_PRIMARY_DISABLED = "ESSENTIAL_PRIMARY_DISABLED",
	ESSENTIAL_PRIMARY_ALT_DISABLED = "ESSENTIAL_PRIMARY_ALT_DISABLED",
	ESSENTIAL_PRIMARY_ALT_2_DISABLED = "ESSENTIAL_PRIMARY_ALT_2_DISABLED",
	ESSENTIAL_SECONDARY_DISABLED = "ESSENTIAL_SECONDARY_DISABLED",
	ESSENTIAL_NEGATIVE_DISABLED = "ESSENTIAL_NEGATIVE_DISABLED",
	ESSENTIAL_DARK_DISABLED = "ESSENTIAL_DARK_DISABLED",
	ESSENTIAL_PRIMARY_SOFT_DISABLED = "ESSENTIAL_PRIMARY_SOFT_DISABLED",
}

export enum ColorBaseCore {
	WHITE = "WHITE",
	BLACK = "BLACK",
	NEUTRAL_2 = "NEUTRAL_2",
	NEUTRAL_3 = "NEUTRAL_3",
	NEUTRAL_5 = "NEUTRAL_5",
	NEUTRAL_6 = "NEUTRAL_6",
	NEUTRAL_7 = "NEUTRAL_7",
	NEUTRAL_8 = "NEUTRAL_8",
	NEUTRAL_9 = "NEUTRAL_9",
	NEUTRAL_10 = "NEUTRAL_10",
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
	BLUE_5 = "BLUE_5",
}

export const colorBaseMap = {
	[ColorBaseCore.WHITE]: "#FFFFFF",
	[ColorBaseCore.NEUTRAL_10]: "#FBFBFB",
	[ColorBaseCore.BLACK]: "#141414",
	[ColorBaseCore.NEUTRAL_2]: "#525252",
	[ColorBaseCore.NEUTRAL_3]: "#808080",
	[ColorBaseCore.NEUTRAL_5]: "#9D9D9D",
	[ColorBaseCore.NEUTRAL_6]: "#B8B8B8",
	[ColorBaseCore.NEUTRAL_7]: "#D7D7D7",
	[ColorBaseCore.NEUTRAL_8]: "#E7E7E7",
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
	[ColorBaseCore.BLUE_5]: "#5A94E5",
};

export const semanticPalletMap = {
	// BASE
	[SemanticTextColors.TEXT_BASE]: {
		[SemanticTextColorsState.TEXT_BASE_DEFAULT]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_BASE_HOVER]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_BASE_FOCUS]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_BASE_ACTIVE]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_BASE_DISABLED]: ColorBaseCore.NEUTRAL_6,
	},
	[SemanticEssentialColors.ESSENTIAL_BASE]: {
		[SemanticEssentialColorsState.ESSENTIAL_BASE_DEFAULT]: ColorBaseCore.WHITE,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_HOVER]: ColorBaseCore.WHITE,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_FOCUS]: ColorBaseCore.WHITE,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_ACTIVE]: ColorBaseCore.WHITE,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_DISABLED]:
			ColorBaseCore.NEUTRAL_6,
	},
	// BASE INVERTED
	[SemanticTextColors.TEXT_BASE_INVERTED]: {
		[SemanticTextColorsState.TEXT_BASE_DEFAULT]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_BASE_HOVER]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_BASE_FOCUS]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_BASE_ACTIVE]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_BASE_DISABLED]: ColorBaseCore.WHITE,
	},
	[SemanticEssentialColors.ESSENTIAL_BASE_INVERTED]: {
		[SemanticEssentialColorsState.ESSENTIAL_BASE_DEFAULT]:
			ColorBaseCore.NEUTRAL_8,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_HOVER]:
			ColorBaseCore.NEUTRAL_2,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_FOCUS]:
			ColorBaseCore.NEUTRAL_2,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_ACTIVE]:
			ColorBaseCore.NEUTRAL_2,
		[SemanticEssentialColorsState.ESSENTIAL_BASE_DISABLED]:
			ColorBaseCore.NEUTRAL_6,
	},
	// NEGATIVE
	[SemanticTextColors.TEXT_NEGATIVE]: {
		[SemanticTextColorsState.TEXT_NEGATIVE_DEFAULT]: ColorBaseCore.ERROR_4,
		[SemanticTextColorsState.TEXT_NEGATIVE_HOVER]: ColorBaseCore.ERROR_4,
		[SemanticTextColorsState.TEXT_NEGATIVE_FOCUS]: ColorBaseCore.ERROR_4,
		[SemanticTextColorsState.TEXT_NEGATIVE_ACTIVE]: ColorBaseCore.ERROR_4,
		[SemanticTextColorsState.TEXT_NEGATIVE_DISABLED]: ColorBaseCore.ERROR_4,
	},
	[SemanticEssentialColors.ESSENTIAL_NEGATIVE]: {
		[SemanticEssentialColorsState.ESSENTIAL_NEGATIVE_DEFAULT]:
			ColorBaseCore.ERROR_4,
		[SemanticEssentialColorsState.ESSENTIAL_NEGATIVE_HOVER]:
			ColorBaseCore.ERROR_4,
		[SemanticEssentialColorsState.ESSENTIAL_NEGATIVE_FOCUS]:
			ColorBaseCore.ERROR_4,
		[SemanticEssentialColorsState.ESSENTIAL_NEGATIVE_ACTIVE]:
			ColorBaseCore.ERROR_4,
		[SemanticEssentialColorsState.ESSENTIAL_NEGATIVE_DISABLED]:
			ColorBaseCore.ERROR_4,
	},
	// PRIMARY
	[SemanticTextColors.TEXT_PRIMARY]: {
		[SemanticTextColorsState.TEXT_PRIMARY_DEFAULT]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_PRIMARY_HOVER]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_FOCUS]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_ACTIVE]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_DISABLED]: ColorBaseCore.WHITE,
	},
	[SemanticEssentialColors.ESSENTIAL_PRIMARY]: {
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_DEFAULT]:
			ColorBaseCore.RED_3,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_HOVER]: ColorBaseCore.RED_1,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_FOCUS]: ColorBaseCore.RED_3,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ACTIVE]:
			ColorBaseCore.RED_1,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_DISABLED]:
			ColorBaseCore.RED_7,
	},
	// PRIMARY ALT
	[SemanticTextColors.TEXT_PRIMARY_ALT]: {
		[SemanticTextColorsState.TEXT_PRIMARY_ALT_DEFAULT]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_PRIMARY_ALT_HOVER]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_ALT_FOCUS]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_ALT_ACTIVE]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_ALT_DISABLED]: ColorBaseCore.WHITE,
	},
	[SemanticEssentialColors.ESSENTIAL_PRIMARY_ALT]: {
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_DEFAULT]:
			ColorBaseCore.GREEN_3,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_HOVER]:
			ColorBaseCore.GREEN_1,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_FOCUS]:
			ColorBaseCore.GREEN_3,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_ACTIVE]:
			ColorBaseCore.GREEN_1,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_DISABLED]:
			ColorBaseCore.GREEN_7,
	},
	// PRIMARY ALT 2
	[SemanticTextColors.TEXT_PRIMARY_ALT_2]: {
		[SemanticTextColorsState.TEXT_PRIMARY_ALT_2_DEFAULT]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_PRIMARY_ALT_2_HOVER]: ColorBaseCore.WHITE,

		[SemanticTextColorsState.TEXT_PRIMARY_ALT_2_FOCUS]: ColorBaseCore.BLACK,

		[SemanticTextColorsState.TEXT_PRIMARY_ALT_2_ACTIVE]: ColorBaseCore.BLACK,

		[SemanticTextColorsState.TEXT_PRIMARY_ALT_2_DISABLED]:
			ColorBaseCore.NEUTRAL_6,
	},
	[SemanticEssentialColors.ESSENTIAL_PRIMARY_ALT_2]: {
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_2_DEFAULT]:
			ColorBaseCore.GREEN_5,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_2_HOVER]:
			ColorBaseCore.GREEN_3,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_2_FOCUS]:
			ColorBaseCore.GREEN_5,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_2_ACTIVE]:
			ColorBaseCore.GREEN_5,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_ALT_2_DISABLED]:
			ColorBaseCore.GREEN_7,
	},
	// SECONDARY
	[SemanticTextColors.TEXT_SECONDARY]: {
		[SemanticTextColorsState.TEXT_SECONDARY_DEFAULT]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_SECONDARY_HOVER]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_SECONDARY_FOCUS]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_SECONDARY_ACTIVE]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_SECONDARY_DISABLED]: ColorBaseCore.NEUTRAL_6,
	},
	[SemanticEssentialColors.ESSENTIAL_SECONDARY]: {
		[SemanticEssentialColorsState.ESSENTIAL_SECONDARY_DEFAULT]:
			ColorBaseCore.NEUTRAL_9,
		[SemanticEssentialColorsState.ESSENTIAL_SECONDARY_HOVER]:
			ColorBaseCore.NEUTRAL_8,
		[SemanticEssentialColorsState.ESSENTIAL_SECONDARY_FOCUS]:
			ColorBaseCore.NEUTRAL_8,
		[SemanticEssentialColorsState.ESSENTIAL_SECONDARY_ACTIVE]:
			ColorBaseCore.NEUTRAL_8,
		[SemanticEssentialColorsState.ESSENTIAL_SECONDARY_DISABLED]:
			ColorBaseCore.NEUTRAL_9,
	},
	// DARK
	[SemanticTextColors.TEXT_DARK]: {
		[SemanticTextColorsState.TEXT_DARK_DEFAULT]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_DARK_HOVER]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_DARK_FOCUS]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_DARK_ACTIVE]: ColorBaseCore.WHITE,
		[SemanticTextColorsState.TEXT_DARK_DISABLED]: ColorBaseCore.NEUTRAL_6,
	},
	[SemanticEssentialColors.ESSENTIAL_DARK]: {
		[SemanticEssentialColorsState.ESSENTIAL_DARK_DEFAULT]: ColorBaseCore.BLACK,
		[SemanticEssentialColorsState.ESSENTIAL_DARK_HOVER]: ColorBaseCore.BLACK,
		[SemanticEssentialColorsState.ESSENTIAL_DARK_FOCUS]: ColorBaseCore.BLACK,
		[SemanticEssentialColorsState.ESSENTIAL_DARK_ACTIVE]: ColorBaseCore.BLACK,
		[SemanticEssentialColorsState.ESSENTIAL_DARK_DISABLED]: ColorBaseCore.BLACK,
	},
	// PRIMARY SOFT
	[SemanticTextColors.TEXT_PRIMARY_SOFT]: {
		[SemanticTextColorsState.TEXT_PRIMARY_SOFT_DEFAULT]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_PRIMARY_SOFT_HOVER]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_PRIMARY_SOFT_FOCUS]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_PRIMARY_SOFT_ACTIVE]: ColorBaseCore.BLACK,
		[SemanticTextColorsState.TEXT_PRIMARY_SOFT_DISABLED]:
			ColorBaseCore.NEUTRAL_6,
	},
	[SemanticEssentialColors.ESSENTIAL_PRIMARY_SOFT]: {
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_SOFT_DEFAULT]:
			ColorBaseCore.RED_7,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_SOFT_HOVER]:
			ColorBaseCore.ORANGE_7,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_SOFT_FOCUS]:
			ColorBaseCore.ORANGE_7,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_SOFT_ACTIVE]:
			ColorBaseCore.ORANGE_7,
		[SemanticEssentialColorsState.ESSENTIAL_PRIMARY_SOFT_DISABLED]:
			ColorBaseCore.ORANGE_7,
	},
};

export interface ColorSetStates {
	default: string;
	hover: string;
	focus: string;
	active: string;
	disabled: string;
}

export interface ColorSet {
	text: ColorSetStates;
	essential: ColorSetStates;
}

// Convert base color names to HEX
export const colorToHex = (colorBase: ColorBaseCore) => colorBaseMap[colorBase];

export const semanticCoreMap = {
	BASE: {
		text: SemanticTextColors.TEXT_BASE,
		essential: SemanticEssentialColors.ESSENTIAL_BASE,
	},
	BASE_INVERTED: {
		text: SemanticTextColors.TEXT_BASE_INVERTED,
		essential: SemanticEssentialColors.ESSENTIAL_BASE_INVERTED,
	},
	NEGATIVE: {
		text: SemanticTextColors.TEXT_NEGATIVE,
		essential: SemanticEssentialColors.ESSENTIAL_NEGATIVE,
	},
	PRIMARY: {
		text: SemanticTextColors.TEXT_PRIMARY,
		essential: SemanticEssentialColors.ESSENTIAL_PRIMARY,
	},
	PRIMARY_ALT: {
		text: SemanticTextColors.TEXT_PRIMARY_ALT,
		essential: SemanticEssentialColors.ESSENTIAL_PRIMARY_ALT,
	},
	PRIMARY_ALT_2: {
		text: SemanticTextColors.TEXT_PRIMARY_ALT_2,
		essential: SemanticEssentialColors.ESSENTIAL_PRIMARY_ALT_2,
	},
	SECONDARY: {
		text: SemanticTextColors.TEXT_SECONDARY,
		essential: SemanticEssentialColors.ESSENTIAL_SECONDARY,
	},
	DARK: {
		text: SemanticTextColors.TEXT_DARK,
		essential: SemanticEssentialColors.ESSENTIAL_DARK,
	},
	PRIMARY_SOFT: {
		text: SemanticTextColors.TEXT_PRIMARY_SOFT,
		essential: SemanticEssentialColors.ESSENTIAL_PRIMARY_SOFT,
	},
};

// Convert semantic colors to HEX
export const getColorSet = (semanticCore: SemanticSetCores) => {
	const colorSet: ColorSet = {
		text: {
			default: "",
			hover: "",
			focus: "",
			active: "",
			disabled: "",
		},
		essential: {
			default: "",
			hover: "",
			focus: "",
			active: "",
			disabled: "",
		},
	};

	const textPallet = semanticCoreMap[semanticCore].text;
	Object.entries(semanticPalletMap[textPallet]).forEach((kv) => {
		const keyWords = kv[0].split("_");
		const state = keyWords[
			keyWords.length - 1
		].toLowerCase() as keyof ColorSetStates;
		const colorBase = kv[1];

		if (colorSet.text[state] === undefined) {
			throw new Error(`Could not map color state '${state}' to pallet map`);
		}

		colorSet.text[state] = colorToHex(colorBase);
	});

	const essentialPallet = semanticCoreMap[semanticCore].essential;
	Object.entries(semanticPalletMap[essentialPallet]).forEach((kv) => {
		const keyWords = kv[0].split("_");
		const state = keyWords[
			keyWords.length - 1
		].toLowerCase() as keyof ColorSetStates;
		const colorBase = kv[1];

		if (colorSet.essential[state] === undefined) {
			throw new Error(`Could not map color state '${state}' to pallet map`);
		}

		colorSet.essential[state] = colorToHex(colorBase);
	});

	return colorSet;
};
