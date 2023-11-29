export interface InvestorsCalendar {
	investors: { [id: string]: InvestorCalendar };
}

export interface InvestorCalendar
	extends InvestorCalendarTotal,
		InvestorCalendarLifetime {
	id: string;
	name: string;
	initialInvestment: number;
	equity: number;
}

interface InvestorCalendarTotal {
	// Total earned
	totalEarned: number;

	// Total recouped
	totalPercentageInitialInvestmentRecouped: number;
}

interface InvestorCalendarLifetime {
	// Lifetime earned
	lifetimeEarned: number;

	// Lifetime recouped
	lifetimePercentageInitialInvestmentRecouped: number;
}
