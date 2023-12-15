import { VisionFormValues } from "@/types/VisionForm";
import { InvestorType } from "@/types/VisionForm/capitalSection/InvestorSection";
import { CountriesEnum } from "@/types/VisionForm/common/countries";
import { CurrencyTypes } from "@/types/VisionForm/common/currency";
import { ScheduleType } from "@/types/VisionForm/common/schedule";
import { CurveType } from "@/types/VisionForm/locationSection";

export const testData1: VisionFormValues = {
	overviewCurrency: CurrencyTypes.USD,
	overviewIndustry: "Food & Services",
	overviewCountryOrigin: CountriesEnum.USA,
	overviewStartDate: "11/29/2023",
	overviewEndDate: "11/28/2024",
	investors: [
		{
			investorName: "Toni",
			investorType: InvestorType.ACTIVE,
			investorJoinDate: "",
			investorEquityPercentage: 100,
			investorStartingCashLow: 50000,
			investorStartingCashAverage: 50000,
			investorStartingCashHigh: 50000,
			investorDrawProfitPercentageLow: 0,
			investorDrawProfitPercentageAverage: 0,
			investorDrawProfitPercentageHigh: 0,
			investorDrawTargetLow: 0,
			investorDrawTargetAverage: 0,
			investorDrawTargetHigh: 0,
			investorDrawSchedule: ScheduleType.MONTHLY,
			investorTaxBracket: "",
			id: "6f2d1233-634c-47f1-9026-faaa951c4096",
		},
	],
	loans: [],
	leases: [
		{
			hoursOpenPerDayGenericLow: 8,
			hoursOpenPerDayGenericAverage: 8,
			hoursOpenPerDayGenericHigh: 8,
			daysOpenPerWeekGenericLow: 5,
			daysOpenPerWeekGenericAverage: 5,
			daysOpenPerWeekGenericHigh: 5,
			constructionCostLow: 900,
			constructionCostAverage: 900,
			constructionCostHigh: 900,
			trafficCurve: CurveType.BASIC,
			trafficTurnoverTimeLow: 0,
			trafficTurnoverTimeAverage: 30,
			trafficTurnoverTimeHigh: 0,
			maxOccupancyLow: 0,
			maxOccupancyAverage: 10,
			maxOccupancyHigh: 0,
			leaseLengthMonthsLow: 0,
			leaseLengthMonthsAverage: 0,
			leaseLengthMonthsHigh: 0,
			leaseLengthYearsLow: 2,
			leaseLengthYearsAverage: 2,
			leaseLengthYearsHigh: 2,
			leaseSizeLow: 10,
			leaseSizeAverage: 10,
			leaseSizeHigh: 10,
			leaseCostLow: 1,
			leaseCostAverage: 1,
			leaseCostHigh: 1,
			locationName: "Arlington",
			id: "72c3f1c6-a82b-4fda-b051-b822f51a3100",
		},
	],
	products: [
		{
			locationIds: new Set(["72c3f1c6-a82b-4fda-b051-b822f51a3100"]),
			revenueRetailPriceLow: 10,
			revenueRetailPriceAverage: 10,
			revenueRetailPriceHigh: 10,
			revenueCostToProduceLow: 5,
			revenueCostToProduceAverage: 5,
			revenueCostToProduceHigh: 5,
			revenueProfitAmountLow: 5,
			revenueProfitAmountAverage: 5,
			revenueProfitAmountHigh: 5,
			revenueProfitMarginLow: 100,
			revenueProfitMarginAverage: 100,
			revenueProfitMarginHigh: 100,
			customerConversionRateLow: 100,
			customerConversionRateAverage: 100,
			customerConversionRateHigh: 100,
			productName: "Za'atar croissant",
			id: "5f5510c4-4bf3-478f-b392-ddde8bf39ab1",
		},
	],
	legalStructure: "Sole proprietorship",
	taxRateGenericLow: 10,
	taxRateGenericAverage: 10,
	taxRateGenericHigh: 10,
	overviewName: "Eclairon",
};

