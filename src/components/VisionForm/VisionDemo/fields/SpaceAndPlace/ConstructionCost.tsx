import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import SpaceAndPlaceFormContext from "../../forms/SpaceAndPlaceForm/SpaceAndPlaceFormContext";

export default () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Prefix
	const formContext = useContext(SpaceAndPlaceFormContext);

	return (
		<FormTextFieldNumeric
			label={`Initial construction cost`}
			fieldNameBase={"constructionCost"}
			inputMode={inputMode}
			placeholder={"Cost"}
			prefix={formContext?.currencySymbol}
			allowNegativeValue={false}
		/>
	);
};
