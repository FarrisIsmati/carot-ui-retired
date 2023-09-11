import { rootStyle } from "@/styles/mixins";
import { spacer32 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import { css, styled } from "styled-components";

export type TypeListProps = StyledWrapperProps & {
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'ul'
	 **/
	component?: AsProp;
	/**
	 * If true sets list-style-type none on the list
	 */
	listStyleReset?: boolean;
	/*
	 * If true removes padding beneath the typelist
	 */
	condensed?: boolean;
	/**
	 * If true removes padding on all sides of the type list
	 */
	condensedAll?: boolean;
};

const TypeListElement = styled(
	React.forwardRef<HTMLElement, TypeListProps>(function TypeList(
		{ component: Component = "ul", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${rootStyle()};
	padding-inline-start: ${(props) => (props.condensedAll ? "0" : spacer32)};
	padding-inline-end: 0;
	padding-block-end: ${(props) => props.condensed && "0"};
	margin-block-start: 0;
	margin-block-end: 0;
	overflow-wrap: break-word;

	${(props) =>
		props.listStyleReset !== false &&
		css`
			list-style-type: none;
		`}
`;

export default React.forwardRef<HTMLElement, TypeListProps>(
	({ listStyleReset = false, ...props }, ref) => {
		return (
			<TypeListElement {...props} ref={ref} listStyleReset={listStyleReset} />
		);
	}
);
