// import { useFormState } from "react-final-form";
import BusinessTypeSection from "./BusinessTypeSection";
import CapitalAndInvestorsSection from "./CapitalAndInvestorsSection";

interface MainSectionProps {
	onSubmit: () => void;
}

export default ({ onSubmit }: MainSectionProps) => {
	// const formState = useFormState();
	// console.log(formState.errors);

	return (
		<div>
			<BusinessTypeSection />
			<CapitalAndInvestorsSection />
		</div>
	);
};
