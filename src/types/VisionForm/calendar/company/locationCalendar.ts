//
// Formatted calendar interface for all location values
//

//
// Lease
//
export interface LocationLeaseCalendar
	extends LocationCalendar,
		LocationPhysicalCalendar,
		LocationLeaseCalendarLifetime,
		LocationLeaseCalendarTotal {
	// Total cost of lease when fully paid out
	leaseCost: number;
	// Lease cost per payment of period (week, month, annual)
	periodCost: number;
}

// Location values for calendar
interface LocationCalendar {
	name: string;
}

interface LocationPhysicalCalendar {
	// Initial Construction cost (one time expense)
	initialConstructionCost: number;
}

interface LocationLeaseCalendarTotal {
	// Lease paid
	totalLeasePaid: number;
}

interface LocationLeaseCalendarLifetime {
	// Lease paid
	lifetimeLeasePaid: number;
}
