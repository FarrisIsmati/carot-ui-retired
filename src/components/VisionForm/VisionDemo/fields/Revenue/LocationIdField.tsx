import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormDropdownSelect from "@/components/form/FormDropdownSelect";
import _ from "lodash";
import { useContext } from "react";
import RevenueFormContext from "../../forms/RevenueForm/RevenueFormContext";
import { getLocationIdsDropdownValues } from "../../values/fields/dropdownValues";

const LocationIdField = () => {
	// locationIds field
	const locationIdsField = useVisionFormField("locationIds");

	// Context
	const formContext = useContext(RevenueFormContext);

	return (
		<FormDropdownSelect
			id={"locationIds"}
			fieldName={"locationIds"}
			placeholder={"Link to location"}
			dataset={getLocationIdsDropdownValues(
				formContext?.locations,
				locationIdsField.input.value
			)}
			onselect={(value) => {
				const locationIdsArr = _.cloneDeep(locationIdsField.input.value);
				locationIdsArr.add(value.id);
				locationIdsField.input.onChange(locationIdsArr);
			}}
		/>
	);
};

export default LocationIdField;
