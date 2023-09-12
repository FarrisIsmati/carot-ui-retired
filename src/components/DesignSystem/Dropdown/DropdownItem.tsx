import { semanticFonts } from "@/styles/fonts";
import { spacer12, spacer16 } from "@/styles/sizes";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React from "react";
import { styled } from "styled-components";

export type DropdownItemProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isFocus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'TypeListItem'
		 **/
		component?: AsProp;
	};

export const TypeList = styled(
	React.forwardRef<HTMLElement, DropdownItemProps>(function TypeList(
		{ component: Component = "TypeListItem", size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${semanticFonts.bodyLarge};
	padding-block-end: 0;
	padding: ${spacer12} ${spacer16};
`;

export default React.forwardRef<HTMLUListElement, DropdownItemProps>(
	function DropdownList({ ...props }, ref) {
		return <TypeList {...props} />;
	}
);
