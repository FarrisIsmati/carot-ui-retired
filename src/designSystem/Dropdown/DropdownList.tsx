import { ColorBaseCore, colorBaseMap } from "@/styles/colors";
import { spacer12, spacer16, spacer4, spacer8 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import { styled } from "styled-components";

export const StyledDropdownList = styled(
	React.forwardRef<HTMLElement, DropdownListProps>(function TypeList(
		{ component: Component = "TypeList", size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	background-color: ${colorBaseMap[ColorBaseCore.WHITE]};
	width: 100%;
	max-block-size: 273px;
	display: flex;
	flex-direction: column;
	pointer-events: all;
	inline-size: 100%;
	overflow: auto;
	padding: ${spacer12} ${spacer12};
	border-radius: ${spacer8};
	gap: ${spacer4};
	box-shadow: 0 ${spacer8} ${spacer16} rgba(0, 0, 0, 0.08);
`;

export type DropdownListProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isFocus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'TypeList'
		 **/
		component?: AsProp;
	};

export const DropdownList = React.forwardRef<HTMLElement, DropdownListProps>(
	function DropdownList({ ...props }, ref) {
		return <StyledDropdownList {...props} ref={ref} />;
	}
);
