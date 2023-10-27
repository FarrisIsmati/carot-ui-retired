import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { useVisionFormField } from "./form";

export enum MeasurementSystemType {
	IMPERIAL = "IMPERIAL",
	METRIC = "METRIC",
}

// Todo add Liberia & Myanmar if including in countries list
const countriesThatUseImperialSet = new Set([CountriesEnum.USA]);

/**
 * Gets measurement system Imperial or Metric based on country origin
 * @returns MeasurementSystemType
 */
export const useGetMeasurementSystem = () => {
	const countryField = useVisionFormField("overviewCountryOrigin");
	if (countriesThatUseImperialSet.has(countryField.input.value)) {
		return MeasurementSystemType.IMPERIAL;
	}
	return MeasurementSystemType.METRIC;
};
