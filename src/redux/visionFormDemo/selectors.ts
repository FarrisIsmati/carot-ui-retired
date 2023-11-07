import { ReduxStore } from "../reducer";

export const getVisionFormDemoSelector = (state: ReduxStore) => {
	return state.visionFormDemo;
};
