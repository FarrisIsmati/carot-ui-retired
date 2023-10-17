import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import VisionFormValidator from "@/validators/VisionFormValidator";
import { Form } from "react-final-form";
import VisionFormDemo from "../sections/MainSection";
import { visionFormDemoInitialValues } from "../values/VisonFormDemoInitialValues";

const handleSubmit = () => {
	console.log("SUBMIT");
};

export const VisionDemoForm = () => {
	return (
		<Form<VisionFormValues>
			initialValues={visionFormDemoInitialValues}
			validate={(values) => VisionFormValidator(values)}
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					<VisionFormDemo onSubmit={handleSubmit} />
				</form>
			)}
		/>
	);
};
