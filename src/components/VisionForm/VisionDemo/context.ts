import React from "react";

export interface CapitalAndInvestorsFormContextProps {
	currencySymbol: string;
}

const CapitalAndInvestorsFormContext =
	React.createContext<CapitalAndInvestorsFormContextProps | null>(null);
export const CapitalAndInvestorsFormContextProvider =
	CapitalAndInvestorsFormContext.Provider;
export const CapitalAndInvestorsFormContextConsumer =
	CapitalAndInvestorsFormContext.Consumer;
export default CapitalAndInvestorsFormContext;
