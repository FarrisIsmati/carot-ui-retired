// Two separate arrays (one for company, one for investors)

import { ResultsCompany } from "./company";

export interface ResultsDay extends ResultsCompany {
	date: string;
	isOpen: boolean;
}

export interface ResultsMonth extends ResultsCompany {
	days: ResultsDay[];
	month: string;
}

export interface ResultsYear extends ResultsCompany {
	months: ResultsMonth[];
	year: number;
}

export interface ResultsCalendar extends ResultsCompany {
	years: ResultsYear[];
}
