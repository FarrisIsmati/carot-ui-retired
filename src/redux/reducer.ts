import { VisionFormValues } from "@/types/VisionForm";
import { combineReducers } from "redux";
import visionFormDemo from "./visionFormDemo/reducer";

export interface ReduxStore {
	visionFormDemo: VisionFormValues;
}

export default combineReducers<ReduxStore>({ visionFormDemo });
