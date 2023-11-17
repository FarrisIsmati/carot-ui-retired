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
import { getKeyInputMode } from "../../utils/form";

//
// Get Values for calendar update functions
//

// Returns all necessary product values given the input mode
export const getProductValues = (product: RevenueSection): ProductValues => {
	const revenueCostToProduceKey = getKeyInputMode<
		RevenueSectionInputModeLess,
		RevenueSection
	>("revenueCostToProduce", InputModeEnum.Average);
	const revenueRetailPriceKey = getKeyInputMode<
		RevenueSectionInputModeLess,
		RevenueSection
	>("revenueRetailPrice", InputModeEnum.Average);

	return {
		costToProduce: product[revenueCostToProduceKey] as number,
		retailPrice: product[revenueRetailPriceKey] as number,
	};
};

// Returns all necessary lease values given the input mode
export const getLeaseValues = (
	lease: PhysicalLeaseLocationSection
): LocationLeaseValues => {
	const maxOccupancyKey = getKeyInputMode<
		PhysicalLeaseLocationSectionInputModeLess,
		PhysicalLeaseLocationSection
	>("maxOccupancy", InputModeEnum.Average);
	const trafficTurnoverTimeKey = getKeyInputMode<
		PhysicalLeaseLocationSectionInputModeLess,
		PhysicalLeaseLocationSection
	>("trafficTurnoverTime", InputModeEnum.Average);
	const daysOpenPerWeekGenericKey = getKeyInputMode<
		PhysicalLeaseLocationSectionInputModeLess,
		PhysicalLeaseLocationSection
	>("daysOpenPerWeekGeneric", InputModeEnum.Average);
	const hoursOpenPerDayGenericKey = getKeyInputMode<
		PhysicalLeaseLocationSectionInputModeLess,
		PhysicalLeaseLocationSection
	>("hoursOpenPerDayGeneric", InputModeEnum.Average);

	return {
		trafficCurve: lease.trafficCurve,
		maxOccupancy: lease[maxOccupancyKey] as number,
		trafficTurnoverTime: lease[trafficTurnoverTimeKey] as number,
		daysOpenPerWeekGeneric: lease[daysOpenPerWeekGenericKey] as number,
		hoursOpenPerDayGeneric: lease[hoursOpenPerDayGenericKey] as number,
	};
};
