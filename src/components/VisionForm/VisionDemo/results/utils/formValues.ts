import { getKeyInputMode } from "@/components/VisionForm/utils/form";
import {
	PhysicalLeaseLocationSection,
	PhysicalLeaseLocationSectionInputModeLess,
} from "@/types/VisionForm/LocationSection";
import {
	RevenueSection,
	RevenueSectionInputModeLess,
} from "@/types/VisionForm/RevenueSection";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import { LocationLeaseValues } from "@/types/VisionForm/results/location";
import { ProductValues } from "@/types/VisionForm/results/product";

//
// Get Values for calendar update functions
//

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
export const getLeaseValues = (
	lease: PhysicalLeaseLocationSection
): LocationLeaseValues => {
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
		trafficCurve: lease.trafficCurve,
		maxOccupancy: lease[maxOccupancyKey] as number,
		trafficTurnoverTime: lease[trafficTurnoverTimeKey] as number,
		daysOpenPerWeekGeneric: lease[daysOpenPerWeekGenericKey] as number,
		hoursOpenPerDayGeneric: lease[hoursOpenPerDayGenericKey] as number,
	};
};
