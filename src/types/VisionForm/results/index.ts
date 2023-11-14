// Two separate arrays (one for company, one for investors)

import { ResultsCompanyLifetime, ResultsCompanyTotal } from "./company";

export interface ResultsDay
	extends ResultsCompanyLifetime,
		ResultsCompanyTotal {
	date: string;
	isOpen: boolean;
}

export interface ResultsMonth
	extends ResultsCompanyLifetime,
		ResultsCompanyTotal {
	days: ResultsDay[];
	month: string;
}

export interface ResultsYear
	extends ResultsCompanyLifetime,
		ResultsCompanyTotal {
	months: ResultsMonth[];
	year: number;
}

export interface ResultsCalendar extends ResultsCompanyLifetime {
	years: ResultsYear[];
}
