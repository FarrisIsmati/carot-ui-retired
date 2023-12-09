import { DateFormatEnum } from "@/designSystem/DatePicker/types";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import _ from "lodash";

//
// Overview Utils
//
export const getCountryDateFormat = (country: CountriesEnum) => {
	if (country === CountriesEnum.USA) {
		return DateFormatEnum.MMDDYYYY;
	}

	if (
		[
			CountriesEnum.China,
			CountriesEnum.Japan,
			CountriesEnum.Korea,
			CountriesEnum.Iran,
		].includes(country)
	) {
		return DateFormatEnum.YYYYMMDD;
	}

	return DateFormatEnum.DDMMYYYY;
};

//
// Revenue Utils
//

// Get the % margin +/- of goods
export const marginCalculator = (cost: number, revenue: number) => {
	if (cost === 0 && revenue === 0) {
		return 0;
	}
	return _.round((revenue / cost) * 100 - 100, 2);
};

// Get cost to make from % margin
export const revenueFromMarginCalculator = (cost: number, margin: number) =>
	_.round((margin / 100 + 1) * cost);

// Get profit amount from cost/revenue
export const profitCalculator = (cost: number, revenue: number) =>
	_.round(revenue - cost, 2);

// Get profit amount from margin
export const profitFromMarginCalculator = (cost: number, margin: number) => {
	return _.round((margin / 100) * cost);
};

// Get revenue from profit amount
export const revenueFromProfitAmount = (cost: number, profitAmount: number) => {
	return _.round(cost + profitAmount);
};

// Get margin from profit amount
export const marginFromProfitAmount = (cost: number, profitAmount: number) => {
	return _.round((profitAmount / cost) * 100);
};
