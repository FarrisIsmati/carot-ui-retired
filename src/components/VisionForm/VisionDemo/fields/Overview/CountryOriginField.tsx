import { useGetDropdownDefaultValue } from "@/components/VisionForm/utils/form";
import { DropdownData } from "@/components/common/Dropdown/types";
import FormDropdown from "@/components/form/FormDropdown";
import { Sizes } from "@/styles/sizes";
import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { useField } from "react-final-form";
import { countryToCurrencyTypeMap } from "../../../utils/currency";
import { countryOriginDropdownValues } from "../../values/dropdownValues";

export default () => {
	const currencyField = useField<VisionFormValues>("businessCurrency");

	const changeCurrency = (selectedItemDataset: DropdownData<any>) => {
		const country = selectedItemDataset.value as CountriesEnum;
		const currency = countryToCurrencyTypeMap[country];
		currencyField.input.onChange(currency);
	};

	return (
		<FormDropdown
			label="LOCATION"
			placeholder="Select"
			fieldName="overviewCountryOrigin"
			dataset={countryOriginDropdownValues}
			dropdownSize={Sizes.SMALL}
			defaultValue={useGetDropdownDefaultValue(
				countryOriginDropdownValues,
				"overviewCountryOrigin"
			)}
			onChange={changeCurrency}
		/>
	);
};
