import CapitalSection from "./CapitalSection";
import LocationSection from "./LocationSection";
import BusinessTypeSection from "./OverviewSection";
import RevenueSection from "./RevenueSection";
import Staff from "./Staff";
import Taxes from "./Taxes";

interface MainSectionProps {
	onSubmit: () => void;
}

const Sections = ({ onSubmit }: MainSectionProps) => {
	return (
		<div>
			<BusinessTypeSection />
			<CapitalSection />
			<LocationSection />
			<RevenueSection />
			<Staff />
			<Taxes />
		</div>
	);
};

export default Sections;
