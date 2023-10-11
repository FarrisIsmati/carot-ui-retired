import {
	ScheduleTypeCompound,
	ScheduleTypeFull,
	ScheduleTypeMinimal,
} from "../schedule";
import { CV, CustomFee } from "./common";

export enum BusinessType {
	ONLINE = "ONLINE",
	RETAIL = "RETAIL",
}

// Retail
export enum LoanType {
	GENERIC = "GENERIC",
	SMALL_BUSINESS = "SMALL_BUSINESS",
	MORTGAGE = "MORTGAGE",
	VEHICLE = "VEHICLE",
}

export interface LoanFormFull {
	loanName: string;
	loanType: LoanType;
	loanIssueDate: Date;
	loanAmount: number;
	loanTermLngthYears: number;
	loanTermLngthMonths: number;
	loanCompoundRate: ScheduleTypeCompound;
	loanClosingCostPcnt: number;
}

export enum CommercialLeaseType {
	CUSTOM = "CUSTOM",
	REGULAR = "REGULAR",
	GROSS = "GROSS",
	PERCENTAGE = "PERCENTAGE",
	TO_OWN = "TO_OWN", // Property you will eventually own
}

export enum OwnedPropertyAcquisitionType {
	OWNED = "OWNED",
	CASH_PURCHASE = "CASH_PURCHASE",
	MORTGAGE = "MORTGAGE",
}

export enum OwnedPropertyType {
	LAND = "LAND",
	VEHICLE = "VEHICLE",
}

export interface PhysicalSpaceFull<TAX> {
	commercialLeaseType: CommercialLeaseType;
	commercialLeaseStartDate: Date;
	commercialLeasePaymentStartDate: Date;
	commercialLeasePayPeriod: ScheduleTypeMinimal; // How often a lease requires payment
	commercialLeaseAnnualRentRaiseRate: CV<number>; // Within lease contract
	commercialLeaseLengthMonths: number; // Period before starting a new contract
	commercialLeaseRenegotiationRentRaiseRate: CV<number>; // When starting a new contract
	commercialLeaseSize: CV<number>; // Sqft or sqm
	commercialLeaseCost: CV<number>; // cost per sqft or sqm
	commercialLeasePropertyCost: CV<number>; // Only for to-own lease
	commercialLeaseOptionFee: CV<number>; // Only for to-own lease, credits a cost of a space if choosing to buy
	commercialLeaseProfitPercentage: CV<number>; // Only for percentage/custom leases, the percentage a lease will get of your profits
	commercialLeaseProfitAmount: CV<number>; // Only for percentage/custom leases, the amount of profit you need to turn before a lease will get your profits
	ownedPropertyAcquisitionType: OwnedPropertyAcquisitionType;
	ownedPropertyLoan: string; // If the acquisition type is a mortgage, choose loan from the loan section
	ownedPropertyType: OwnedPropertyType;
	ownedPropertyCost: CV<number>;
	ownedPropertyClosingCostPercentage: CV<number>; // If cash purchase only this will show up (mortgage dealt with in loans section)
	// ownedPropertyTaxes: TaxRate;
	buildStartDate: CV<Date>;
	buildEndDate: CV<Date>;
	buildCost: CV<number>; // Total cost of the build out of the space
	maintenanceFrequency: ScheduleTypeFull; // Frequency at which maintenance will need to be done
	maintenanceCost: CV<number>; // Expected cost for maintenance
	electricCost: CV<number>; // Cost of utility bill (default to monthly bill)
	electricFrequency: ScheduleTypeFull; // Frequency at which you pay your utility bill costs
	waterCost: CV<number>; // Cost of utility bill (default to monthly bill)
	waterFrequency: ScheduleTypeFull; // Frequency at which you pay your utility bill costs
	gasCost: CV<number>; // Cost of utility bill (default to monthly bill)
	gasFrequency: ScheduleTypeFull; // Frequency at which you pay your utility bill costs
	garbageCost: CV<number>; // Cost of utility bill (default to monthly bill)
	garbageFrequency: ScheduleTypeFull; // Frequency at which you pay your utility bill costs
	fees: CustomFee[]; //Customizable additional fees that can be added
}

// Online
export interface DomainNameFull {
	name: string;
	isOwned: boolean;
	cost: CV<number>;
	annualFee: CV<number>;
}

export interface DigitalBusinessFull {
	isBuilt: boolean;
	developmentStartTime: CV<Date>;
	developmentEndTime: CV<Date>;
	startingMonthlyServerCosts: CV<number>;
	scalingMonthlyServerCostsRate: CV<number>;
	domainNames: DomainNameFull[];
	fees: CustomFee[]; //Customizable additional fees that can be added
}
