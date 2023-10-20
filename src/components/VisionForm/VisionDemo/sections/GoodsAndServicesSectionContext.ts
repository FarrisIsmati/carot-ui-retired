import { InputModeEnum } from "@/types/VisionForm/common/values";
import React, { Dispatch, SetStateAction } from "react";
import { FieldRenderProps } from "react-final-form";

export interface GoodsAndServicesSectionContextProps {
	revenueCostToProduceInputMode: InputModeEnum;
	setRevenueCostToProduceInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueProfitMarginInputMode: InputModeEnum;
	setRevenueProfitMarginInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueRetailPriceInputMode: InputModeEnum;
	setRevenueRetailPriceInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueProfitAmountInputMode: InputModeEnum;
	setRevenueProfitAmountInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueCostToProduceField: FieldRenderProps<any, HTMLElement, any>;
	revenueProfitMarginField: FieldRenderProps<any, HTMLElement, any>;
	revenueRetailPriceField: FieldRenderProps<any, HTMLElement, any>;
	revenueProfitAmountField: FieldRenderProps<any, HTMLElement, any>;
}

const GoodsAndServicesSectionContext =
	React.createContext<GoodsAndServicesSectionContextProps | null>(null);
export const CapitalAndInvestorsFormContextProvider =
	GoodsAndServicesSectionContext.Provider;
export const CapitalAndInvestorsFormContextConsumer =
	GoodsAndServicesSectionContext.Consumer;
export default GoodsAndServicesSectionContext;
