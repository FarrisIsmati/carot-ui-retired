import { SegmentedControlOption } from "@/designSystem/SegmentedControl";
import {
	PhysicalFinanceType,
	PhysicalUseType,
} from "@/types/VisionForm/locationSection";

//
// Space and place values
//
export const physicalFinanceTypeValues: SegmentedControlOption[] = [
	{
		id: PhysicalFinanceType.LEASE,
		value: "Lease",
		isActive: true,
		disabled: false,
	},
	{
		id: PhysicalFinanceType.OWN,
		value: "Own",
		isActive: false,
		disabled: true,
	},
];

export const physicalUseTypeValues: SegmentedControlOption[] = [
	{
		id: PhysicalUseType.RETAIL,
		value: "Retail",
		isActive: true,
		disabled: false,
	},
	{
		id: PhysicalUseType.OFFICE,
		value: "Office",
		isActive: false,
		disabled: true,
	},
];
