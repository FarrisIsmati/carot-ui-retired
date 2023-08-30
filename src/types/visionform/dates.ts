export enum ScheduleTypeFull {
	DAILY = "DAILY",
	BI_WEEKLY = "BI_WEEKLY",
	WEEKLY = "WEEKLY",
	BI_MONTHLY = "BI_MONTHLY",
	MONTHLY = "MONTHLY",
	QUARTERLY = "QUARTERLY",
	BI_ANNUALLY = "BI_ANNUALLY",
	ANNUALLY = "ANNUALLY",
}

export enum ScheduleTypeMinimal {
	DAILY = ScheduleTypeFull.DAILY,
	WEEKLY = ScheduleTypeFull.WEEKLY,
	MONTHLY = ScheduleTypeFull.MONTHLY,
	ANNUALLY = ScheduleTypeFull.ANNUALLY,
}

export enum ScheduleTypeFixedGrowth {
	QUARTERLY = ScheduleTypeFull.QUARTERLY,
	BI_ANNUALLY = ScheduleTypeFull.BI_ANNUALLY,
	ANNUALLY = ScheduleTypeFull.ANNUALLY,
}

export enum ScheduleTypeCompound {
	WEEKLY = ScheduleTypeFull.WEEKLY,
	MONTHLY = ScheduleTypeFull.MONTHLY,
	QUARTERLY = ScheduleTypeFull.QUARTERLY,
	ANNUALLY = ScheduleTypeFull.ANNUALLY,
}
