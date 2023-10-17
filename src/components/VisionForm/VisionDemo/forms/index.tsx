import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import VisionFormValidator from "@/validators/VisionFormValidator";
import { Form } from "react-final-form";
import { styled } from "styled-components";
import VisionFormDemo from "../sections/MainSection";
import { visionFormDemoInitialValues } from "../values/VisonFormDemoInitialValues";

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
				<form onSubmit={handleSubmit}>
					<VisionFormDemo onSubmit={handleSubmit} />
					<StyledAddButton onClick={handleSubmit}>Submit</StyledAddButton>
				</form>
			)}
		/>
	);
};
