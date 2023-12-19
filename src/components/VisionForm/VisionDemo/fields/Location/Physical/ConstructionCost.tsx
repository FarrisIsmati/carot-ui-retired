import FormTextFieldNumericInputMode from "@/components/form/FormTextFieldNumeric/FormTextFieldInputMode";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import LocationFormContext from "../../../forms/LocationForm/LocationFormContext";

const ConstructionCost = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Prefix
	const formContext = useContext(LocationFormContext);

	return (
		<FormTextFieldNumericInputMode
			label={`Initial construction cost`}
			fieldNameBase={"constructionCost"}
			inputMode={inputMode}
			placeholder={"Cost"}
			prefix={formContext?.currencySymbol}
			allowNegativeValue={false}
		/>
	);
};

export default ConstructionCost;
