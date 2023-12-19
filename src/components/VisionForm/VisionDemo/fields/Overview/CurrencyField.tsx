import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { currencyDropdownValues } from "../../values/fields/dropdownValues";

const CurrencyField = () => {
	return (
		<FormDropdown
			label="Currency"
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

export default CurrencyField;
