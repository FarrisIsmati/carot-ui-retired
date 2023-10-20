import _ from "lodash";

export const marginCalculator = (cost: number, revenue: number) => {
	const isNegative = revenue < cost;

	if (isNegative) {
		return _.round(-1 * ((cost / revenue) * 100 - 100), 2);
	}
	return _.round((revenue / cost) * 100 - 100, 2);
};

export const profitCalculator = (cost: number, revenue: number) =>
	_.round(revenue - cost, 2);
