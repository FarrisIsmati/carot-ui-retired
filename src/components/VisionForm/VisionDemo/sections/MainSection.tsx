import BusinessLocationSection from "./BusinessLocationSection";
import BusinessTypeSection from "./BusinessTypeSection";
import CapitalAndInvestorsSection from "./CapitalAndInvestorsSection";
import GoodsAndServicesSection from "./GoodsAndServicesSection";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	return (
		<div>
			<BusinessTypeSection />
			<CapitalAndInvestorsSection />
			<GoodsAndServicesSection />
			<BusinessLocationSection />
		</div>
	);
};
