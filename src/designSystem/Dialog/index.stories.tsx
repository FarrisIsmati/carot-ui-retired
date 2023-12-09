import Dialog from ".";
export default {
	component: Dialog,
	title: "Dialog",
	tags: ["autodocs"],
};

export const Default = () => (
	<Dialog
		title={"Title"}
		firstActionName="Action 1"
		firstAction={() => {}}
		secondActionName="Action 2"
		secondAction={() => {}}
	>
		Right now this is almost the same as a RichTooltip aside from some font
		changes
	</Dialog>
);
