import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { PhysicalUseType } from "@/types/VisionForm/locationSection";
import { Dispatch, SetStateAction } from "react";
import { physicalUseTypeValues } from "../../../values/fields/segmentedControlValues";

const PhysicalUseTypeControl = ({
	setUseType,
}: {
	setUseType: Dispatch<SetStateAction<PhysicalUseType>>;
}) => {
	return (
		<FormSegmentedControl
			width={spacer320}
			data={physicalUseTypeValues}
			onChange={(opt) => {
				setUseType(opt.value as PhysicalUseType);
			}}
		/>
	);
};

export default PhysicalUseTypeControl;
