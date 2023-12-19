export enum DateFormatEnum {
	MMDDYYYY = "MMDDYYYY",
	DDMMYYYY = "DDMMYYYY",
	YYYYMMDD = "YYYYMMDD",
}

export type Range<T> = [T, T];
type ValuePiece = Date | null;

export type Value = ValuePiece | Range<ValuePiece>;
