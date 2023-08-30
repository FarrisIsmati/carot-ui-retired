// Creates a worst, average, and best-case scenario for all fields that require it
// This allows estimates to be made of different cases and values inbetween
export interface CV<T extends number | Date> {
	// Case Value
	worst: T; // worst doesn't mean lowest it means wose number, could be high costs
	average: T;
	best: T; // best doesn't mean highest it means best number you want
	current: T; // Current case where we go from worst to best 50 is default 0 is worst and 100 is best
}
