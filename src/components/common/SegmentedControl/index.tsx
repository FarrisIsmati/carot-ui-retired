import {
	ColorBaseCore,
	ColorSet,
	SemanticSetCores,
	colorBaseMap,
	getColorSet,
} from "@/styles/colors";
import { semanticFonts } from "@/styles/fonts";
import { spacer4, spacer40, spacer6 } from "@/styles/sizes";
import { AsProp, StyledWrapperProps } from "@/utils/typeHelpers";
import React from "react";
import styled, { css } from "styled-components";
import ButtonTertiary from "../Button/ButtonTertiary";

export type SegementedControlProps = Omit<StyledWrapperProps, "size"> & {
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
		`;
	}}
`;

export default React.forwardRef<HTMLElement, SegementedControlProps>(
	(
		{
			colorSet = getColorSet(SemanticSetCores.SECONDARY),
			component,
			children,
			"aria-label": ariaLabel,
			"aria-labelledby": ariaLabelledBy,
			...props
		},
		ref
	) => {
		return (
			<Container>
				<ButtonTertiary>1</ButtonTertiary>
				<ButtonTertiary>2</ButtonTertiary>
			</Container>
		);
	}
);
