import { SUBMIT_VISION_FORM_DEMO } from "./constants";

export default (state: any, action: any) => {
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
