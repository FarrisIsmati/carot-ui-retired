import { dateFormatMapper } from "@/designSystem/DatePicker";
import { DateFormatEnum } from "@/designSystem/DatePicker/types";
import { VisionFormValues } from "@/types/VisionForm";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import moment from "moment";
import { LegalStructureDropdownValuesEnum } from "../fields/dropdownValues";

export const visionFormDemoInitialValues: VisionFormValues = {
	//
	// Overview Section
	//
	overviewName: "",
	overviewCurrency: CurrencyTypes.USD, // Need to set based on location
	overviewIndustry: "",
	overviewCountryOrigin: CountriesEnum.USA, // Need to ask for users location/ or default to unknown
	overviewStartDate: moment().format(dateFormatMapper[DateFormatEnum.MMDDYYYY]),
	overviewEndDate: moment()
		.add(2, "years")
		.subtract(1, "days")
		.format(dateFormatMapper[DateFormatEnum.MMDDYYYY]),

	//
	// Loans and Investors
	//

	investors: [],
	loans: [],
	leases: [],
	products: [],

	//
	// Legal Section
	//
	legalStructure: LegalStructureDropdownValuesEnum.SOLE_PROPRIETORSHIP,

	//
	// Taxes section
	//

	// Tax rate generic
	taxRateGenericLow: 0,
	taxRateGenericAverage: 0,
	taxRateGenericHigh: 0,
};
