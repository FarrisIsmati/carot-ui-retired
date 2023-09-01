import { ArrowBack } from "@material-ui/icons";
import { default as Badge } from "./index";
export default {
	component: Badge,
	title: "Badge",
	tags: ["autodocs"],
};

// Large
export const Default = () => <Badge>Label</Badge>;

export const BadgeWithIconTrailing = () => (
	<Badge iconTrailing={ArrowBack}>Button</Badge>
);
