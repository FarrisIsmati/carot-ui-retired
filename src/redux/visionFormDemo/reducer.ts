import { visionFormDemoInitialValues } from "@/components/VisionForm/VisionDemo/values/forms/VisionFormDemoInitialValues";
import { VisionFormValues } from "@/types/VisionForm";
import { SUBMIT_VISION_FORM_DEMO } from "./constants";

const visionFormDemoReducer = (
	state: VisionFormValues = visionFormDemoInitialValues,
	action: any
) => {
	switch (action.type) {
		case SUBMIT_VISION_FORM_DEMO: {
			return {
				...state,
				...action.payload,
			};
		}
		default:
			return state;
	}
};

export default visionFormDemoReducer;
