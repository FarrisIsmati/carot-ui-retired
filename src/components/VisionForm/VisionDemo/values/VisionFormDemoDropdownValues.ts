import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsForm";
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

export enum LegalStructureDropdownValuesEnum {
	SOLE_PROPRIETORSHIP = "Sole proprietorship",
	PARTNERSHIP = "Partnership",
	LLC = "Limited Liability Company (LLC)",
	C_CORP = "Corporation (C corp)",
	S_CORP = "Corporation (S corp)",
}

export const legalStructureDropdownValues = [
	{
		value: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,
		id: "soleproprietorship",
	},
	{
		value: LegalStructureDropdownValuesEnum.PARTNERSHIP,
		id: "partnership",
		disabled: true,
	},
	{ value: LegalStructureDropdownValuesEnum.LLC, id: "llc", disabled: true },
	{
		value: LegalStructureDropdownValuesEnum.C_CORP,
		id: "ccorp",
		disabled: true,
	},
	{
		value: LegalStructureDropdownValuesEnum.S_CORP,
		id: "scorp",
		disabled: true,
	},
];

export const capitalTypeDropdownValues = [
	{ value: capitalize(CapitalType.INVESTOR), id: CapitalType.INVESTOR },
	{ value: capitalize(CapitalType.LOAN), id: CapitalType.LOAN, disabled: true },
];
