import { Search } from "@material-ui/icons";
import TextField from ".";
import TextFieldNumeric from "./TextFieldNumeric";
export default {
	component: TextField,
	title: "TextField",
	tags: ["autodocs"],
};

export const Default = () => (
	<TextField label="Label" placeholder="Placeholder" />
);

export const NumbersOnly = () => (
	<TextFieldNumeric label="Label" placeholder="Placeholder" />
);

export const PrefixNumber = () => (
	<TextFieldNumeric label="Label" placeholder="Placeholder" prefix="$" />
);

export const SuffixNumber = () => (
	<TextFieldNumeric label="Label" placeholder="Placeholder" suffix="%" />
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
	<TextField label="Label" placeholder="Placeholder" onClear={() => {}} />
);

export const IconAndClearButton = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		onClear={() => {}}
	/>
);

export const IconAndClearButtonAndErrorState = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		onClear={() => {}}
		error
	/>
);

export const IconAndClearButtonAndErrorStateDisabled = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		onClear={() => {}}
		error
		disabled
	/>
);

export const IconAndClearButtonAndErrorStateWithText = () => (
	<TextField
		label="Label"
		placeholder="Placeholder"
		icon={Search}
		onClear={() => {}}
		error
		errorText="This is an error state"
	/>
);
