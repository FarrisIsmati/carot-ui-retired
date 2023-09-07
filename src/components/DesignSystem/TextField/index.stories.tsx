import { Search } from "@material-ui/icons";
import TextField from ".";
export default {
	component: TextField,
	title: "Textfield",
	tags: ["autodocs"],
};

export const Default = () => (
	<TextField label="Label" placeholder="Placeholder" />
);

export const Disabled = () => (
	<TextField label="Label" placeholder="Placeholder" disabled />
);

export const Icon = () => (
	<TextField label="Label" placeholder="Placeholder" icon={Search} />
);

export const ErrorState = () => (
	<TextField label="Label" placeholder="Placeholder" icon={Search} error />
);

export const ClearButton = () => (
	<TextField label="Label" placeholder="Placeholder" showClear />
);

export const IconAndClearButton = () => (
	<TextField label="Label" placeholder="Placeholder" icon={Search} showClear />
);

export const IconAndClearButtonAndErrorState = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		showClear
		error
	/>
);

export const IconAndClearButtonAndErrorStateDisabled = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		showClear
		error
		disabled
	/>
);

export const IconAndClearButtonAndErrorStateWithText = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		showClear
		error
		errorText="This is an error state"
	/>
);
