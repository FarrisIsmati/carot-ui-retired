export enum ChartFilterEnum {
	Month = "Month",
	Year = "Year",
}

export type TimeFilterState = {
	[key in ChartFilterEnum]: boolean;
};
