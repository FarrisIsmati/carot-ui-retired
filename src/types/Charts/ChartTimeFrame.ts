export enum ChartTimeframeEnum {
	Month = "Month",
	Year = "Year",
}

export type TimeFilterState = {
	[key in ChartTimeframeEnum]: boolean;
};
