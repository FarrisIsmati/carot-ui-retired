import { getVisionFormDemoSelector } from "@/redux/visionFormDemo/selectors";
import {
	PhysicalLeaseLocationSection,
	PhysicalLeaseLocationSectionInputModeLess,
} from "@/types/VisionForm/LocationSection";
import {
	RevenueSection,
	RevenueSectionInputModeLess,
} from "@/types/VisionForm/RevenueSection";
import { InputModeEnum } from "@/types/VisionForm/common/values";
import {
	ResultsCalendar,
	ResultsDay,
	ResultsMonth,
	ResultsYear,
} from "@/types/VisionForm/results";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { generateInitResultsCalendar } from "./genInitCalendar";

export default () => {
	const visionFormDemoState = useSelector(getVisionFormDemoSelector);
	const startDate = visionFormDemoState.overviewStartDate;
	const endDate = visionFormDemoState.overviewEndDate;

	// Generate init calendar
	const calendar = useMemo(
		() => generateInitResultsCalendar("11/01/2023", "12/02/2023"),
		[startDate, endDate]
	);

	// ~~

	//
	// Calculations
	//

	// First Good
	// First location
	const firstProduct = visionFormDemoState.products[0];
	const firstProductLocation = visionFormDemoState.leases.find((lease) =>
		firstProduct.locationIds.has(lease.id)
	);

	if (firstProduct && !firstProductLocation) {
		throw new Error("No location found for product");
	}

	const inputMode = InputModeEnum.Average;

	//
	// Util func
	//
	// Takes in inputmodeless generic and full section generic
	const getKeyInputMode = <T, P>(key: keyof T): keyof P =>
		`${key.toString()}${inputMode}` as keyof P;

	//
	// Get Values
	//

	// Returns all necessary product values given the input mode
	const getProductValues = (product: RevenueSection) => {
		const retailCostKey = getKeyInputMode<
			RevenueSectionInputModeLess,
			RevenueSection
		>("revenueCostToProduce");
		const retailPriceKey = getKeyInputMode<
			RevenueSectionInputModeLess,
			RevenueSection
		>("revenueRetailPrice");

		return {
			retailCost: product[retailCostKey],
			retailPrice: product[retailPriceKey],
		};
	};

	// Returns all necessary lease values given the input mode
	const getLeaseValues = (lease: PhysicalLeaseLocationSection) => {
		const maxOccupancyKey = getKeyInputMode<
			PhysicalLeaseLocationSectionInputModeLess,
			PhysicalLeaseLocationSection
		>("maxOccupancy");
		const trafficTurnoverTimeKey = getKeyInputMode<
			PhysicalLeaseLocationSectionInputModeLess,
			PhysicalLeaseLocationSection
		>("trafficTurnoverTime");
		const daysOpenPerWeekGenericKey = getKeyInputMode<
			PhysicalLeaseLocationSectionInputModeLess,
			PhysicalLeaseLocationSection
		>("daysOpenPerWeekGeneric");
		const hoursOpenPerDayGenericKey = getKeyInputMode<
			PhysicalLeaseLocationSectionInputModeLess,
			PhysicalLeaseLocationSection
		>("hoursOpenPerDayGeneric");

		return {
			trafficCurve: lease.trafficCurve,
			maxOccupancy: lease[maxOccupancyKey],
			trafficTurnoverTime: lease[trafficTurnoverTimeKey],
			daysOpenPerWeekGeneric: lease[daysOpenPerWeekGenericKey],
			hoursOpenPerDayGeneric: lease[hoursOpenPerDayGenericKey],
		};
	};

	// Function to loop through calendar
	const updateCalendar = (calendar: ResultsCalendar) => {
		calendar.years.forEach((year) => {
			const updatedYearValues = updateCalendarYear(year);
			// Update yearly values from previous to current year
		});
	};

	const updateCalendarYear = (year: ResultsYear) => {
		year.months.forEach((month) => {
			const updatedMonthValues = updateCalendarMonth(month);
			// Update monthly values from previous to current month
		});
	};

	const updateCalendarMonth = (month: ResultsMonth) => {
		month.days.forEach((day) => {
			const updatedDayValues = updateCalendarDay(day);
			// Update daily values from previous to current day
		});
	};

	const updateCalendarDay = (day: ResultsDay) => {
		console.log(day.date);
		// Calculate daily values, return them
	};

	// TESTING UPDATE
	updateCalendar(calendar);
	//

	if (firstProduct && firstProductLocation) {
		const { retailCost, retailPrice } = getProductValues(firstProduct);
		const {
			trafficCurve,
			maxOccupancy,
			trafficTurnoverTime,
			daysOpenPerWeekGeneric,
			hoursOpenPerDayGeneric,
		} = getLeaseValues(firstProductLocation!);
	}

	console.log("-");

	// ~~

	return <p>Le results</p>;
};
