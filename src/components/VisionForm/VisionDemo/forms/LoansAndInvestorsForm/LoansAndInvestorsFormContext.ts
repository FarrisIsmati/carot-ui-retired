import { VisionFormValues } from "@/types/VisionForm/VisionForm";
import { FormApi } from "final-form";
import React from "react";

export interface LoansAndInvestorsFormContextProps {
	currencySymbol: string;
	visionForm: FormApi<VisionFormValues, Partial<VisionFormValues>>;
}

const LoansAndInvestorsFormContext =
	React.createContext<LoansAndInvestorsFormContextProps | null>(null);
export const LoansAndInvestorsFormContextProvider =
	LoansAndInvestorsFormContext.Provider;
export const LoansAndInvestorsFormContextConsumer =
	LoansAndInvestorsFormContext.Consumer;
export default LoansAndInvestorsFormContext;
