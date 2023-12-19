import { ColorSet, SemanticSetCores, getColorSet } from "@/styles/colors";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import { StyledDropdownItem } from "./styles";

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

const DropdownItem = React.forwardRef<HTMLUListElement, DropdownItemProps>(
	function DropdownList(
		{ colorSet = getColorSet(SemanticSetCores.SECONDARY), ...props },
		ref
	) {
		return (
			<StyledDropdownItem
				colorSet={colorSet}
				disabled={props.disabled}
				{...props}
				ref={ref}
			/>
		);
	}
);

export default DropdownItem;
