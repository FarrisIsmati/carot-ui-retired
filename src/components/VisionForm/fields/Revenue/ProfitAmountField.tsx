import FormTextFieldNumeric from "@/components/form/FormTextFieldNumeric";
import { Sizes } from "@/styles/sizes";
import { useContext } from "react";
import GoodsAndServicesSectionContext from "../../VisionDemo/sections/GoodsAndServicesSectionContext";
import { useCurrencySymbol } from "../../utils/currency";

export default () => {
	const prefix = useCurrencySymbol();

	const formContext = useContext(GoodsAndServicesSectionContext);
	const inputMode = formContext?.revenueRetailPriceInputMode;
	return (
		<FormTextFieldNumeric
			label={"Profit"}
			fieldName={"revenueProfitAmount"}
			defaultValue={0}
			placeholder={"Profit amount"}
			inputMode={inputMode}
			prefix={prefix}
			size={Sizes.SMALL}
		/>
	);
};
