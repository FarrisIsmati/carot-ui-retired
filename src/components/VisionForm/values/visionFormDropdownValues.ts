import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsSection";
import { capitalize } from "lodash";

export const industryDropdownValues = [
	{ value: "Food & Services", id: "foodandservices" },
	{ value: "Retail", id: "retail" },
	{ value: "Wholesale", id: "wholesale" },
];

export const currencyDropdownValues = [
	{ value: "USD", id: "usd" },
	{ value: "CND", id: "cnd" },
	{ value: "MEX", id: "mex" },
];

export enum LocationDropdownValuesEnum {
	USA = "USA",
	CANADA = "Canada",
	MEXICO = "Mexico",
	UNKNOWN = "",
}

export const locationDropdownValues = [
	{ value: LocationDropdownValuesEnum.USA, id: "usa" },
	{ value: LocationDropdownValuesEnum.CANADA, id: "cnd" },
	{ value: LocationDropdownValuesEnum.MEXICO, id: "mex" },
];

export const legalStructureDropdownValues = [
	{ value: "Sole proprietorship", id: "soleproprietorship" },
	{ value: "Partnership", id: "partnership" },
	{ value: "Limited Liability Company (LLC)", id: "llc" },
	{ value: "Corporation (C corp)", id: "ccorp" },
	{ value: "Corporation (S corp)", id: "scorp" },
];

export const capitalTypeDropdownValues = [
	{ value: capitalize(CapitalType.INVESTOR), id: CapitalType.INVESTOR },
	{ value: capitalize(CapitalType.LOAN), id: CapitalType.LOAN },
];