export const testData2: VisionFormValues = {
	overviewCurrency: CurrencyTypes.USD,
	overviewIndustry: "Food & Services",
	overviewCountryOrigin: CountriesEnum.USA,
	overviewStartDate: "12/29/2025",
	overviewEndDate: "12/28/2026",
	investors: [
		{
			investorName: "Toni",
			investorType: InvestorType.ACTIVE,
			investorJoinDate: "",
			investorEquityPercentage: 100,
			investorStartingCashLow: 25000,
			investorStartingCashAverage: 25000,
			investorStartingCashHigh: 25000,
			investorDrawProfitPercentageLow: 0,
			investorDrawProfitPercentageAverage: 0,
			investorDrawProfitPercentageHigh: 0,
			investorDrawTargetLow: 0,
			investorDrawTargetAverage: 0,
			investorDrawTargetHigh: 0,
			investorDrawSchedule: ScheduleType.MONTHLY,
			investorTaxBracket: "",
			id: "6f2d1233-634c-47f1-9026-faaa951c4096",
		},
	],
	loans: [],
	leases: [
		{
			hoursOpenPerDayGenericLow: 8,
			hoursOpenPerDayGenericAverage: 8,
			hoursOpenPerDayGenericHigh: 8,
			daysOpenPerWeekGenericLow: 5,
			daysOpenPerWeekGenericAverage: 5,
			daysOpenPerWeekGenericHigh: 5,
			constructionCostLow: 10000,
			constructionCostAverage: 10000,
			constructionCostHigh: 10000,
			trafficCurve: CurveType.LINEAR,
			trafficTurnoverTimeLow: 0,
			trafficTurnoverTimeAverage: 60,
			trafficTurnoverTimeHigh: 0,
			maxOccupancyLow: 0,
			maxOccupancyAverage: 8,
			maxOccupancyHigh: 0,
			leaseLengthMonthsLow: 0,
			leaseLengthMonthsAverage: 0,
			leaseLengthMonthsHigh: 0,
			leaseLengthYearsLow: 2,
			leaseLengthYearsAverage: 2,
			leaseLengthYearsHigh: 2,
			leaseSizeLow: 10,
			leaseSizeAverage: 10,
			leaseSizeHigh: 10,
			leaseCostLow: 1,
			leaseCostAverage: 1,
			leaseCostHigh: 1,
			locationName: "Arlington",
			id: "72c3f1c6-a82b-4fda-b051-b822f51a3100",
		},
		{
			hoursOpenPerDayGenericLow: 8,
			hoursOpenPerDayGenericAverage: 8,
			hoursOpenPerDayGenericHigh: 8,
			daysOpenPerWeekGenericLow: 5,
			daysOpenPerWeekGenericAverage: 5,
			daysOpenPerWeekGenericHigh: 5,
			constructionCostLow: 30000,
			constructionCostAverage: 30000,
			constructionCostHigh: 30000,
			trafficCurve: CurveType.BASIC,
			trafficTurnoverTimeLow: 0,
			trafficTurnoverTimeAverage: 60,
			trafficTurnoverTimeHigh: 0,
			maxOccupancyLow: 0,
			maxOccupancyAverage: 8,
			maxOccupancyHigh: 0,
			leaseLengthMonthsLow: 0,
			leaseLengthMonthsAverage: 0,
			leaseLengthMonthsHigh: 0,
			leaseLengthYearsLow: 2,
			leaseLengthYearsAverage: 2,
			leaseLengthYearsHigh: 2,
			leaseSizeLow: 1300,
			leaseSizeAverage: 1300,
			leaseSizeHigh: 1300,
			leaseCostLow: 2,
			leaseCostAverage: 2,
			leaseCostHigh: 2,
			locationName: "Tysons",
			id: "72c3f1c6-a82b-4fda-b051-b822f51a3103",
		},
	],
	products: [
		{
			locationIds: new Set(["72c3f1c6-a82b-4fda-b051-b822f51a3100"]),
			revenueRetailPriceLow: 10,
			revenueRetailPriceAverage: 10,
			revenueRetailPriceHigh: 10,
			revenueCostToProduceLow: 5,
			revenueCostToProduceAverage: 5,
			revenueCostToProduceHigh: 5,
			revenueProfitAmountLow: 5,
			revenueProfitAmountAverage: 5,
			revenueProfitAmountHigh: 5,
			revenueProfitMarginLow: 100,
			revenueProfitMarginAverage: 100,
			revenueProfitMarginHigh: 100,
			customerConversionRateLow: 100,
			customerConversionRateAverage: 100,
			customerConversionRateHigh: 100,
			productName: "Za'atar croissant",
			id: "5f5510c4-4bf3-478f-b392-ddde8bf39ab1",
		},
		{
			locationIds: new Set(["72c3f1c6-a82b-4fda-b051-b822f51a3100"]),
			revenueRetailPriceLow: 2,
			revenueRetailPriceAverage: 2,
			revenueRetailPriceHigh: 2,
			revenueCostToProduceLow: 1,
			revenueCostToProduceAverage: 1,
			revenueCostToProduceHigh: 1,
			revenueProfitAmountLow: 1,
			revenueProfitAmountAverage: 1,
			revenueProfitAmountHigh: 1,
			revenueProfitMarginLow: 100,
			revenueProfitMarginAverage: 100,
			revenueProfitMarginHigh: 100,
			customerConversionRateLow: 100,
			customerConversionRateAverage: 100,
			customerConversionRateHigh: 100,
			productName: "Chocolate croissant",
			id: "5f5510c4-4bf3-478f-b392-ddde8bf39ab2",
		},
	],
	legalStructure: "Sole proprietorship",
	taxRateGenericLow: 10,
	taxRateGenericAverage: 10,
	taxRateGenericHigh: 10,
	overviewName: "Eclairon",
};

