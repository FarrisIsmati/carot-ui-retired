import { KeyboardDetectionContext } from "@/utils/context";
import {
	AsProp,
	PseudoClassProps,
	StyledWrapperProps,
} from "@/utils/typeHelpers";
import React, { useContext } from "react";
import { styled } from "styled-components";

export type DropdownListProps = StyledWrapperProps &
	Pick<PseudoClassProps, "isFocus"> & {
		/**
		 * Render the component with a custom component or HTML element
		 * @default 'TypeList'
		 **/
		component?: AsProp;
	};

export const List = styled(
	React.forwardRef<
		HTMLElement,
		DropdownListProps & { isUsingKeyboard: boolean }
	>(function TypeList(
		{ component: Component = "TypeList", size, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	display: block;
	pointer-events: all;
	inline-size: 100%;
	overflow: auto;
	max-block-size: 273px;
	width: 320px;
`;

export const DropdownList = React.forwardRef<
	HTMLUListElement,
	DropdownListProps
>(function DropdownList({ ...props }, ref) {
	const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
	return <List isUsingKeyboard={isUsingKeyboard} {...props} />;
});
