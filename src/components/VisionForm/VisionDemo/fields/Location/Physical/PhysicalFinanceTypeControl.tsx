import FormSegmentedControl from "@/components/form/FormSegmentedControl";
import { spacer320 } from "@/styles/sizes";
import { PhysicalFinanceType } from "@/types/VisionForm/locationSection";
import { Dispatch, SetStateAction } from "react";
import { physicalFinanceTypeValues } from "../../../values/fields/segmentedControlValues";

const PhysicalFinanceTypeControl = ({
	setFinanceType,
}: {
	setFinanceType: Dispatch<SetStateAction<PhysicalFinanceType>>;
}) => {
	return (
		<FormSegmentedControl
			width={spacer320}
			data={physicalFinanceTypeValues}
			onChange={(opt) => {
				setFinanceType(opt.value as PhysicalFinanceType);
			}}
		/>
	);
};

export default PhysicalFinanceTypeControl;
