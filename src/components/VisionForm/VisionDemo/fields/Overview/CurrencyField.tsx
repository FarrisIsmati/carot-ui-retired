import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { currencyDropdownValues } from "../../values/dropdownValues";

export default () => {
	return (
		<FormDropdown
			label="CURRENCY"
			placeholder="Select"
			fieldName="overviewCurrency"
			dataset={currencyDropdownValues}
			defaultValue={useGetDropdownDefaultValue(
				currencyDropdownValues,
				"overviewCurrency"
			)}
			dropdownSize={Sizes.SMALL}
		/>
	);
};
