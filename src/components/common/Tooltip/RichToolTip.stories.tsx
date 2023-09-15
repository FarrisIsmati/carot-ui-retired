import RichToolTip from "./RichToolTip";
export default {
	component: RichToolTip,
	title: "Rich Tool Tip",
	tags: ["autodocs"],
};

export const Default = () => (
	<RichToolTip title={"Title"}>Main body text</RichToolTip>
);
