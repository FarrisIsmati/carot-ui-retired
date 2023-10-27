import {
	MeasurementSystemType,
	useGetMeasurementSystem,
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
	const prefix = formContext?.currencySymbol;

	// Measurement System
	const measurementSystem = useGetMeasurementSystem();

	const measurementLabel =
		measurementSystem === MeasurementSystemType.IMPERIAL ? "sq/ft" : "sq/m";

	return (
		<FormTextFieldNumeric
			label={`Cost per ${measurementLabel}`}
			fieldNameBase={"leaseCost"}
			inputMode={inputMode}
			placeholder={"Cost"}
			prefix={prefix}
			allowNegativeValue={false}
		/>
	);
};
