import {
	MeasurementSystemType,
	getMeasurementSystem,
} from "@/components/VisionForm/utils/measurement";
import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import SpaceAndPlaceFormContext from "../../forms/SpaceAndPlaceForm/SpaceAndPlaceFormContext";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Prefix
	const formContext = useContext(SpaceAndPlaceFormContext);

	// Measurement System
	const measurementSystem = getMeasurementSystem(formContext?.countryOrigin);

	const measurementLabel =
		measurementSystem === MeasurementSystemType.IMPERIAL ? "ft²" : "m²";

	return (
		<FormTextFieldNumeric
			label={`Cost per ${measurementLabel}`}
			fieldNameBase={"leaseCost"}
			inputMode={inputMode}
			placeholder={"Cost"}
			prefix={formContext?.currencySymbol}
			allowNegativeValue={false}
		/>
	);
};
