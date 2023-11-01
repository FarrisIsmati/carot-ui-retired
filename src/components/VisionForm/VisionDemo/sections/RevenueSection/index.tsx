import Type from "@/components/common/Type";
import { semanticFonts } from "@/styles/fonts";
import CostToProduceField from "../../fields/Revenue/CostToProduceField";
import ProfitAmountField from "../../fields/Revenue/ProfitAmountField";
import ProfitMarginField from "../../fields/Revenue/ProfitMarginField";
import RetailPriceField from "../../fields/Revenue/RetailPriceField";
import RevenueForm from "../../forms/RevenueForm";
import { FieldsContainer, StyledDoubleDropdownContainer } from "../styles";

export default () => {
	return (
		<FieldsContainer>
			<Type semanticfont={semanticFonts.headlineSmall}>Goods & Services</Type>
			<RevenueForm>
				<StyledDoubleDropdownContainer>
					<CostToProduceField />
					<ProfitMarginField />
				</StyledDoubleDropdownContainer>
				<StyledDoubleDropdownContainer>
					<RetailPriceField />
					<ProfitAmountField />
				</StyledDoubleDropdownContainer>
			</RevenueForm>
		</FieldsContainer>
	);
};
