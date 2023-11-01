import { CountriesEnum } from "@/types/VisionForm/common/countries";
import React from "react";

export interface RevenueFormContextProps {
	currencySymbol: string;
	countryOrigin: CountriesEnum;
}

const RevenueFormContext = React.createContext<RevenueFormContextProps | null>(
	null
);
export const RevenueFormContextProvider = RevenueFormContext.Provider;
export const RevenueFormContextConsumer = RevenueFormContext.Consumer;
export default RevenueFormContext;
