import { spacer12, spacer16, spacer4, spacer8 } from "@/styles/sizes";
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

export const DropdownList = React.forwardRef<
	HTMLUListElement,
	DropdownListProps
>(function DropdownList({ ...props }, ref) {
	const { isUsingKeyboard } = useContext(KeyboardDetectionContext);
	return <List isUsingKeyboard={isUsingKeyboard} {...props} ref={ref} />;
});
