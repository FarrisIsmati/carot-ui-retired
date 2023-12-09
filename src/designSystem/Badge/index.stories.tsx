import Dot from "./Dot";

import LockSmall from "../Icons/LockSmall";
import Count from "./Count";
import Label, { default as Badge } from "./Label";
export default {
	component: Badge,
	title: "Badge",
	tags: ["autodocs"],
};

// Large
export const Default = () => <Label>LABEL</Label>;

export const LabelBadgeWithIconTrailing = () => (
	<Label iconTrailing={LockSmall}>LABEL</Label>
);

export const LabelBadgeWithIconLeading = () => (
	<Label iconLeading={LockSmall}>LABEL</Label>
);

export const LabelBadgeWithIconOnly = () => <Badge iconOnly={LockSmall} />;

export const CountBadge = () => <Count>3</Count>;

export const CountHundredsBadge = () => <Count>300</Count>;

export const DotBadge = () => <Dot />;
