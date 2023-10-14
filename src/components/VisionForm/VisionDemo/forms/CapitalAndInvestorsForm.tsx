// This section is a subform
// The values do not impact the main form's validations only the sub form
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { spacer8 } from "@/styles/sizes";
import CapitalAndInvestorsFormValidator from "@/validators/CapitalAndInvestorsFormValidator";
import { Form } from "react-final-form";
import { styled } from "styled-components";
import { CapitalAndInvestorsFormInitialValues } from "../values/CapitalAndInvestorsFormInitialValues";

// Add Button

interface AddButtonProps {
	onSubmit: () => void;
}

const StyledAddButton = styled(ButtonPrimary)`
	margin-top: ${spacer8};
`;

const AddButton = ({ onSubmit }: AddButtonProps) => {
	return <StyledAddButton onClick={onSubmit}>Add</StyledAddButton>;
};

// CapitalAndInvestorsForm

interface CapitalAndInvestorsFormProps {
	/**
	 * Children components
	 */
	children?: React.ReactNode;
}

const handleSubmit = () => {
	console.log("SUBMIT");
};

export default ({ children }: CapitalAndInvestorsFormProps) => {
	return (
		<Form<any>
			initialValues={CapitalAndInvestorsFormInitialValues}
			validate={(values) => CapitalAndInvestorsFormValidator(values)}
			onSubmit={handleSubmit}
			render={({ handleSubmit }) => (
				<form onSubmit={handleSubmit}>
					{children}
					<AddButton onSubmit={handleSubmit} />
				</form>
			)}
		/>
	);
};
