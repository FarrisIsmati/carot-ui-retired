import { Lock } from "@material-ui/icons";
import { default as Badge, BadgeType } from "./index";
export default {
	component: Badge,
	title: "Badge",
	tags: ["autodocs"],
};

// Large
export const Default = () => <Badge badgeType={BadgeType.LABEL}>LABEL</Badge>;

export const LabelBadgeWithIconTrailing = () => (
	<Badge iconTrailing={Lock} badgeType={BadgeType.LABEL}>
		LABEL
	</Badge>
);

export const LabelBadgeWithIconLeading = () => (
	<Badge iconLeading={Lock} badgeType={BadgeType.LABEL}>
		LABEL
	</Badge>
);

export const LabelBadgeWithIconOnly = () => (
	<Badge iconOnly={Lock} badgeType={BadgeType.LABEL} />
);

export const CountBadge = () => <Badge badgeType={BadgeType.COUNT}>3</Badge>;

export const CountHundredsBadge = () => (
	<Badge badgeType={BadgeType.COUNT}>300</Badge>
);

export const DotBadge = () => <Badge badgeType={BadgeType.DOT} />;
