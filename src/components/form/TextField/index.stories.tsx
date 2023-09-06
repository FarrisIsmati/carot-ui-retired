import TextField from ".";
export default {
	component: TextField,
	title: "Textfield",
	tags: ["autodocs"],
};

export const Default = () => <TextField placeholder="Placeholder" />;

export const Disabled = () => <TextField placeholder="Placeholder" disabled />;
