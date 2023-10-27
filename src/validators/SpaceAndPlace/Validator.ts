import { SpaceAndPlaceSection } from "@/types/VisionForm/SpaceAndPlaceSection";
import { leaseCostValidator } from "./Validators";

export default (formValues: SpaceAndPlaceSection) => {
	// Lease cost
	const leaseCostLow = leaseCostValidator(formValues.leaseCostLow);
	const leaseCostAverage = leaseCostValidator(formValues.leaseCostAverage);
	const leaseCostHigh = leaseCostValidator(formValues.leaseCostHigh);

	return {
		// Lease cost
		leaseCostLow,
		leaseCostAverage,
		leaseCostHigh,
	};
};
