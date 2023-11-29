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
	overviewEndDate: "11/28/2025",
	investors: [
		{
			investorName: "Toni",
			investorType: InvestorType.ACTIVE,
			investorJoinDate: "",
			investorEquityPercentage: 100,
			investorStartingCashLow: 0,
			investorStartingCashAverage: 50000,
			investorStartingCashHigh: 0,
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
			constructionCostLow: 0,
			constructionCostAverage: 0,
			constructionCostHigh: 0,
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
			leaseSizeLow: 0,
			leaseSizeAverage: 0,
			leaseSizeHigh: 0,
			leaseCostLow: 0,
			leaseCostAverage: 0,
			leaseCostHigh: 0,
			locationName: "Arlington",
			id: "72c3f1c6-a82b-4fda-b051-b822f51a3100",
		},
	],
	products: [
		{
			locationIds: new Set(["72c3f1c6-a82b-4fda-b051-b822f51a3100"]),
			revenueRetailPriceLow: 0,
			revenueRetailPriceAverage: 5,
			revenueRetailPriceHigh: 0,
			revenueCostToProduceLow: 0,
			revenueCostToProduceAverage: 1,
			revenueCostToProduceHigh: 0,
			revenueProfitAmountLow: 0,
			revenueProfitAmountAverage: 4,
			revenueProfitAmountHigh: 0,
			revenueProfitMarginLow: 0,
			revenueProfitMarginAverage: 400,
			revenueProfitMarginHigh: 0,
			customerConversionRateLow: 100,
			customerConversionRateAverage: 100,
			customerConversionRateHigh: 100,
			productName: "Za'atar croissant",
			id: "5f5510c4-4bf3-478f-b392-ddde8bf39ab1",
		},
	],
	legalStructure: "Sole proprietorship",
	taxRateGenericLow: 5,
	taxRateGenericAverage: 5,
	taxRateGenericHigh: 5,
	overviewName: "Eclairon",
};
