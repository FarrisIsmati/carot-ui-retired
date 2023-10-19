import GoodsAndServicesSection from "./GoodsAndServicesSection";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	return (
		<div>
			{/* <BusinessTypeSection />
			<CapitalAndInvestorsSection /> */}
			<GoodsAndServicesSection />
		</div>
	);
};
