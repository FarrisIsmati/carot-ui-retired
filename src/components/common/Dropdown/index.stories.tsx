import { styled } from "styled-components";
import Dropdown from ".";
export default {
	component: Dropdown,
	title: "Dropdown",
	tags: ["autodocs"],
};

const DropdownContainer = styled.div`
	height: 600px;
`;

const SampleDropdownDataset1 = [
	{ value: "Option 1", id: "option1" },
	{ value: "Option 2", id: "option2" },
	{ value: "Option 3", id: "option3" },
	{ value: "Option 4", id: "option4" },
	{ value: "Option 5", id: "option5" },
	{ value: "Option 6", id: "option6" },
	{ value: "Option 7", id: "option7" },
	{ value: "Option 8", id: "option8" },
	{ value: "Option 9", id: "option9" },
	{ value: "Option 10", id: "option10" },
	{ value: "Option 11", id: "option11" },
];

export const Default = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={SampleDropdownDataset1}
		/>
	</DropdownContainer>
);

export const Disabled = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={SampleDropdownDataset1}
			disabled
		/>
	</DropdownContainer>
);

export const Error = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={SampleDropdownDataset1}
			error
		/>
	</DropdownContainer>
);

export const ErrorWithText = () => (
	<DropdownContainer>
		<Dropdown
			label="Label"
			placeholder="Placeholder"
			dataset={SampleDropdownDataset1}
			errorText="There is an error!"
		/>
	</DropdownContainer>
);
