import { SegmentedControlOption } from "@/components/common/SegmentedControl";

//
// Space and place values
//
export const leaseOwnValues: SegmentedControlOption[] = [
	{ id: "lease", value: "Lease", isActive: true, disabled: false },
	{ id: "own", value: "Own", isActive: false, disabled: true },
];
