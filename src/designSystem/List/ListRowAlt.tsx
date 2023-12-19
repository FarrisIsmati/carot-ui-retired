import { SemanticSetCores, getColorSet } from "@/styles/colors";
import React from "react";
import { styled } from "styled-components";
import ListRow, { ListProps } from "./ListRow";

const StyledListRow = styled(ListRow)`
	background-color: transparent;
`;

const ListRowAlt = React.forwardRef<HTMLElement, ListProps>(function List(
	{
		children,
		colorSet = getColorSet(SemanticSetCores.SECONDARY),
		supportingText,
		...props
	},
	ref
) {
	return (
		<StyledListRow
			ref={ref}
			{...props}
			colorSet={colorSet}
			supportingText={supportingText}
		>
			{children}
		</StyledListRow>
	);
});

export default ListRowAlt;
