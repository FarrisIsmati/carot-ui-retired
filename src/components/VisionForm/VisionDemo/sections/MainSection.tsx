import BusinessTypeSection from "./BusinessTypeSection";
import CapitalAndInvestorsSection from "./CapitalAndInvestorsSection";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	return (
		<div>
			<BusinessTypeSection />
			<CapitalAndInvestorsSection />
		</div>
	);
};
