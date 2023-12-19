import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormDatePicker from "@/components/form/FormDatePicker";
import { getCountryDateFormat } from "../util";

const EndDate = () => {
	const countryValue = useVisionFormField("overviewCountryOrigin").input.value;
	const endDateValue = useVisionFormField("overviewEndDate").input.value;
	return (
		<FormDatePicker
			label={"End date"}
			fieldName={"overviewStartDate"}
			placeholder={"Pick a date"}
			defaultValue={new Date(endDateValue)}
			dateFormat={getCountryDateFormat(countryValue)}
			disabled
		/>
	);
};

export default EndDate;
