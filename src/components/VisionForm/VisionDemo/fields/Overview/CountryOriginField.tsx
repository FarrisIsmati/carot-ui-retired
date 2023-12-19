import {
	useGetDropdownDefaultValue,
	useVisionFormField,
} from "@/components/VisionForm/utils/form";
import FormDropdown from "@/components/form/FormDropdown";
import { DropdownData } from "@/designSystem/Dropdown/types";
import { Sizes } from "@/styles/sizes";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { countryToCurrencyTypeMap } from "../../../utils/currency";
import { countryOriginDropdownValues } from "../../values/fields/dropdownValues";

const CountryOriginField = () => {
	const currencyField = useVisionFormField("overviewCurrency");

	const changeCurrency = (selectedItemDataset: DropdownData<any>) => {
		const country = selectedItemDataset.id as CountriesEnum;
		const currency = countryToCurrencyTypeMap[country];
		currencyField.input.onChange(currency);
	};

	return (
		<FormDropdown
			label="Location"
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

export default CountryOriginField;
