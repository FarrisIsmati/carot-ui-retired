import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { Form } from "react-final-form";

export type DraftVisionFormValues = VisionFormValues;

export default () => {
	return (
		<>
			<Form<DraftVisionFormValues>
				initialValues={{}}
				validate={() => ({})}
				subscription={{
					touched: true,
					errors: true,
					pristine: true,
					submitting: true,
				}}
				onSubmit={() => {}}
			/>
		</>
	);
};
