import { Lock } from "@material-ui/icons";
import Dot from "./Dot";

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
	<Label iconTrailing={Lock}>LABEL</Label>
);

export const LabelBadgeWithIconLeading = () => (
	<Label iconLeading={Lock}>LABEL</Label>
);

export const LabelBadgeWithIconOnly = () => <Badge iconOnly={Lock} />;

export const CountBadge = () => <Count>3</Count>;

export const CountHundredsBadge = () => <Count>300</Count>;

export const DotBadge = () => <Dot />;
