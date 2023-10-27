import { InputModeEnum } from "@/types/VisionForm/common/values";
import React, { Dispatch, SetStateAction } from "react";
import { FieldRenderProps } from "react-final-form";

export interface RevenueSectionContextProps {
	revenueCostToProduceInputMode: InputModeEnum;
	setRevenueCostToProduceInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueProfitMarginInputMode: InputModeEnum;
	setRevenueProfitMarginInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueRetailPriceInputMode: InputModeEnum;
	setRevenuePhysicalPriceInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueProfitAmountInputMode: InputModeEnum;
	setRevenueProfitAmountInputMode: Dispatch<SetStateAction<InputModeEnum>>;
	revenueCostToProduceField: FieldRenderProps<any, HTMLElement, any>;
	revenueProfitMarginField: FieldRenderProps<any, HTMLElement, any>;
	revenueRetailPriceField: FieldRenderProps<any, HTMLElement, any>;
	revenueProfitAmountField: FieldRenderProps<any, HTMLElement, any>;
}

const RevenueSectionContext =
	React.createContext<RevenueSectionContextProps | null>(null);
export const RevenueSectionContextProvider = RevenueSectionContext.Provider;
export const RevenueSectionContextConsumer = RevenueSectionContext.Consumer;
export default RevenueSectionContext;
