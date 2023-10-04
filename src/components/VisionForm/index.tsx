import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { Form } from "react-final-form";

export type DraftVisionFormValues = VisionFormValues;

export default () => {
	return (
		<>
			<Form<DraftVisionFormValues> />
		</>
	);
};
