import { currencyToSymbolMap } from "@/components/VisionForm/utils/currency";
import { ReduxStore } from "../reducer";

export const getVisionFormDemoSelector = (state: ReduxStore) => {
	return state.visionFormDemo;
};

export const getVFDemoCurrencySymbol = (state: ReduxStore) => {
	return currencyToSymbolMap[state.visionFormDemo.overviewCurrency];
};
