import {
	ColorBaseCore,
	ColorSet,
	SemanticSetCores,
	colorBaseMap,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer2, spacer320, spacer4, spacer6 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import ButtonSegmentedControl from "./ButtonSegmentedControl";

export interface SegmentedControlOption {
	id: string;
	value: string | JSX.Element;
	isActive: boolean;
}

export type SegementedControlProps = Omit<
	StyledWrapperProps,
	"size" | "value" | "onChange"
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
	onChange: (index: number) => void;
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
			width: ${props.width ? spacer320 : "fit-content"};
			background-color: ${colorBaseMap[ColorBaseCore.NEUTRAL_9]};
			padding: ${spacer4};
			border-radius: ${spacer6};
			gap: ${spacer2};
			box-sizing: border-box;
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
			onChange,
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
						onClick={(e) => {
							e.preventDefault();
							onChange(i);
						}}
						isActive={option.isActive}
						width={
							props.width !== undefined
								? parseInt(props.width as string) / options.length
								: undefined
						}
					>
						{option.value}
					</ButtonSegmentedControl>
				))}
			</Container>
		);
	}
);
