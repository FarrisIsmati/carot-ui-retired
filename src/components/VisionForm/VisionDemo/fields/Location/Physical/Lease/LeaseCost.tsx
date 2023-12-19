import LocationFormContext from "@/components/VisionForm/VisionDemo/forms/LocationForm/LocationFormContext";
import {
	MeasurementSystemType,
	getMeasurementSystem,
} from "@/components/VisionForm/utils/measurement";
import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";

const LeaseCost = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Prefix
	const formContext = useContext(LocationFormContext);

	// Measurement System
	const measurementSystem = getMeasurementSystem(formContext?.countryOrigin);

	const measurementLabel =
		measurementSystem === MeasurementSystemType.IMPERIAL ? "ft²" : "m²";

	return (
		<FormTextFieldNumericInputMode
			label={`Cost per ${measurementLabel}`}
			fieldNameBase={"leaseCost"}
			inputMode={inputMode}
			placeholder={"Cost"}
			prefix={formContext?.currencySymbol}
			allowNegativeValue={false}
		/>
	);
};

export default LeaseCost;
