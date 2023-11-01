import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import VisionFormValidator from "@/validators/VisionForm/Validator";
import { Form } from "react-final-form";
import { styled } from "styled-components";
import Sections from "../sections";
import { visionFormDemoInitialValues } from "../values/forms/VisionFormDemoInitialValues";

// Add Button

const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

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
				<div>
					<Sections onSubmit={handleSubmit} />
					<StyledAddButton onClick={handleSubmit}>Submit</StyledAddButton>
				</div>
			)}
		/>
	);
};
