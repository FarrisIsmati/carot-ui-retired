import TypeList from ".";
import TypeListItem from "./TypeListItem";

export default {
	title: "Components/TypeList",
	component: TypeList,
};

export const Default = () => (
	<TypeList>
		<TypeListItem>List item test</TypeListItem>
		<TypeListItem>List item test</TypeListItem>
		<TypeListItem>List item test</TypeListItem>
		<TypeListItem>List item test</TypeListItem>
	</TypeList>
);
