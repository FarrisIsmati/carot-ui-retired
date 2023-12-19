//
// This file generates the starting/blank calendar within the full set date range passed into it (startDate/endDate)
//
import {
	Calendar,
	DayCalendar,
	MonthCalendar,
	YearCalendar,
} from "@/types/VisionForm/calendar";
import { AllCalendarValues } from "@/types/VisionForm/calendar/company/companyCalendarValues";
import { InvestorCalendar } from "@/types/VisionForm/calendar/investor/investorCalendar";
import { InvestorCalendarValues } from "@/types/VisionForm/calendar/investor/investorCalendarValues";
import { LocationLeaseCalendar } from "@/types/VisionForm/calendar/location/leaseCalendar";
import { LocationLeaseCalendarValues } from "@/types/VisionForm/calendar/location/leaseCalendarValues";
import { ProductCalendar } from "@/types/VisionForm/calendar/product/productCalendar";
import moment from "moment";
import {
	calculateDayCalendarsLength,
	calculateMonthCalendarsLength,
	calculateYearCalendarsLength,
	getCurrentYear,
	getMonthFromIndex,
} from "../../../utils/dates";
import {
	initLifetimeValues,
	initTotalValues,
} from "../../values/calendar/initValues";

//
// Generate initial product for calendar
//
export const genInitProductCalendar = (
	values: AllCalendarValues
): ProductCalendar => {
	const product: ProductCalendar = {
		id: values.productId,
		name: values.productName,
		locationIds: values.locationId,
		retailPrice: values.retailPrice,
		customerConversionRate: values.customerConversionRate,
		totalExpenses: 0,
		totalRevenue: 0,
		totalProfit: 0,
		totalTaxes: 0,
		lifetimeExpenses: 0,
		lifetimeRevenue: 0,
		lifetimeProfit: 0,
		lifetimeTaxes: 0,
	};
	return product;
};

//
// Generate initial investor for calendar
//
export const genInitInvestorCalendar = (
	investor: InvestorCalendarValues
): InvestorCalendar => {
	return {
		id: investor.id,
		name: investor.name,
		initialInvestment: investor.initialInvestment,
		equity: investor.equity,
		totalEarned: 0,
		totalPercentageInitialInvestmentRecouped: 0,
		lifetimeEarned: 0,
		lifetimePercentageInitialInvestmentRecouped: 0,
	};
};

//
// Generate initial lease for calendar
//
export const genInitLeaseCalendar = (
	lease: LocationLeaseCalendarValues
): LocationLeaseCalendar => {
	return {
		id: lease.id,
		name: lease.name,
		periodCost: lease.costPerUnit * lease.size,
		initialConstructionCost: lease.initialConstructionCost,
		totalLeasePaid: 0,
		lifetimeLeasePaid: 0,
	};
};

//
// Generate results (years, months, days)
//

// Create init months results
const generateInitDayCalendars = (curDate: string, endDate: string) => {
	const length = calculateDayCalendarsLength(curDate, endDate);
	const days = new Array(length).fill({});
	return days.map((_, i) => {
		const resultsDay: DayCalendar = {
			date: moment(new Date(curDate)).add(i, "days").format("MM/DD/YYYY"),
			isOpen: false, // default to closed
			products: {},
			leases: {},
			investors: {},
			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsDay;
	});
};

// Create init months results
const generateInitMonthCalendars = (curDate: string, endDate: string) => {
	const length = calculateMonthCalendarsLength(curDate, endDate);
	const months = new Array(length).fill({});

	// Incase starting month is not january need to offset month index by starting month index
	const startingMonthIndex = moment(new Date(curDate)).month();

	return months.map((_, i) => {
		// First value needs to be itself, otherwise all other months need to start at first day of month before incrementing month by index
		const startingDate =
			i === 0
				? curDate
				: moment(new Date(curDate))
						.startOf("month")
						.add(i, "month")
						.format("MM/DD/YYYY");
		const resultsMonth: MonthCalendar = {
			days: generateInitDayCalendars(startingDate, endDate),
			month: getMonthFromIndex(i + startingMonthIndex),
			products: {},
			leases: {},
			investors: {},
			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsMonth;
	});
};

// Create inital years results
const generateInitYearCalendars = (startDate: string, endDate: string) => {
	const length = calculateYearCalendarsLength(startDate, endDate);
	const years = new Array(length).fill({});
	return years.map((_, i) => {
		const resultsYear: YearCalendar = {
			months:
				i === 0
					? generateInitMonthCalendars(startDate, endDate)
					: generateInitMonthCalendars(
							moment()
								.year(getCurrentYear(startDate, i))
								.startOf("year")
								.toString(),
							endDate
					  ),
			year: getCurrentYear(startDate, i),
			products: {},
			leases: {},
			investors: {},
			...initLifetimeValues,
			...initTotalValues,
		};

		return resultsYear;
	});
};

// Create inital calendar results
export const generateInitCalendar = (startDate: string, endDate: string) => {
	if (moment(new Date(endDate)).isBefore(new Date(startDate))) {
		throw new Error("Cannot have an end date starting before your start date");
	}
	const resultsCalendar: Calendar = {
		years: generateInitYearCalendars(startDate, endDate),
		products: {},
		leases: {},
		investors: {},
		...initLifetimeValues,
		...initTotalValues,
	};
	return resultsCalendar;
};
