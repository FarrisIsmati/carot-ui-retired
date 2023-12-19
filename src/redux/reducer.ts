import { VisionFormValues } from "@/types/VisionForm";
import { combineReducers } from "redux";
import visionFormDemoReducer from "./visionFormDemo/reducer";

export interface ReduxStore {
	visionFormDemo: VisionFormValues;
}

export default combineReducers<ReduxStore>({
	visionFormDemo: visionFormDemoReducer,
});
