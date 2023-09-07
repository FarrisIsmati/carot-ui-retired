import { spacer32 } from "@/styles/sizes";
import List from ".";
import ListRow from "./ListRow";
export default {
	component: List,
	title: "List",
	tags: ["autodocs"],
};

export const Default = () => (
	<List>
		<ListRow>List Item</ListRow>
	</List>
);

export const SupportingText = () => (
	<List>
		<ListRow supportingText="Supporting Text">List Item</ListRow>
	</List>
);

export const MultipleListItemsDefaultGap = () => (
	<List>
		<ListRow>List Item 1</ListRow>
		<ListRow supportingText="Supporting Text">List Item 2</ListRow>
		<ListRow>List Item 3</ListRow>
		<ListRow supportingText="Supporting Text">List Item 4</ListRow>
		<ListRow>List Item 5</ListRow>
	</List>
);

export const MultipleListItemsCustomGap = () => (
	<List gap={spacer32}>
		<ListRow>List Item 1</ListRow>
		<ListRow supportingText="Supporting Text">List Item 2</ListRow>
		<ListRow>List Item 3</ListRow>
		<ListRow supportingText="Supporting Text">List Item 4</ListRow>
		<ListRow>List Item 5</ListRow>
	</List>
);
