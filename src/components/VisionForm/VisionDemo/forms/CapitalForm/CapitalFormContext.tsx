import React from "react";

export interface CapitalFormContextProps {
	currencySymbol: string;
}

const CapitalFormContext = React.createContext<CapitalFormContextProps | null>(
	null
);
export const CapitalFormContextProvider = CapitalFormContext.Provider;
export const CapitalFormContextConsumer = CapitalFormContext.Consumer;
export default CapitalFormContext;
