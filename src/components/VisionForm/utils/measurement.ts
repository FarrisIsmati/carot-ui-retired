import { CountriesEnum } from "@/types/VisionForm/common/countries";

export enum MeasurementSystemType {
	IMPERIAL = "IMPERIAL",
	METRIC = "METRIC",
}

// Todo add Liberia & Myanmar if including in countries list
const countriesThatUseImperialSet = new Set([CountriesEnum.USA]);

/**
 * Gets measurement system Imperial or Metric based on country origin
 * Returns metric if no country provided
 * @returns MeasurementSystemType
 */
export const getMeasurementSystem = (country?: CountriesEnum) => {
	if (country && countriesThatUseImperialSet.has(country)) {
		return MeasurementSystemType.IMPERIAL;
	}
	return MeasurementSystemType.METRIC;
};
