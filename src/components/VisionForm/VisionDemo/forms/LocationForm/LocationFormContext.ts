import { CountriesEnum } from "@/types/VisionForm/common/countries";
import React from "react";

export interface LocationFormContextProps {
	currencySymbol: string;
	countryOrigin: CountriesEnum;
	startDate: string;
	endDate: string;
}

const LocationFormContext =
	React.createContext<LocationFormContextProps | null>(null);
export const LocationFormContextProvider = LocationFormContext.Provider;
export const LocationFormContextConsumer = LocationFormContext.Consumer;
export default LocationFormContext;
