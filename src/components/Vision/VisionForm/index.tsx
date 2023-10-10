"use client";
import { SampleDropdownDataset1 } from "@/components/common/Dropdown/index.stories";
import Type from "@/components/common/Type";
import FormDropdown from "@/components/form/FormDropdown";
import { semanticFonts } from "@/styles/fonts";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { Form, useFormState } from "react-final-form";
import { visionFormDemoInitialValues } from "./values/visionFormDemoInitialValues";

export type DraftVisionFormValues = VisionFormValues;

const VisionFormDemo = () => {
	const formState = useFormState();
	console.log(formState.values);
	return (
		<div>
			<Type semanticfont={semanticFonts.headlineSmall}>Business Type</Type>
			<FormDropdown
				label="Industry"
				placeholder="Select"
				fieldName="businessIndustry"
				dataset={SampleDropdownDataset1}
			/>
		</div>
	);
};

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
