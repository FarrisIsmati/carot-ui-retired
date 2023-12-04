import { getKeyInputMode } from "@/components/VisionForm/utils/form";
import { VisionFormValues } from "@/types/VisionForm";
import {
	CompanyCalendarValues,
	CompanyCalendarValuesCore,
} from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { ProductValues } from "@/types/VisionForm/calendar/company/productCalendarValues";
import { CurveDataPointMap } from "@/types/VisionForm/calendar/curve";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import {
	InvestorSection,
	InvestorsInputModeLess,
} from "@/types/VisionForm/capitalSection/InvestorSection";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import {
	PhysicalLeaseLocationSection,
	PhysicalLeaseLocationSectionInputModeLess,
} from "@/types/VisionForm/locationSection";
import {
	RevenueSection,
	RevenueSectionInputModeLess,
} from "@/types/VisionForm/revenueSection";
import {
	TaxesInputModeLess,
	TaxesSection,
} from "@/types/VisionForm/taxesSection";

//
// Get Values for calendar update functions
//

// Returns all fixed company values given the input mode
export const getCompanyCalendarValuesFixed = (
	visionFormDemoState: VisionFormValues
): CompanyCalendarValuesCore => {
	const getTaxesSectionKey = getKeyInputMode<TaxesInputModeLess, TaxesSection>;

	// Tax rate generic
	const taxRateKey = getTaxesSectionKey(
		"taxRateGeneric",
		InputModeEnum.Average
	);

	return {
		startDate: visionFormDemoState.overviewStartDate,
		endDate: visionFormDemoState.overviewEndDate,
		taxRate: visionFormDemoState[taxRateKey],
	};
};

// Returns all necessary investor values given the input mode
export const getInvestorCalendarValues = (
	investor: InvestorSection
): InvestorCalendarValues => {
	const getRevenueSectionKey = getKeyInputMode<
		InvestorsInputModeLess,
		InvestorSection
	>;

	// Id
	const id: keyof InvestorSection = "id";

	// Name
	const name: keyof InvestorSection = "investorName";

	// Equity
	const equity: keyof InvestorSection = "investorEquityPercentage";

	// Initial investment
	const initialInvestment = getRevenueSectionKey(
		"investorStartingCash",
		InputModeEnum.Average
	);

	return {
		name: investor[name],
		id: investor[id],
		equity: investor[equity],
		initialInvestment: investor[initialInvestment] as number,
	};
};

export const getCompanyValues = ({
	companyValuesCore,
	product,
	lease,
	leasesFootTrafficCurveIdDataPointsMap,
}: {
	companyValuesCore: CompanyCalendarValuesCore;
	product: RevenueSection;
	lease: PhysicalLeaseLocationSection;
	leasesFootTrafficCurveIdDataPointsMap: CurveDataPointMap;
}): CompanyCalendarValues => {
	/**
	 * Get values for current product and lease association
	 * Update calendar for that specific product
	 */
	return {
		coreValues: companyValuesCore,
		...getProductValues(product),
		...getLeaseValues({
			lease,
			leasesFootTrafficCurveIdDataPointsMap,
		}),
	};
};

// Returns all necessary product values given the input mode
export const getProductValues = (product: RevenueSection): ProductValues => {
	const getRevenueSectionKey = getKeyInputMode<
		RevenueSectionInputModeLess,
		RevenueSection
	>;

	// Id
	const productId: keyof RevenueSection = "id";

	// Name
	const productName: keyof RevenueSection = "productName";

	// Location ID
	const locationIds: keyof RevenueSection = "locationIds";

	// Customer conversion rate
	const customerConversionRateKey = getRevenueSectionKey(
		"customerConversionRate",
		InputModeEnum.Average
	);

	// Cost to produce
	const revenueCostToProduceKey = getRevenueSectionKey(
		"revenueCostToProduce",
		InputModeEnum.Average
	);

	// Retail price
	const revenueRetailPriceKey = getRevenueSectionKey(
		"revenueRetailPrice",
		InputModeEnum.Average
	);

	return {
		productName: product[productName],
		productId: product[productId],
		locationId: product[locationIds],
		customerConversionRate: product[customerConversionRateKey] as number,
		costToProduce: product[revenueCostToProduceKey] as number,
		retailPrice: product[revenueRetailPriceKey] as number,
	};
};

// Returns all necessary lease values given the input mode
export const getLeaseValues = ({
	lease,
	leasesFootTrafficCurveIdDataPointsMap,
}: {
	lease: PhysicalLeaseLocationSection;
	leasesFootTrafficCurveIdDataPointsMap: CurveDataPointMap;
}): LocationLeaseCalendarValues => {
	const getPhysicalLeaseLocationKey = getKeyInputMode<
		PhysicalLeaseLocationSectionInputModeLess,
		PhysicalLeaseLocationSection
	>;

	// Max occupancy
	const maxOccupancyKey = getPhysicalLeaseLocationKey(
		"maxOccupancy",
		InputModeEnum.Average
	);

	// Traffic turnover time
	const trafficTurnoverTimeKey = getPhysicalLeaseLocationKey(
		"trafficTurnoverTime",
		InputModeEnum.Average
	);

	// Days open per week
	const daysOpenPerWeekGenericKey = getPhysicalLeaseLocationKey(
		"daysOpenPerWeekGeneric",
		InputModeEnum.Average
	);

	// Hours open per day
	const hoursOpenPerDayGenericKey = getPhysicalLeaseLocationKey(
		"hoursOpenPerDayGeneric",
		InputModeEnum.Average
	);

	//
	// Calculate cost per period
	//

	// Period per unit of measurement
	const periodCostKey = getPhysicalLeaseLocationKey(
		"leaseCost",
		InputModeEnum.Average
	);

	// Lease size
	const sizeKey = getPhysicalLeaseLocationKey(
		"leaseSize",
		InputModeEnum.Average
	);

	// Cost per period
	const leaseCostPerPeriod =
		(lease[periodCostKey] as number) * (lease[sizeKey] as number);

	return {
		periodCost: leaseCostPerPeriod,
		maxOccupancy: lease[maxOccupancyKey] as number,
		trafficTurnoverTime: lease[trafficTurnoverTimeKey] as number,
		daysOpenPerWeekGeneric: lease[daysOpenPerWeekGenericKey] as number,
		hoursOpenPerDayGeneric: lease[hoursOpenPerDayGenericKey] as number,
		leaseFootTrafficCurveDataPoints:
			leasesFootTrafficCurveIdDataPointsMap[lease.id],
	};
};
