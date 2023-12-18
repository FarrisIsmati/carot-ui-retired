import * as d3 from "d3";

/**
 * Generates a number by N digits entered
 * If you enter 1 you'll get 1
 * If you enter 3 you'll get 100
 * @param n
 * @returns
 */
export const generateNumberByDigits = (n: number) => {
	if (n === 1) {
		return 1;
	}

	let str = "1";
	for (let i = 1; i < n; i++) {
		str += "0";
	}
	return parseInt(str);
};
/*
 * Get the greatest extend of x range
 */
export const getXRange = ({
	xField,
	data,
}: {
	xField?: string;
	data: any[];
}) => {
	if (!xField) {
		return d3.extent(data, (d) => d["date"]) as [number, number];
	}
	return d3.extent(data, (d) => d[xField]) as [number, number];
};

/**
 * Get the greatest extend of y range of all data points
 */
export const getYRange = ({
	yField,
	data,
}: {
	yField?: string;
	data: any[];
}): [number, number] => {
	if (yField) {
		return [0, d3.max(data, (d) => d[yField])];
	}
	// Get greatest extent of all the Y Fields
	let min = 0;
	let max = 0;
	Object.keys(data[0]).forEach((key) => {
		if (key === "date") {
			return;
		}

		const cMax = d3.max(data, (d) => d[key]);

		if (cMax > max) {
			max = cMax;
		}
		const cMin = d3.min(data, (d) => d[key]);

		if (cMin < min) {
			min = cMin;
		}
	});
	return [min, max] as [number, number];
};
