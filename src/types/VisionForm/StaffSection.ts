export enum StaffType {
	EMPLOYEE = "EMPLOYEE",
	CONTRACTOR = "CONTRACTOR",
}

export interface StaffSection {
	staffType: StaffType;
}
