import CapitalAndInvestorsSection from "./CapitalAndInvestorsSection";
import BusinessTypeSection from "./OverviewSection";
import RevenueSection from "./RevenueSection";
import SpaceAndPlaceSection from "./SpaceAndPlaceSection";
import Staff from "./Staff";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	return (
		<div>
			<BusinessTypeSection />
			<CapitalAndInvestorsSection />
			<SpaceAndPlaceSection />
			<RevenueSection />
			<Staff />
		</div>
	);
};
