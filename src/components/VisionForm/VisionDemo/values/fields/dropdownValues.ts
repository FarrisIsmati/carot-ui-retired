import { CapitalType } from "@/types/VisionForm/CapitalSection";
import { LocationType } from "@/types/VisionForm/LocationSection";
import { StaffType } from "@/types/VisionForm/StaffSection";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { capitalize } from "lodash";

// Todo: get values from API call

//
// Overview
//
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
	{ value: "YEN", id: "yen" },
	{ value: "WON", id: "won" },
];

export const countryOriginDropdownValues = [
	{ value: CountriesEnum.USA, id: "USA" },
	{ value: CountriesEnum.CANADA, id: "CND" },
	{ value: CountriesEnum.MEXICO, id: "MEX" },
	{ value: CountriesEnum.GERMANY, id: "GER" },
	{ value: CountriesEnum.Japan, id: "JAP" },
	{ value: CountriesEnum.Korea, id: "KOR" },
];

//
// Loans and Investors
//
export const capitalTypeDropdownValues = [
	{ value: capitalize(CapitalType.INVESTOR), id: CapitalType.INVESTOR },
	{ value: capitalize(CapitalType.LOAN), id: CapitalType.LOAN, disabled: true },
];

//
// Space and place
//
export const locationTypeDropdownValues = [
	{
		value: capitalize(LocationType.PHYSICAL),
		id: LocationType.PHYSICAL,
	},
	{
		value: capitalize(LocationType.ONLINE),
		id: LocationType.ONLINE,
		disabled: true,
	},
];

export const staffTypeDropdownValues = [
	{
		value: capitalize(StaffType.EMPLOYEE),
		id: StaffType.EMPLOYEE,
	},
	{
		value: capitalize(StaffType.CONTRACTOR),
		id: StaffType.CONTRACTOR,
	},
];

//
// Legal and Taxes
//
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
