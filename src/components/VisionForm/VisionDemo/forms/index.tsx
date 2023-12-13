import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import { submitVisionFormDemo } from "@/redux/visionFormDemo/actions";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import VisionFormValidator from "@/validators/VisionForm/Validator";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import type { Dispatch } from "redux";
import { styled } from "styled-components";
import Sections from "../sections";
import { visionFormDemoInitialValues } from "../values/forms/VisionFormDemoInitialValues";
import { testData1 } from "../values/forms/testData";

// Add Button

const StyledSubmitButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

const handleSubmit = (values: VisionFormValues, dispatch: Dispatch<any>) => {
	// console.log(values);
	dispatch(submitVisionFormDemo(values));
};

export const VisionDemoForm = () => {
	const dispatch: Dispatch = useDispatch();

	return (
		<Form<VisionFormValues>
			initialValues={visionFormDemoInitialValues}
			validate={(values) => VisionFormValidator(testData1)} //testData1
			subscription={{ submitting: true, pristine: true }}
			onSubmit={(values) => handleSubmit(testData1, dispatch)} //testData1
			render={({ handleSubmit }) => (
				<div>
					<Sections onSubmit={handleSubmit} />
					<StyledSubmitButton onClick={handleSubmit}>Submit</StyledSubmitButton>
				</div>
			)}
		/>
	);
};
