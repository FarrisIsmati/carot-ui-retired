import { spacer32 } from "@/styles/sizes";
import List from ".";
import ListRow from "./ListRow";
import ListRowAlt from "./ListRowAlt";
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

export const DefaultAlt = () => (
	<List>
		<ListRowAlt>List Item</ListRowAlt>
	</List>
);

export const SupportingTextAlt = () => (
	<List>
		<ListRowAlt supportingText="Supporting Text">List Item</ListRowAlt>
	</List>
);

export const MultipleListItemsDefaultGapAlt = () => (
	<List>
		<ListRowAlt>List Item 1</ListRowAlt>
		<ListRowAlt supportingText="Supporting Text">List Item 2</ListRowAlt>
		<ListRowAlt>List Item 3</ListRowAlt>
		<ListRowAlt supportingText="Supporting Text">List Item 4</ListRowAlt>
		<ListRowAlt>List Item 5</ListRowAlt>
	</List>
);

export const MultipleListItemsCustomGapAlt = () => (
	<List gap={spacer32}>
		<ListRowAlt>List Item 1</ListRowAlt>
		<ListRowAlt supportingText="Supporting Text">List Item 2</ListRowAlt>
		<ListRowAlt>List Item 3</ListRowAlt>
		<ListRowAlt supportingText="Supporting Text">List Item 4</ListRowAlt>
		<ListRowAlt>List Item 5</ListRowAlt>
	</List>
);
