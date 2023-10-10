import { useFormState } from "react-final-form";
import BusinessTypeSection from "./sections/BusinessTypeSection";

export default () => {
	const formState = useFormState();
	console.log(formState.values);

	return (
		<div>
			<BusinessTypeSection />
		</div>
	);
};
