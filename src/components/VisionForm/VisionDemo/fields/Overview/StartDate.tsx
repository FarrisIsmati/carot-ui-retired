import { useVisionFormField } from "@/components/VisionForm/utils/form";
import FormDatePicker from "@/components/form/FormDatePicker";
import { getCountryDateFormat } from "../util";

const StartDate = () => {
	const countryValue = useVisionFormField("overviewCountryOrigin").input.value;
	const startDateValue = useVisionFormField("overviewStartDate").input.value;
	return (
		<FormDatePicker
			label={"Start date"}
			fieldName={"overviewStartDate"}
			placeholder={"Pick a date"}
			defaultValue={new Date(startDateValue)}
			dateFormat={getCountryDateFormat(countryValue)}
			disabled
		/>
	);
};

export default StartDate;
