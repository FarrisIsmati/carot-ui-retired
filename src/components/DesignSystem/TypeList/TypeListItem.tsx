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
		/**
		 * If true sets list-style-type none on the list
		 */
		listStyleReset?: boolean;
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
	${(props) => props.listStyleReset && `list-style-type: none`};
`;

export default React.forwardRef<HTMLElement, TypeListItemProps>(
	({ listStyleReset = false, ...props }, ref) => {
		return (
			<TypeListItemElement
				{...props}
				ref={ref}
				listStyleReset={listStyleReset}
			/>
		);
	}
);
