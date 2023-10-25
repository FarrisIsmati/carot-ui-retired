import {
	ColorBaseCore,
	ColorSet,
	SemanticSetCores,
	colorBaseMap,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer2, spacer4, spacer40, spacer6 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import ButtonSegmentedControl from "../Button/ButtonSegmentedControl";

export interface SegmentedControlOption {
	id: string;
	value: string | JSX.Element;
	isActive: boolean;
}

export type SegementedControlProps = Omit<
	StyledWrapperProps,
	"size" | "value"
> & {
	/**
	 * Set the semantic color used by the button
	 * @default 'brightAccent
	 **/
	colorSet?: ColorSet;
	/**
	 * Render the component with a custom component or HTML element
	 * @default 'span'
	 **/
	component?: AsProp;
	/**
	 * Options
	 */
	options: SegmentedControlOption[];
	/**
	 * Change the selection
	 */
	onchange: (option: SegmentedControlOption, index: number) => void;
};

const Container = styled(
	React.forwardRef<HTMLElement, SegementedControlProps>(function Chip(
		{ component: Component = "span", ...props },
		ref
	) {
		return <Component {...props} ref={ref} />;
	})
)`
	${(props) => {
		return css`
			${semanticFonts.bodySmall}
			display: flex;
			width: fit-content;
			height: ${spacer40};
			background-color: ${colorBaseMap[ColorBaseCore.NEUTRAL_9]};
			padding: ${spacer4};
			border-radius: ${spacer6};
			gap: ${spacer2};
		`;
	}}
`;

export default React.forwardRef<HTMLElement, SegementedControlProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			component,
			children,
			options,
			onchange,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		return (
			<Container {...props} ref={ref} role="group">
				{options.map((option, i) => (
					<ButtonSegmentedControl
						onClick={() => {
							console.log("fuck it up");
							onchange(option, i);
						}}
						isActive={option.isActive}
					>
						{option.value}
					</ButtonSegmentedControl>
				))}
			</Container>
		);
	}
);
