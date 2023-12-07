import LoansAndInvestorsSection from "./CapitalSection";
import LocationSection from "./LocationSection";
import BusinessTypeSection from "./OverviewSection";
import RevenueSection from "./RevenueSection";
import Staff from "./Staff";
import Taxes from "./Taxes";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	return (
		<div>
			<BusinessTypeSection />
			<LoansAndInvestorsSection />
			<LocationSection />
			<RevenueSection />
			<Staff />
			<Taxes />
		</div>
	);
};
