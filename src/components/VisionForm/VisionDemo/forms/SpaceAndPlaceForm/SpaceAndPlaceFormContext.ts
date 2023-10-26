import React from "react";

export interface SpaceAndPlaceFormContextProps {
	currencySymbol: string;
}

const SpaceAndPlaceFormContext =
	React.createContext<SpaceAndPlaceFormContextProps | null>(null);
export const SpaceAndPlaceFormContextProvider =
	SpaceAndPlaceFormContext.Provider;
export const SpaceAndPlaceFormContextConsumer =
	SpaceAndPlaceFormContext.Consumer;
export default SpaceAndPlaceFormContext;
