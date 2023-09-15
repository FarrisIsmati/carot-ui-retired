import PlainTooltip from "./PlainTooltip";

export default {
	component: PlainTooltip,
	title: "Plain Tooltip",
	tags: ["autodocs"],
};

export const Default = () => <PlainTooltip>Main body text</PlainTooltip>;

export const LargeTextBody = () => (
	<PlainTooltip>
		Supporting text body text string goes here psum dolor sit amet, consectetur
		adipiscing elit, sed do eiusmod tempor incididunt
	</PlainTooltip>
);
