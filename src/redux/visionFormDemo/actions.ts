import { SUBMIT_VISION_FORM_DEMO } from "./constants";

export const submitVisionFormDemo = (values: any) => {
	return {
		type: SUBMIT_VISION_FORM_DEMO,
		payload: values,
	};
};
