import { Close, PersonOutlineOutlined } from "@material-ui/icons";
import Chip from ".";
export default {
	component: Chip,
	title: "Chip",
	tags: ["autodocs"],
};

// Large
export const Default = () => <Chip>Label</Chip>;

export const LargeChipIconLeft = () => (
	<Chip iconTrailing={PersonOutlineOutlined}>Label</Chip>
);

export const LargeChipIconRight = () => <Chip iconLeading={Close}>Label</Chip>;

export const LargeChipIconRightClickable = () => (
	<Chip iconLeading={Close} onClickIconRight={() => {}}>
		Label
	</Chip>
);
