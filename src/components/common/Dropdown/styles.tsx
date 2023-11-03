import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { formControlBaseSelect, rootStyle } from "@/styles/mixins";
import {
	Sizes,
	spacer10,
	spacer12,
	spacer156,
	spacer16,
	spacer2,
	spacer320,
	spacer4,
	spacer8,
} from "@/styles/sizes";
import React from "react";
import { css, styled } from "styled-components";
import Type from "../Type";
import { DropdownItemProps } from "./DropdownItem";
import { DropdownTriggerProps } from "./DropdownTrigger";
import { DropdownData } from "./types";

// Containing div
export const StyledContainer = styled.div`
	display: block;
	width: fit-content;
`;

// Dropdown Trigger
export const StyledDropdownTriggerText = styled(Type)<{
	selectedItem: DropdownData<any> | null;
}>`
	${semanticFonts.bodyLarge};

	color: ${(props) =>
		!props.selectedItem
			? props.colorset?.text.disabled
			: props.colorset?.text.default};

	&:disabled {
		color: ${(props) => props.colorset?.text.disabled};
	}

	&:hover:not([disabled]) {
		background-color: ${(props) => props.colorset?.essential.hover};
	}
`;

// Dropdown Select Trigger
export const StyledDropdownSelectTriggerText = styled(Type)`
	${semanticFonts.bodyLarge};

	color: ${(props) =>
		props.disabled
			? props.colorset?.text.disabled
			: props.colorset?.text.default};

	&:hover:not([disabled]) {
		background-color: ${(props) => props.colorset?.essential.hover};
	}
`;

export const StyledDropdownTrigger = styled(
	React.forwardRef<HTMLElement, DropdownTriggerProps>(function Button(
		{ component: Component = "button", colorSet, dropdownSize, ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		const highlightColor = getColorSet(SemanticSetCores.PRIMARY_ALT).essential
			.default;
		const errorColor = getColorSet(SemanticSetCores.NEGATIVE).essential.default;
		const nonFocusBoxShadow = () => {
			if (props.error) {
				return `0 -${spacer2} 0 0 ${errorColor} inset !important`;
			}

			if (props.disabled) {
				return "none !important";
			}

			if (!props.disabled && !props.error && props.isMenuOpen) {
				return `0 -${spacer2} 0 0 ${highlightColor} inset !important`;
			}

			return "none !important";
		};

		return css`
			${rootStyle()};
			${formControlBaseSelect()};
			display: flex;
			flex-direction: column;
			text-align: start;
			overflow-wrap: break-word;

			border: none;

			width: ${props.dropdownSize === Sizes.LARGE ? spacer320 : spacer156};
			background-color: ${props.colorSet?.essential.default};
			border-radius: ${spacer4};
			padding: ${spacer10} ${spacer12} ${spacer12} ${spacer12};
			box-shadow: ${nonFocusBoxShadow()};

			&:disabled {
				background-color: ${props.colorSet?.essential.disabled};
			}

			&:hover:not([disabled]) {
				background-color: ${props.colorSet?.essential.hover};
			}

			&:focus-within {
				background-color: ${props.colorSet?.essential.focus};
				box-shadow: ${!props.disabled
					? `0 -${spacer2} 0 0 ${
							props.error ? errorColor : highlightColor
					  } inset`
					: "none"};
			}

			&:focus-visible {
				outline: none;
			}
		`;
	}}
`;

// Dropdown item
export const StyledDropdownItem = styled(
	React.forwardRef<HTMLElement, DropdownItemProps>(function TypeList(
		{ component: Component = "TypeListItem", disabled, colorSet, ...props },
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
		!props.disabled &&
		css`
			background-color: ${props.colorSet?.essential.hover};
		`}

	${(props) =>
		props.disabled &&
		css`
			color: ${props.colorSet?.text.disabled};
			background-color: ${props.colorSet?.essential.disabled};
		`}

		


	&:disabled {
		background-color: ${(props) => props.colorSet?.essential.disabled};
	}
`;

export const StyledDropdownTriggerContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${spacer8};
	width: 100%;
`;

export const StyledErrorTextDropdownTrigger = styled(Type)`
	margin-top: ${spacer8};
`;
