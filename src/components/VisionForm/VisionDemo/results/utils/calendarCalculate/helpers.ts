import { round } from "lodash";

export const calculateTaxes = (profit: number, taxRate: number) => {
	if (profit <= 0) {
		return 0;
	}
	return round(profit * (taxRate / 100));
};
