import RichTooltip from "./RichTooltip";
export default {
	component: RichTooltip,
	title: "Rich Tooltip",
	tags: ["autodocs"],
};

export const Default = () => (
	<RichTooltip title={"Title"}>Main body text</RichTooltip>
);

export const Buttons = () => (
	<RichTooltip
		title={"Title"}
		firstActionName="Action 1"
		firstAction={() => {}}
		secondActionName="Action 2"
		secondAction={() => {}}
	>
		Main body text
	</RichTooltip>
);
