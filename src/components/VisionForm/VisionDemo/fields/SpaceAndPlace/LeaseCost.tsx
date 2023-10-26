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

	return (
		<FormTextFieldNumeric
			label={"Cost"}
			fieldNameBase={"leaseCost"}
			inputMode={inputMode}
			placeholder={"Cost per X"}
			prefix={prefix}
			allowNegativeValue={false}
		/>
	);
};
