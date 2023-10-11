import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { currencyDropdownValues } from "../values/visionFormDropdownValues";

export default () => {
	return (
		<FormDropdown
			label="CURRENCY"
			placeholder="Select"
			fieldName="businessCurrency"
			dataset={currencyDropdownValues}
			defaultValue={currencyDropdownValues[0]}
			dropdownSize={Sizes.SMALL}
		/>
	);
};
