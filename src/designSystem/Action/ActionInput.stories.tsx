import ActionInput from "./ActionInput";

export default {
	component: ActionInput,
	title: "Action Input",
	tags: ["autodocs"],
};

export const Default = () => (
	<ActionInput placeholder="Placeholder" onAdd={() => {}} />
);

export const Disabled = () => (
	<ActionInput placeholder="Placeholder" onAdd={() => {}} disabled />
);

export const Error = () => (
	<ActionInput placeholder="Placeholder" onAdd={() => {}} error />
);

export const ErrorText = () => (
	<ActionInput
		placeholder="Placeholder"
		onAdd={() => {}}
		errorText="There is an error!"
	/>
);
