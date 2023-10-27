import { CountriesEnum } from "@/types/VisionForm/common/countries";
import React from "react";

export interface SpaceAndPlaceFormContextProps {
	currencySymbol: string;
	countryOrigin: CountriesEnum;
}

const SpaceAndPlaceFormContext =
	React.createContext<SpaceAndPlaceFormContextProps | null>(null);
export const SpaceAndPlaceFormContextProvider =
	SpaceAndPlaceFormContext.Provider;
export const SpaceAndPlaceFormContextConsumer =
	SpaceAndPlaceFormContext.Consumer;
export default SpaceAndPlaceFormContext;
