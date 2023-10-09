"use client";
import Dropdown from "@/components/common/Dropdown";
import { SampleDropdownDataset1 } from "@/components/common/Dropdown/index.stories";
import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { Form } from "react-final-form";

export type DraftVisionFormValues = VisionFormValues;

const VisionFormDemo = () => {
	return (
		<div>
			<Type semanticfont={semanticFonts.headlineSmall}>Business Type</Type>
			<Dropdown
				label="Industry"
				placeholder="Select"
				dataset={SampleDropdownDataset1}
			/>
		</div>
	);
};

export default () => {
	return (
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
			render={(props) => <VisionFormDemo />}
		/>
	);
};
