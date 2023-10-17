import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { currencyDropdownValues } from "../../VisionDemo/values/VisionFormDemoDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="CURRENCY"
			placeholder="Select"
			fieldName="businessCurrency"
			dataset={currencyDropdownValues}
			defaultValue={useGetDropdownDefaultValue(
				currencyDropdownValues,
				"businessCurrency"
			)}
			dropdownSize={Sizes.SMALL}
		/>
	);
};