export const testData3: VisionFormValues = {
	overviewCurrency: CurrencyTypes.EUR,
	overviewIndustry: "Food & Services",
	overviewCountryOrigin: CountriesEnum.GERMANY,
	overviewStartDate: "01/01/2024",
	overviewEndDate: "01/31/2024",
	investors: [
		{
			investorName: "Toni",
			investorType: InvestorType.ACTIVE,
			investorJoinDate: "",
			investorEquityPercentage: 100,
			investorStartingCashLow: 100,
			investorStartingCashAverage: 100,
			investorStartingCashHigh: 100,
			investorDrawProfitPercentageLow: 0,
			investorDrawProfitPercentageAverage: 0,
			investorDrawProfitPercentageHigh: 0,
			investorDrawTargetLow: 0,
			investorDrawTargetAverage: 0,
			investorDrawTargetHigh: 0,
			investorDrawSchedule: ScheduleType.MONTHLY,
			investorTaxBracket: "",
			id: "6f2d1233-634c-47f1-9026-faaa951c4096",
		},
	],
	loans: [],
	leases: [
		{
			hoursOpenPerDayGenericLow: 1,
			hoursOpenPerDayGenericAverage: 1,
			hoursOpenPerDayGenericHigh: 1,
			daysOpenPerWeekGenericLow: 1,
			daysOpenPerWeekGenericAverage: 1,
			daysOpenPerWeekGenericHigh: 1,
			constructionCostLow: 0,
			constructionCostAverage: 0,
			constructionCostHigh: 0,
			trafficCurve: CurveType.STEADY,
			trafficTurnoverTimeLow: 0,
			trafficTurnoverTimeAverage: 30,
			trafficTurnoverTimeHigh: 0,
			maxOccupancyLow: 10,
			maxOccupancyAverage: 10,
			maxOccupancyHigh: 10,
			leaseLengthMonthsLow: 1,
			leaseLengthMonthsAverage: 1,
			leaseLengthMonthsHigh: 1,
			leaseLengthYearsLow: 0,
			leaseLengthYearsAverage: 0,
			leaseLengthYearsHigh: 0,
			leaseSizeLow: 31,
			leaseSizeAverage: 31,
			leaseSizeHigh: 31,
			leaseCostLow: 1,
			leaseCostAverage: 1,
			leaseCostHigh: 1,
			locationName: "Arlington",
			id: "72c3f1c6-a82b-4fda-b051-b822f51a3100",
		},
		{
			hoursOpenPerDayGenericLow: 1,
			hoursOpenPerDayGenericAverage: 1,
			hoursOpenPerDayGenericHigh: 1,
			daysOpenPerWeekGenericLow: 1,
			daysOpenPerWeekGenericAverage: 1,
			daysOpenPerWeekGenericHigh: 1,
			constructionCostLow: 0,
			constructionCostAverage: 0,
			constructionCostHigh: 0,
			trafficCurve: CurveType.NONE,
			trafficTurnoverTimeLow: 0,
			trafficTurnoverTimeAverage: 60,
			trafficTurnoverTimeHigh: 0,
			maxOccupancyLow: 10,
			maxOccupancyAverage: 10,
			maxOccupancyHigh: 10,
			leaseLengthMonthsLow: 1,
			leaseLengthMonthsAverage: 1,
			leaseLengthMonthsHigh: 1,
			leaseLengthYearsLow: 0,
			leaseLengthYearsAverage: 0,
			leaseLengthYearsHigh: 0,
			leaseSizeLow: 31,
			leaseSizeAverage: 31,
			leaseSizeHigh: 31,
			leaseCostLow: 1,
			leaseCostAverage: 1,
			leaseCostHigh: 1,
			locationName: "Arlington",
			id: "72c3f1c6-a82b-4fda-b051-b822f51a3101",
		},
	],
	products: [
		{
			locationIds: new Set(["72c3f1c6-a82b-4fda-b051-b822f51a3100"]),
			revenueRetailPriceLow: 10,
			revenueRetailPriceAverage: 10,
			revenueRetailPriceHigh: 10,
			revenueCostToProduceLow: 5,
			revenueCostToProduceAverage: 5,
			revenueCostToProduceHigh: 5,
			revenueProfitAmountLow: 0,
			revenueProfitAmountAverage: 0,
			revenueProfitAmountHigh: 0,
			revenueProfitMarginLow: 0,
			revenueProfitMarginAverage: 0,
			revenueProfitMarginHigh: 0,
			customerConversionRateLow: 100,
			customerConversionRateAverage: 100,
			customerConversionRateHigh: 100,
			productName: "Za'atar croissant",
			id: "5f5510c4-4bf3-478f-b392-ddde8bf39ab1",
		},
	],
	legalStructure: "Sole proprietorship",
	taxRateGenericLow: 0,
	taxRateGenericAverage: 0,
	taxRateGenericHigh: 0,
	overviewName: "Eclairon",
};
