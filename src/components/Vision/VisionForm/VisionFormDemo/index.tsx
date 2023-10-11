// import { useFormState } from "react-final-form";
import BusinessTypeSection from "./sections/BusinessTypeSection";
import InvestmentSection from "./sections/InvestmentSection";

export default () => {
	// const formState = useFormState();
	// console.log(formState.errors);

	return (
		<div>
			<BusinessTypeSection />
			<InvestmentSection />
		</div>
	);
};
