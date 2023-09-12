import { styled } from "styled-components";
import Dropdown from "./";
export default {
	component: Dropdown,
	title: "Dropdown",
	tags: ["autodocs"],
};

const DropdownContainer = styled.div`
	height: 600px;
`;

const Dataset1 = [
	{ value: "Option 1", id: "option1" },
	{ value: "Option 2", id: "option2" },
	{ value: "Option 3", id: "option3" },
	{ value: "Option 4", id: "option4" },
	{ value: "Option 5", id: "option5" },
	{ value: "Option 6", id: "option6" },
	{ value: "Option 7", id: "option7" },
	{ value: "Option 8", id: "option8" },
];

export const Default = () => (
	<DropdownContainer>
		<Dropdown label="Label" placeholder="Placeholder" dataset={Dataset1} />
	</DropdownContainer>
);

export const Disabled = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={Dataset1}
			disabled
		/>
	</DropdownContainer>
);

export const Error = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={Dataset1}
			error
		/>
	</DropdownContainer>
);

export const ErrorWithText = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={Dataset1}
			errorText="There is an error!"
		/>
	</DropdownContainer>
);
