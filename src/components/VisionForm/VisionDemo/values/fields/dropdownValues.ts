import { CapitalType } from "@/types/VisionForm/CapitalSection";
import { CurveType, LocationType } from "@/types/VisionForm/LocationSection";
import { StaffType } from "@/types/VisionForm/StaffSection";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { capitalize } from "lodash";

// Todo: get values from API call

//
// Overview
//
export const industryDropdownValues = [
	{ value: "Food & Services", id: "Food & Services" },
	{ value: "Retail", id: "Retail" },
	{ value: "Wholesale", id: "Wholesale" },
];

export const currencyDropdownValues = [
	{ value: "USD", id: "USD" },
	{ value: "CND", id: "CND" },
	{ value: "MEX", id: "MEX" },
	{ value: "EUR", id: "EUR" },
	{ value: "YEN", id: "YEN" },
	{ value: "WON", id: "WON" },
];

export const countryOriginDropdownValues = [
	{ value: CountriesEnum.USA, id: CountriesEnum.USA },
	{ value: CountriesEnum.CANADA, id: CountriesEnum.CANADA },
	{ value: CountriesEnum.MEXICO, id: CountriesEnum.MEXICO },
	{ value: CountriesEnum.GERMANY, id: CountriesEnum.GERMANY },
	{ value: CountriesEnum.Japan, id: CountriesEnum.Japan },
	{ value: CountriesEnum.Korea, id: CountriesEnum.Korea },
];

//
// Loans and Investors
//
export const capitalTypeDropdownValues = [
	{ value: capitalize(CapitalType.INVESTOR), id: CapitalType.INVESTOR },
	{ value: capitalize(CapitalType.LOAN), id: CapitalType.LOAN, disabled: true },
];

//
// Location
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

export const trafficCurveDropdownValues = [
	{
		value: capitalize(CurveType.BASIC),
		id: CurveType.BASIC,
	},
	{
		value: capitalize(CurveType.RAPID),
		id: CurveType.RAPID,
		disabled: true,
	},
];

//
// Staff
//

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
		id: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,
	},
	{
		value: LegalStructureDropdownValuesEnum.PARTNERSHIP,
		id: LegalStructureDropdownValuesEnum.PARTNERSHIP,
		disabled: true,
	},
	{ value: LegalStructureDropdownValuesEnum.LLC, id: "llc", disabled: true },
	{
		value: LegalStructureDropdownValuesEnum.C_CORP,
		id: LegalStructureDropdownValuesEnum.C_CORP,
		disabled: true,
	},
	{
		value: LegalStructureDropdownValuesEnum.S_CORP,
		id: LegalStructureDropdownValuesEnum.S_CORP,
		disabled: true,
	},
];
