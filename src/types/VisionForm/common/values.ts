// Input mode of a numeric value
export enum InputModeEnum {
	LOW = "LOW",
	AVERAGE = "AVERAGE",
	HIGH = "HIGH",
	DEFAULT = "DEFAULT",
}

// Captures the value range of a numeric field
export interface NumericValue {
	[InputModeEnum.LOW]: number | undefined;
	[InputModeEnum.AVERAGE]: number | undefined;
	[InputModeEnum.HIGH]: number | undefined;
}
