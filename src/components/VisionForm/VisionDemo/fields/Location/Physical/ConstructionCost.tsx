import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { useContext } from "react";
import LocationFormContext from "../../../forms/LocationForm/LocationFormContext";

const ConstructionCost = () => {
	// Input mode
	const inputMode = InputModeEnum.Average;

	// Prefix
	const formContext = useContext(LocationFormContext);

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

export default ConstructionCost;
