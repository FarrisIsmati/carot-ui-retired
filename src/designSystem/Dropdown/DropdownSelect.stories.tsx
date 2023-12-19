import { styled } from "styled-components";
import DropdownSelect from "./DropdownSelect";
export default {
	component: DropdownSelect,
	title: "Dropdown Select",
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

export const Default = () => {
	return (
		<DropdownContainer>
			<DropdownSelect
				placeholder="Choose one"
				dataset={SampleDropdownDataset1}
			/>
		</DropdownContainer>
	);
};
