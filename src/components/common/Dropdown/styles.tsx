import { SemanticSetCores, getColorSet } from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { formControlBaseSelect, rootStyle } from "@/styles/mixins";
import {
	Sizes,
	spacer10,
	spacer12,
	spacer156,
	spacer2,
	spacer320,
	spacer4,
	spacer8,
} from "@/styles/sizes";
import React from "react";
import { css, styled } from "styled-components";
import Type from "../Type";
import { DropdownTriggerProps } from "./DropdownTrigger";
import { DropdownData } from "./types";

// Dropdown Trigger
export const StyledDropdownTriggerText = styled(Type)<{
	selectedItem: DropdownData | null;
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
			if (props.disabled) {
				return "none !important";
			}

			if (!props.disabled && !props.error && props.isMenuOpen) {
				return `0 -${spacer2} 0 0 ${highlightColor} inset !important`;
			}

			if (!props.disabled && props.error) {
				return `0 -${spacer2} 0 0 ${errorColor} inset !important`;
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

			margin-top: ${spacer8};
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

export const StyledDropdownTriggerContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-top: ${spacer8};
	width: 100%;
`;

export const StyledErrorTextDropdownTrigger = styled(Type)`
	margin-top: ${spacer8};
`;
