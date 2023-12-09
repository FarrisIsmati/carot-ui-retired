import ButtonChip from "./ButtonChip";
export default {
	component: ButtonChip,
	title: "Chip Button",
	tags: ["autodocs"],
};

export const Default = () => <ButtonChip onClick={() => {}}>Label</ButtonChip>;

export const Active = () => (
	<ButtonChip onClick={() => {}} isActive>
		Label
	</ButtonChip>
);
