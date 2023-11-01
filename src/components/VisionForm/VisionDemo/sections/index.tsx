import { useFormState } from "react-final-form";
import LoansAndInvestorsSection from "./LoansAndInvestorsSection";
import BusinessTypeSection from "./OverviewSection";
import RevenueSection from "./RevenueSection";
import SpaceAndPlaceSection from "./SpaceAndPlaceSection";
import Staff from "./Staff";
import Taxes from "./Taxes";

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
			<Taxes />
		</div>
	);
};
