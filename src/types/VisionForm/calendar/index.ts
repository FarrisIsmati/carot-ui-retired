// Two separate arrays (one for company, one for investors)

import { CompanyCalendar } from "./company/companyCalendar";
import { InvestorsCalendar } from "./investor/investorCalendar";

export interface DayCalendar extends CompanyCalendar, InvestorsCalendar {
	date: string;
	isOpen: boolean;
}

export interface MonthCalendar extends CompanyCalendar, InvestorsCalendar {
	days: DayCalendar[];
	month: string;
}

export interface YearCalendar extends CompanyCalendar, InvestorsCalendar {
	months: MonthCalendar[];
	year: number;
}

export interface Calendar extends CompanyCalendar, InvestorsCalendar {
	years: YearCalendar[];
}

export type CalendarType = DayCalendar | MonthCalendar | YearCalendar;
