"use client";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { Form } from "react-final-form";
import VisionFormDemo from "./VisionFormDemo";
import { visionFormDemoInitialValues } from "./values/visionFormDemoInitialValues";

export type DraftVisionFormValues = VisionFormValues;

export default () => {
	return (
		<Form<DraftVisionFormValues>
			initialValues={visionFormDemoInitialValues}
			validate={() => ({})}
			onSubmit={() => {}}
			render={(props) => <VisionFormDemo />}
		/>
	);
};
