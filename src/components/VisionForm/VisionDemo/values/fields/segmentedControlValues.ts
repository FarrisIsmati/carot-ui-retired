import { SegmentedControlOption } from "@/components/common/SegmentedControl";
import { PhysicalType } from "@/types/VisionForm/SpaceAndPlaceSection";

//
// Space and place values
//
export const physicalTypeValues: SegmentedControlOption[] = [
	{ id: PhysicalType.LEASE, value: "Lease", isActive: true, disabled: false },
	{ id: PhysicalType.OWN, value: "Own", isActive: false, disabled: true },
];
