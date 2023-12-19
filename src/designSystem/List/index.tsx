import { spacer16 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { css, styled } from "styled-components";

export type ListProps = StyledWrapperProps & {
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'ul'
	 **/
	component?: AsProp;
	/**
	 * @default '16px'
	 */
	gap?: string;
};

export const StyledList = styled(
	React.forwardRef<HTMLElement, ListProps>(function Button(
		{ component: Component = "ul", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => css`
		/* Remove default styles */
		list-style-type: none; /* Remove bullets */
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: ${props.gap};
	`}
`;

const List = React.forwardRef<HTMLElement, ListProps>(function List(
	{ gap = spacer16, children, ...props },
	ref
) {
	return (
		<StyledList gap={gap} ref={ref}>
			{children}
		</StyledList>
	);
});

export default List;
