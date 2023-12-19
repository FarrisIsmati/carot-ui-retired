import { getKeyInputMode } from "@/components/VisionForm/utils/form";
import { VisionFormValues } from "@/types/VisionForm";
import {
	AllCalendarValues,
	CompanyCalendarValues,
} from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { CurveDataPointMap } from "@/types/VisionForm/calendar/curve";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import { ProductValues } from "@/types/VisionForm/calendar/product/productCalendarValues";
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
// Get all values for calendar update functions
//
export const getAllCalendarValues = ({
	formState,
	productState,
	leaseState,
	leasesFootTrafficCurveIdDataPointsMap,
}: {
	formState: VisionFormValues;
	productState: RevenueSection;
	leaseState: PhysicalLeaseLocationSection;
	leasesFootTrafficCurveIdDataPointsMap: CurveDataPointMap;
}): AllCalendarValues => {
	/**
	 * Get values for current product and lease association
	 * Update calendar for that specific product
	 */
	return {
		...getCompanyCalendarValues(formState), // TODO START HERE (GET COMPANY VALUES BUILD ALL VALUES THIS IS ONLY USED FOR PRODUCT SECTION RN)
		...getProductCalendarValues(productState),
		...getLeaseCalendarValues({
			lease: leaseState,
			leasesFootTrafficCurveIdDataPointsMap,
		}),
	};
};

// Returns all fixed company values given the input mode
export const getCompanyCalendarValues = (
	visionFormDemoState: VisionFormValues
): CompanyCalendarValues => {
	const getTaxesSectionKey = getKeyInputMode<TaxesInputModeLess, TaxesSection>;

	// Tax rate generic
	const taxRateKey = getTaxesSectionKey(
		"taxRateGeneric",
		InputModeEnum.Average
	);

	return {
		startDate: visionFormDemoState.overviewStartDate,
		endDate: visionFormDemoState.overviewEndDate,
		taxRate: parseInt(visionFormDemoState[taxRateKey] as unknown as string),
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
		equity: parseInt(investor[equity] as unknown as string),
		initialInvestment: parseInt(investor[initialInvestment] as string),
	};
};

// Returns all necessary product values given the input mode
export const getProductCalendarValues = (
	product: RevenueSection
): ProductValues => {
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
		customerConversionRate: parseInt(
			product[customerConversionRateKey] as string
		),
		costToProduce: parseInt(product[revenueCostToProduceKey] as string),
		retailPrice: parseInt(product[revenueRetailPriceKey] as string),
	};
};

// Returns all necessary lease values given the input mode
export const getLeaseCalendarValues = ({
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

	// Name
	const name: keyof PhysicalLeaseLocationSection = "locationName";

	// Id
	const id: keyof PhysicalLeaseLocationSection = "id";

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

	// Initial construction cost
	const initialConstructionCostKey = getPhysicalLeaseLocationKey(
		"constructionCost",
		InputModeEnum.Average
	);

	//
	// Calculate cost per period
	//

	// Period per unit of measurement
	const costPerUnitKey = getPhysicalLeaseLocationKey(
		"leaseCost",
		InputModeEnum.Average
	);

	// Lease size
	const sizeKey = getPhysicalLeaseLocationKey(
		"leaseSize",
		InputModeEnum.Average
	);

	return {
		name: lease[name],
		id: lease[id],
		costPerUnit: parseInt(lease[costPerUnitKey] as string),
		initialConstructionCost: parseInt(
			lease[initialConstructionCostKey] as string
		),
		size: parseInt(lease[sizeKey] as string),
		maxOccupancy: parseInt(lease[maxOccupancyKey] as string),
		trafficTurnoverTime: parseInt(lease[trafficTurnoverTimeKey] as string),
		daysOpenPerWeekGeneric: parseInt(
			lease[daysOpenPerWeekGenericKey] as string
		),
		hoursOpenPerDayGeneric: parseInt(
			lease[hoursOpenPerDayGenericKey] as string
		),
		leaseFootTrafficCurveDataPoints:
			leasesFootTrafficCurveIdDataPointsMap[lease.id],
	};
};
