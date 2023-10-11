import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";

export default () => {
	return (
		<FormDropdown
			label="CURRENCY"
			placeholder="Select"
			fieldName="businessCurrency"
			// Create default
			dataset={[{ value: "USD", id: "usd" }]}
			dropdownSize={Sizes.SMALL}
		/>
	);
};
