import { LocationType } from "@/types/VisionForm/BusinessLocationSection";
import { CapitalType } from "@/types/VisionForm/CapitalAndInvestorsForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
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
	{ value: "EUR", id: "eur" },
];

export const locationDropdownValues = [
	{ value: CountriesEnum.USA, id: "USA" },
	{ value: CountriesEnum.CANADA, id: "CND" },
	{ value: CountriesEnum.MEXICO, id: "MEX" },
	{ value: CountriesEnum.GERMANY, id: "GER" },
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

export const locationTypeDropdownValues = [
	{
		value: capitalize(LocationType.RETAIL),
		id: LocationType.RETAIL,
	},
	{
		value: capitalize(LocationType.ONLINE),
		id: LocationType.ONLINE,
	},
	{
		value: capitalize(LocationType.MOBILE),
		id: LocationType.MOBILE,
		disabled: true,
	},
];
