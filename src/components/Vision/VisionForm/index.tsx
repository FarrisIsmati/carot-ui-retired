"use client";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import VisionFormDemoValidator from "@/validators/VisionFormDemoValidator";
import { Form } from "react-final-form";
import VisionFormDemo from "./VisionFormDemo";
import { visionFormDemoInitialValues } from "./values/visionFormDemoInitialValues";

export type DraftVisionFormValues = VisionFormValues;

export default () => {
	return (
		<Form<DraftVisionFormValues>
			initialValues={visionFormDemoInitialValues}
			validate={(values) => VisionFormDemoValidator(values)}
			onSubmit={() => {}}
			render={() => <VisionFormDemo />}
		/>
	);
};
