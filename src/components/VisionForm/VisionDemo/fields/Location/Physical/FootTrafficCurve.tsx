import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { trafficCurveDropdownValues } from "../../../values/fields/dropdownValues";

export default () => {
	return (
		<FormDropdown
			label="FOOT TRAFFIC CURVE"
			placeholder="Select"
			fieldName="trafficCurve"
			dataset={trafficCurveDropdownValues}
			defaultValue={useGetDropdownDefaultValue(
				trafficCurveDropdownValues,
				"trafficCurve"
			)}
		/>
	);
};
