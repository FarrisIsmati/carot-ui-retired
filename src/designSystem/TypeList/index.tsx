import { rootStyle } from "@/styles/mixins";
import { spacer32 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { styled } from "styled-components";

export type TypeListProps = StyledWrapperProps & {
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'ul'
	 **/
	component?: AsProp;
	/*
	 * If true removes padding beneath the typelist
	 */
	condensed?: boolean;
	/**
	 * If true removes padding on all sides of the type list
	 */
	condensedAll?: boolean;
};

const TypeListStyled = styled(
	React.forwardRef<HTMLElement, TypeListProps>(function TypeList(
		{ component: Component = "ul", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${rootStyle()};
	padding-inline-start: ${(props) => (props.condensedAll ? "0" : spacer32)};
	padding-block-end: ${(props) => props.condensed && "0"};
	padding-inline-end: 0;
	margin-block-start: 0;
	margin-block-end: 0;
	overflow-wrap: break-word;
`;

const TypeList = React.forwardRef<HTMLElement, TypeListProps>(
	({ ...props }, ref) => {
		return <TypeListStyled {...props} ref={ref} />;
	}
);

export default TypeList;
