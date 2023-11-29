import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { PhysicalLeaseLocationSection } from "@/types/VisionForm/locationSection";
import React from "react";

export interface RevenueFormContextProps {
	currencySymbol: string;
	countryOrigin: CountriesEnum;
	locations: PhysicalLeaseLocationSection[]; // todo change when adding more location types
}

const RevenueFormContext = React.createContext<RevenueFormContextProps | null>(
	null
);
export const RevenueFormContextProvider = RevenueFormContext.Provider;
export const RevenueFormContextConsumer = RevenueFormContext.Consumer;
export default RevenueFormContext;
