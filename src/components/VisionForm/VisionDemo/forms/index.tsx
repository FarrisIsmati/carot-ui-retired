import Sections from "@/components/VisionForm/VisionDemo/Sections";
import ButtonPrimary from "@/designSystem/Button/ButtonPrimary";
import { submitVisionFormDemo } from "@/redux/visionFormDemo/actions";
import { spacer8 } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm";
import VisionFormValidator from "@/validators/VisionForm/Validator";
import { Form } from "react-final-form";
import { useDispatch } from "react-redux";
import type { Dispatch } from "redux";
import { styled } from "styled-components";
import { visionFormDemoInitialValues } from "../values/forms/VisionFormDemoInitialValues";
import { testData1, testData2, testData3 } from "../values/forms/testData";

// Add Button

const StyledSubmitButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

const handleSubmit = (values: VisionFormValues, dispatch: Dispatch<any>) => {
	dispatch(submitVisionFormDemo(values));
};

const handleSubmitTestData = (
	values: VisionFormValues,
	dispatch: Dispatch<any>
) => {
	dispatch(submitVisionFormDemo(values));
};

export const VisionDemoForm = () => {
	const dispatch: Dispatch = useDispatch();

	return (
		<Form<VisionFormValues>
			initialValues={visionFormDemoInitialValues}
			validate={(values) => VisionFormValidator(values)}
			subscription={{ submitting: true, pristine: true }}
			onSubmit={(values) => handleSubmit(values, dispatch)} //testData1
			render={({ handleSubmit }) => {
				return (
					<div>
						<Sections onSubmit={handleSubmit} />
						<StyledSubmitButton onClick={handleSubmit}>
							Submit
						</StyledSubmitButton>
						<StyledSubmitButton
							onClick={() => handleSubmitTestData(testData1, dispatch)}
						>
							Submit Data 1
						</StyledSubmitButton>
						<StyledSubmitButton
							onClick={() => handleSubmitTestData(testData2, dispatch)}
						>
							Submit Data 2
						</StyledSubmitButton>
						<StyledSubmitButton
							onClick={() => handleSubmitTestData(testData3, dispatch)}
						>
							Submit Data 3
						</StyledSubmitButton>
					</div>
				);
			}}
		/>
	);
};
