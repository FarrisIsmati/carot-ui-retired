import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer16 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";

export const StyledDropdownItem = styled(
	React.forwardRef<HTMLElement, DropdownItemProps>(function TypeList(
		{ component: Component = "TypeListItem", colorSet, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${semanticFonts.bodyLarge};
	padding-block-end: 0;
	padding: ${spacer12} ${spacer16};

	${(props) =>
		props.active &&
		css`
			background-color: ${props.colorSet?.essential.hover};
		`}

	&:disabled {
		background-color: ${(props) => props.colorSet?.essential.disabled};
	}
`;

export type DropdownItemProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isFocus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'TypeListItem'
		 **/
		component?: AsProp;
		/**
		 * Set the semantic color used by the button
		 * @default 'SECONDARY
		 **/
		colorSet?: ColorSet;
		/**
		 * Sets whether or not a list item is active (same as hover state)
		 **/
		active: boolean;
	};

export default React.forwardRef<HTMLUListElement, DropdownItemProps>(
	function DropdownList(
		{ colorSet = getColorSet(SemanticSetCores.SECONDARY), ...props },
		ref
	) {
		return <StyledDropdownItem colorSet={colorSet} {...props} ref={ref} />;
	}
);
