import { useFormState } from "react-final-form";
import LoansAndInvestorsSection from "./LoansAndInvestorsSection/index.jsx";
import BusinessTypeSection from "./OverviewSection";
import RevenueSection from "./RevenueSection";
import SpaceAndPlaceSection from "./SpaceAndPlaceSection";
import Staff from "./Staff";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	const fs = useFormState();

	console.log("form values", fs.values);
	return (
		<div>
			<BusinessTypeSection />
			<LoansAndInvestorsSection />
			<SpaceAndPlaceSection />
			<RevenueSection />
			<Staff />
		</div>
	);
};
