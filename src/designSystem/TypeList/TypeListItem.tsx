import { ColorSet } from "@/styles/colors";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { styled } from "styled-components";
import { TypeProps } from "../Type";

export type TypeListItemProps = StyledWrapperProps &
	TypeProps & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'ul'
		 **/
		component?: AsProp;
		/**
		 * Set the semantic color used by the button
		 * @default 'brightAccent
		 **/
		colorSet?: ColorSet;
		/*
		 * If true removes padding beneath the typelist
		 */
		condensed?: boolean;
	};

const TypeListItemElement = styled(
	React.forwardRef<HTMLElement, TypeListItemProps>(function TypeList(
		{ component: Component = "li", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)<TypeListItemProps>`
	list-style-type: none;
	display: list-item;
	padding-block-end: ${(props) => !props.condensed && `1em`};
`;

const TypeListItem = React.forwardRef<HTMLElement, TypeListItemProps>(
	({ ...props }, ref) => {
		return <TypeListItemElement {...props} ref={ref} />;
	}
);
export default TypeListItem;
